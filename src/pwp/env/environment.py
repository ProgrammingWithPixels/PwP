import concurrent.futures
import io
import json
import os
import socket
import subprocess
import tarfile
import tempfile
import time
from io import BytesIO, StringIO

import docker
import gdown
import matplotlib.pyplot as plt
import numpy as np  # Added for OpenCV compatibility
import pandas as pd
import requests
from PIL import Image, ImageDraw, ImageFont

from pwp.utils.utils import draw_bounding_boxes


def is_port_free(port):
    """
    Check if a given port is free on the host.

    Parameters:
        port (int): The port number to check.

    Returns:
        bool: True if the port is free, False otherwise.
    """
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(("", port))
            return True
        except socket.error:
            return False


def get_free_port():
    """
    Get a random free port on the host.

    Returns:
        int: An available port number.
    """
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("", 0))
        return s.getsockname()[1]


class PwP:
    def __init__(
        self,
        image_name="pwp_env",
        load_existing_container=True,
        enable_vnc=True,
        enable_ffmpeg=True,
        vscode_type="opensource",
    ):
        self.client = docker.from_env()
        self.image_name = image_name
        self.container = None
        self.screen_shot = None
        self.clipboard_content = None
        self.host_port_8080 = None
        self.host_port_3000 = None
        self.host_port_3001 = None
        self.host_port_vnc = None
        self.host_port_novnc = None
        self.vnc_password = "password"

        # Store configuration values as instance variables
        self.enable_vnc = enable_vnc
        self.enable_ffmpeg = enable_ffmpeg
        self.vscode_type = vscode_type

        if self.vscode_type == "official":
            print(
                "If pwp_env is already not built, we will be building the official version of VSCode. Note this would not support many features such as getting Set of Marks, but would be more stable."
            )

        if load_existing_container:
            # Check if the image exists
            try:
                self.client.images.get(image_name)
            except docker.errors.ImageNotFound:
                print(f"Image '{image_name}' not found. Building image...")
                if self.vscode_type == "opensource":
                    # Make sure that we have code-oss downloaded in docker/VSCode-linux-x64/code-oss is present, if not download it
                    if not os.path.exists("docker/VSCode-linux-x64/code-oss"):
                        print("Downloading code-oss")
                        # Download code-oss
                        # cd docker/VSCode-linux-x64/
                        # gdown https://drive.google.com/file/d/1Twlo2ADS0f-FKR3TJ2fzDmzAB2y7SVBR/view?usp=sharing
                        import gdown

                        gdown.download(
                            "https://drive.google.com/file/d/1Twlo2ADS0f-FKR3TJ2fzDmzAB2y7SVBR/view?usp=sharing",
                            "docker/VSCode-linux-x64/code-oss",
                        )

                # Build with appropriate arguments
                build_args = {"VSCODE_TYPE": vscode_type}
                self.client.images.build(
                    path="docker", tag=image_name, buildargs=build_args
                )
                self.client.images.get(image_name)

            # Determine port mappings
            self.host_port_8080 = self._assign_port(8080)
            self.host_port_3000 = self._assign_port(3000)
            self.host_port_3001 = self._assign_port(3001)

            # Only assign VNC ports if enabled
            if enable_vnc:
                self.host_port_vnc = self._assign_port(5900)
                self.host_port_novnc = self._assign_port(6080)

            # Define port mappings
            ports = {
                "8080/tcp": self.host_port_8080,
                "3000/tcp": self.host_port_3000,
                "3001/tcp": self.host_port_3001,
            }

            if enable_vnc:
                ports.update(
                    {"5900/tcp": self.host_port_vnc, "6080/tcp": self.host_port_novnc}
                )

            # Environment variables for feature toggles
            env = {
                "DISPLAY": ":1",
                "ENABLE_VNC": str(enable_vnc).lower(),
                "ENABLE_FFMPEG": str(enable_ffmpeg).lower(),
            }
            if enable_vnc:
                env["VNC_PASSWORD"] = self.vnc_password

            # Run the container
            try:
                self.container = self.client.containers.run(
                    self.image_name,
                    detach=True,
                    tty=True,
                    stdin_open=True,
                    ports=ports,
                    environment=env,
                    cap_add=["CHECKPOINT_RESTORE", "SYS_ADMIN"],
                    security_opt=["seccomp=unconfined"],
                    privileged=True,
                )
                print(f"Started container '{self.container.short_id[:12]}' with ports:")
                print(f"  - HTTP server: {self.host_port_8080}")
                print(f"  - API ports: {self.host_port_3000}, {self.host_port_3001}")
                if enable_vnc:
                    print(f"  - VNC port: {self.host_port_vnc}")
                    print(f"  - noVNC (web) port: {self.host_port_novnc}")
                    print(f"  - VNC password: {self.vnc_password}")
                    print(f"  - VNC URL: http://localhost:{self.host_port_novnc}/vnc.html?password={self.vnc_password}")
            except docker.errors.APIError as e:
                print(f"Failed to start container: {e}")
                return

            self._get_observation()

    def _assign_port(self, desired_port):
        """
        Assign a host port. Prefer the desired_port; if it's occupied, assign a random free port.

        Parameters:
            desired_port (int): The preferred host port to assign.

        Returns:
            int: The assigned host port.
        """
        if is_port_free(desired_port):
            print(f"Assigning desired host port {desired_port}.")
            return desired_port
        else:
            free_port = get_free_port()
            print(
                f"Host port {desired_port} is in use. Assigned random free port {free_port} instead."
            )
            return free_port

    def reset(self):
        """
        Reset the environment by stopping and removing the current container,
        then starting a new one with appropriate port mappings.

        Returns:
            dict: Observation containing the screenshot and clipboard content.
        """
        if self.container:
            try:
                self.container.stop()
                self.container.remove()
                print(
                    f"Stopped and removed container '{self.container.short_id[:12]}'."
                )
            except docker.errors.APIError as e:
                print(f"Error stopping/removing container: {e}")

        # Assign ports again
        self.host_port_8080 = self._assign_port(8080)
        self.host_port_3000 = self._assign_port(3000)
        self.host_port_3001 = self._assign_port(3001)

        # Only assign VNC ports if enabled
        if self.enable_vnc:
            self.host_port_vnc = self._assign_port(5900)
            self.host_port_novnc = self._assign_port(6080)

        # Define port mappings
        ports = {
            "8080/tcp": self.host_port_8080,
            "3000/tcp": self.host_port_3000,
            "3001/tcp": self.host_port_3001,
        }

        if self.enable_vnc:
            ports.update(
                {"5900/tcp": self.host_port_vnc, "6080/tcp": self.host_port_novnc}
            )

        # Environment variables for feature toggles
        env = {
            "DISPLAY": ":1",
            "ENABLE_VNC": str(self.enable_vnc).lower(),
            "ENABLE_FFMPEG": str(self.enable_ffmpeg).lower(),
        }
        if self.enable_vnc:
            env["VNC_PASSWORD"] = self.vnc_password

        # Run the new container
        try:
            self.container = self.client.containers.run(
                self.image_name,
                detach=True,
                tty=True,
                stdin_open=True,
                ports=ports,
                environment=env,
                cap_add=["CHECKPOINT_RESTORE", "SYS_ADMIN"],
                security_opt=["seccomp=unconfined"],
                privileged=True,
            )
            print(f"Started new container '{self.container.short_id[:12]}' with ports:")
            print(f"  - HTTP server: {self.host_port_8080}")
            print(f"  - API ports: {self.host_port_3000}, {self.host_port_3001}")
            if self.enable_vnc:
                print(f"  - VNC port: {self.host_port_vnc}")
                print(f"  - noVNC (web) port: {self.host_port_novnc}")
                print(f"  - VNC password: {self.vnc_password}")
                print(f"  - VNC URL: http://localhost:{self.host_port_novnc}/vnc.html?password={self.vnc_password}")
        except docker.errors.APIError as e:
            print(f"Failed to start container: {e}")
            return

        return self._get_observation()

    def _get_observation(self):
        """
        Capture screenshot and clipboard content from the container.

        Returns:
            dict: Contains 'screenshot' and 'clipboard' data.
        """
        self.screen_shot = self._capture_screenshot()
        self.clipboard_content = self._get_clipboard_content()
        return {"screenshot": self.screen_shot, "clipboard": self.clipboard_content}

    def get_som_image(self, img, caption_icons=False, force_gap=None):
        """
        Process and annotate the image with bounding boxes based on DOM data.

        Parameters:
            img (PIL.Image.Image): The input image to process.

        Returns:
            tuple: (Annotated image, CSV data string)
        """
        try:
            response = requests.get(
                f"http://localhost:{self.host_port_3000}/api/get-dom", timeout=10
            )
            response.raise_for_status()
            data = response.json()
            data_string = data["csv"]
            viewport = data["viewport"]
            # Extract viewport parameters
            xoffset, yoffset, width, height = [
                int(part)
                for part in [
                    "".join(filter(str.isdigit, x)) for x in viewport.split(",")
                ]
                if part != ""
            ]
            gap = 1080 - height
            annotated_img = draw_bounding_boxes(
                data_string,
                img,
                viewport_size={"height": 1080, "width": 1920},
                gap=gap if force_gap is None else force_gap,
                caption_icons=caption_icons,
            )
            return annotated_img, data
        except Exception as e:
            print(f"Error in get_som_image: {e}")
            return img, None

    def get_file_view(self):
        response = requests.get(f"http://localhost:{self.host_port_3001}/fileview")
        # response.raise_for_status()
        """
        Returns:
            dict: Contains 'file_view' data.
            {
                filePath: filePath,
                visibleLines: visibleLines,
                cursorPosition: {
                    line: cursorPosition.line,
                    character: cursorPosition.character
                },
                fileContent: fileContent
            } or 

            {
                'error': 'No active editors'
            }
        """
        return response.json()

    def _capture_screenshot(self):
        """
        Capture a screenshot from the container.

        Returns:
            PIL.Image.Image or None: The captured screenshot image, or None if failed.
        """
        try:
            self.run_command("rm -f /home/devuser/screenshot.png")
            self.run_command("scrot --pointer /home/devuser/screenshot.png")
            response = requests.get(
                f"http://localhost:{self.host_port_8080}/screenshot.png"
            )
            response.raise_for_status()
            return Image.open(BytesIO(response.content))
        except Exception as e:
            print(f"Error capturing screenshot: {e}")
            return None

    def _get_clipboard_content(self):
        """
        Retrieve clipboard content from the container.

        Returns:
            str or None: Clipboard content, or None if not implemented.
        """
        # Placeholder: Implement clipboard content retrieval from the container
        return None

    def run_command(
        self, command, root=False, workdir=None, wait=0, with_bash_ic=False, timeout=30
    ):
        """
        Execute a command inside the container.

        Parameters:
            command (str): The command to execute.
            root (bool): Whether to run the command as root.

        Returns:
            tuple: (output, exit_code)
        """
        try:
            start_cmd = ["bash", "-ic"] if with_bash_ic else ["sh", "-c"]
            exec_id = self.client.api.exec_create(
                container=self.container.id,
                user="root" if root else "devuser",
                workdir=workdir,
                cmd=(
                    start_cmd + [command]
                    if isinstance(command, str)
                    else start_cmd + command
                ),
                tty=True,
            )
            executor = concurrent.futures.ThreadPoolExecutor()
            future = executor.submit(self.client.api.exec_start, exec_id["Id"])
            try:
                output = future.result(timeout=timeout)
                # Decode output and get exit code as before
                exit_code = self.client.api.exec_inspect(exec_id["Id"])["ExitCode"]
                # return output.decode().strip(), exit_code
            except concurrent.futures.TimeoutError:
                future.cancel()
                print("Timeout")
                raise TimeoutError("Command execution timed out")
            finally:
                executor.shutdown(wait=False)  # Prevent waiting for the future
            # Add timeout to exec_start using requests-futures or similar
            # with concurrent.futures.ThreadPoolExecutor() as executor:
            #     future = executor.submit(self.client.api.exec_start, exec_id['Id'], stream=True)
            #     try:
            #         print('Hurrah')
            #         output = future.result(timeout=timeout)  # 60 second timeout
            #     except concurrent.futures.TimeoutError:
            #         print('Timeout')
            #         return "Error: Command execution timed out", -1
            # raise TimeoutError("Command execution timed out")
            # Decode output if necessary
            if isinstance(output, bytes):
                output = output.decode("utf-8", errors="replace")
            if wait > 0:
                time.sleep(wait)
            return output, 0
        except docker.errors.APIError as e:
            print(f"Error running command '{command}': {e}")
            return "", -1
        except Exception as e:
            return "Error: " + str(e), -1

    def render(self, in_window=False):
        """
        Render the current state (screenshot) of the environment.

        Parameters:
            in_window (bool): If True, display the image in a window using OpenCV.

        Returns:
            PIL.Image.Image or None: The screenshot image if not displaying in a window.
        """
        if in_window:
            # Open cv2 window
            import cv2

            if self.screen_shot:
                img_np = np.array(self.screen_shot)
                # Convert RGB to BGR for OpenCV
                img_np = img_np[:, :, ::-1].copy()
                cv2.imshow("Screenshot", img_np)
                cv2.waitKey(0)
                cv2.destroyAllWindows()
            else:
                print("No screenshot available to display.")
        else:
            return self._capture_screenshot()

    def add_full_checkpoint(self, checkpoint_name, close_vscode=True):
        """
        Create a full checkpoint of the container.
        """
        # TODO: Implement file system backup using commit
        if not self.container:
            raise RuntimeError("Container not started.")

        is_criu_installed = self.is_criu_installed()
        if not is_criu_installed:
            print("Error: CRIU is not installed. Please install CRIU and try again.")
            return
        if not self.is_docker_experimental_enabled():
            print(
                "Error: Docker experimental features are not enabled. Please enable them and try again."
            )
            return

        # Capture VSCode process command before killing it
        if close_vscode:
            output, _ = self.run_command("ps -ef | grep code | grep -v grep")
            vscode_cmd = None
            if output:
                # Parse the command from ps output
                try:
                    # ps output format: UID PID PPID C STIME TTY TIME CMD
                    vscode_cmd = " ".join(output.split()[7:])
                    print(f"Captured VSCode command: {vscode_cmd}")
                except Exception as e:
                    print(f"Error parsing VSCode command: {e}")

            self.run_command("kill -9 $(pgrep -f code)")

        try:
            subprocess.run(
                [
                    "docker",
                    "checkpoint",
                    "create",
                    "--leave-running",
                    checkpoint_name,
                    self.container.id,
                ],
                check=True,
            )
            print(f"Checkpoint '{checkpoint_name}' created.")
        except subprocess.CalledProcessError as e:
            print(f"Error creating checkpoint: {e}")

    def restore_full_checkpoint(self, checkpoint_name):
        """
        Restore a full checkpoint of the container.
        """
        if not self.container:
            raise RuntimeError("Container not started.")

        try:
            subprocess.run(
                ["docker", "start", "--checkpoint", checkpoint_name, self.container.id],
                check=True,
            )
            print(f"Checkpoint '{checkpoint_name}' restored.")
        except subprocess.CalledProcessError as e:
            print(f"Error restoring checkpoint: {e}")

    def add_checkpoint(self, checkpoint_name):
        """
        Create a Docker commit as a checkpoint.

        Parameters:
            checkpoint_name (str): The tag name for the checkpoint.
        """
        if not self.container:
            raise RuntimeError("Container not started.")

        print("Disclaimer: Slow and Possibly Buggy Feature")

        try:
            self.client.api.commit(
                container=self.container.id,
                repository=self.image_name,
                tag=checkpoint_name,
            )
            print(f"Checkpoint '{checkpoint_name}' created.")
        except docker.errors.APIError as e:
            print(f"Error creating checkpoint: {e}")

    def restore_checkpoint(self, checkpoint_name):
        """
        Restore the container to the state saved in the specified checkpoint.

        Parameters:
            checkpoint_name (str): The tag name of the checkpoint to restore.

        Returns:
            dict: Observation containing the screenshot and clipboard content.
        """
        if self.container:
            self.stop()
            self.remove()

        restored_image = f"{self.image_name}:{checkpoint_name}"

        # Assign ports again
        self.host_port_8080 = self._assign_port(8080)
        self.host_port_3000 = self._assign_port(3000)
        self.host_port_3001 = self._assign_port(3001)

        # Only assign VNC ports if enabled
        if self.enable_vnc:
            self.host_port_vnc = self._assign_port(5900)
            self.host_port_novnc = self._assign_port(6080)

        # Define port mappings
        ports = {
            "8080/tcp": self.host_port_8080,
            "3000/tcp": self.host_port_3000,
            "3001/tcp": self.host_port_3001,
        }

        if self.enable_vnc:
            ports.update(
                {"5900/tcp": self.host_port_vnc, "6080/tcp": self.host_port_novnc}
            )

        # Environment variables for feature toggles
        env = {
            "DISPLAY": ":1",
            "ENABLE_VNC": str(self.enable_vnc).lower(),
            "ENABLE_FFMPEG": str(self.enable_ffmpeg).lower(),
        }
        if self.enable_vnc:
            env["VNC_PASSWORD"] = self.vnc_password

        try:
            print(f"Starting container from image {restored_image}...")
            self.container = self.client.containers.run(
                restored_image,
                detach=True,
                tty=True,
                stdin_open=True,
                ports=ports,
                environment=env,
                cap_add=["CHECKPOINT_RESTORE", "SYS_ADMIN"],
                security_opt=["seccomp=unconfined"],
                privileged=True,
            )
            print(f"Restored container '{self.container.short_id[:12]}' with ports:")
            print(f"  - HTTP server: {self.host_port_8080}")
            print(f"  - API ports: {self.host_port_3000}, {self.host_port_3001}")
            if self.enable_vnc:
                print(f"  - VNC port: {self.host_port_vnc}")
                print(f"  - noVNC (web) port: {self.host_port_novnc}")
                print(f"  - VNC password: {self.vnc_password}")
                print(f"  - VNC URL: http://localhost:{self.host_port_novnc}/vnc.html?password={self.vnc_password}")
            # Print container logs in real-time
            print("\nContainer startup logs:")
            full_text = ""
            for line in self.container.logs(stream=True, follow=True, timestamps=True):
                print(f"{line.decode('utf-8').strip()}", end="")
                full_text += line.decode("utf-8").strip()
                # Optional: Break after seeing a specific message indicating startup is complete
                if full_text.endswith(
                    "8080"
                ):  # Adjust this condition based on your startup script
                    break

        except docker.errors.APIError as e:
            print(
                f"Failed to restore container from checkpoint '{checkpoint_name}': {e}"
            )
            return

        return self._get_observation()

    def step(self, command, root=False):
        """
        Execute a command inside the container with optional root privileges.

        Parameters:
            command (str): The command to execute.
            root (bool): Whether to execute as root.

        Returns:
            dict: Contains 'output', 'exit_code', and 'observation'.
        """
        print("Executing command: ", command)
        if not self.container:
            raise RuntimeError("Container not started.")

        output, exit_code = self.run_command(command, root=root)

        return {
            "output": output,
            "exit_code": exit_code,
            "observation": self._get_observation(),
        }

    def pause(self):
        """
        Pause the container.
        """
        if not self.container:
            raise RuntimeError("Container not started.")
        try:
            self.container.pause()
            print(f"Paused container '{self.container.short_id[:12]}'.")
        except docker.errors.APIError as e:
            print(f"Error pausing container: {e}")

    def resume(self):
        """
        Resume the container.
        """
        if not self.container:
            raise RuntimeError("Container not started.")
        try:
            self.container.unpause()
            print(f"Resumed container '{self.container.short_id[:12]}'.")
        except docker.errors.APIError as e:
            print(f"Error resuming container: {e}")

    def stop(self):
        """
        Stop the container.
        """
        if not self.container:
            raise RuntimeError("Container not started.")
        try:
            self.container.stop()
            print(f"Stopped container '{self.container.short_id[:12]}'.")
        except docker.errors.APIError as e:
            print(f"Error stopping container: {e}")

    def remove(self):
        """
        Remove the container.
        """
        if self.container:
            try:
                self.container.remove()
                print(f"Removed container '{self.container.short_id[:12]}'.")
            except docker.errors.APIError as e:
                print(f"Error removing container: {e}")

    def __del__(self):
        """
        Destructor to ensure the container is stopped and removed.
        """
        try:
            self.stop()
            self.remove()
        except:
            pass

    # ---- Helper Methods Continued ----

    def is_process_running(self, process_name, timeout=30, root=False):
        """
        Check if a process is running inside the container.

        Parameters:
            process_name (str): Name of the process to check.
            timeout (int): Maximum time to wait in seconds.

        Returns:
            bool: True if process is running, False otherwise.
        """
        for _ in range(timeout):
            output, _ = self.run_command(f"pgrep -fl {process_name}", root=root)
            if process_name in output:
                return True
            time.sleep(1)
        return False

    def is_file_present(self, file_path, timeout=30):
        """
        Check if a file exists inside the container.

        Parameters:
            file_path (str): Path to the file.
            timeout (int): Maximum time to wait in seconds.

        Returns:
            bool: True if file exists, False otherwise.
        """
        for _ in range(timeout):
            output, _ = self.run_command(f"ls {file_path}")
            if "No such file or directory" not in output:
                return True
            time.sleep(1)
        return False

    def is_window_present(self, window_title, timeout=30):
        """
        Check if a window with the given title is present.

        Parameters:
            window_title (str): Title of the window.
            timeout (int): Maximum time to wait in seconds.

        Returns:
            bool: True if window is present, False otherwise.
        """
        for _ in range(timeout):
            output, _ = self.run_command(f'wmctrl -l | grep "{window_title}"')
            if output.strip():
                return True
            time.sleep(1)
        return False

    def is_extension_installed(self, extension_id, timeout=60):
        """
        Check if a VSCode extension is installed.

        Parameters:
            extension_id (str): ID of the extension (e.g., 'ms-python.python').
            timeout (int): Maximum time to wait in seconds.

        Returns:
            bool: True if extension is installed, False otherwise.
        """
        for _ in range(timeout):
            output, _ = self.run_command("code --list-extensions")
            if extension_id in output.splitlines():
                return True
            time.sleep(1)
        return False

    def copy_from_container(self, container_path, temp_file):
        """
        Copy a file from the container to a temporary file on the host.

        Parameters:
            container_path (str): Path of the file in the container.
            temp_file (str): Path of the temporary file on the host.
        """
        try:
            stream, _ = self.container.get_archive(container_path)
            with tarfile.open(fileobj=io.BytesIO(b"".join(stream)), mode="r|*") as tar:
                for member in tar:
                    if member.name == container_path.split("/")[-1]:
                        content = tar.extractfile(member).read()
                        with open(temp_file, "wb") as f:
                            f.write(content)
                        break
            print(f"Copied from container: {container_path} to {temp_file}")
        except Exception as e:
            return False
            print(f"Error copying from container: {e}")

    def copy_to_container(self, temp_file, container_path):
        """
        Copy a file from the host to a specified path in the container.

        Parameters:
            temp_file (str): Path of the temporary file on the host.
            container_path (str): Path where the file should be copied in the container.
        """
        try:
            with open(temp_file, "rb") as f:
                data = f.read()
            tar_stream = io.BytesIO()
            with tarfile.open(fileobj=tar_stream, mode="w") as tar:
                tarinfo = tarfile.TarInfo(name=container_path.split("/")[-1])
                tarinfo.size = len(data)
                tar.addfile(tarinfo, io.BytesIO(data))
            tar_stream.seek(0)
            self.container.put_archive(container_path.rsplit("/", 1)[0], tar_stream)
            print(f"Copied {temp_file} to {container_path} in the container.")
        except Exception as e:
            print(f"Error copying to container: {e}")

    def set_assisted_mode_on(
        self,
    ):
        # Find the vscode configuration file in docker container
        config_path = "/home/devuser/.config/Code - OSS/User/settings.json"

        # If it doesn't exist, create it
        self.run_command(f'mkdir -p "/home/devuser/.config/Code - OSS/User"')

        # Prepare the settings
        settings = {
            "editor.autoClosingBrackets": "never",
            "editor.autoClosingQuotes": "never",
            "editor.autoIndent": "none",
            "editor.autoClosingParentheses": "never",
            "editor.autoSurround": "never",
            "python.analysis.autoIndent": True,
            "files.autoSave": "afterDelay",
        }

        # Check if file exists and read its content
        self.run_command(f'touch "{config_path}"')
        _, stderr = self.run_command(f'cat "{config_path}"')
        if not stderr:
            # File exists, read and update settings
            output, _ = self.run_command(f'cat "{config_path}"')
            try:
                existing_settings = json.loads(output)
            except:
                existing_settings = {}
            existing_settings.update(settings)
            settings = existing_settings

        # Write the settings to the file
        settings_json = json.dumps(settings, indent=4)
        self.run_command(f"echo '{settings_json}' > \"{config_path}\"")

    def file_read(self, file_name):
        """
        Read the file content present in the container using docker and return the content.

        Parameters:
            file_name (str): The path to the file inside the container.

        Returns:
            str: The content of the file.
        """
        if not self.container:
            raise RuntimeError("Container not started.")

        try:
            # Use Docker's API to stream the file content
            stream, _ = self.container.get_archive(file_name)
            with tarfile.open(fileobj=io.BytesIO(b"".join(stream)), mode="r|*") as tar:
                for member in tar:
                    if member.name == file_name.split("/")[-1]:
                        file_content = tar.extractfile(member).read()
                        return file_content.decode("utf-8", errors="replace")
        except docker.errors.APIError as e:
            print(f"Error reading file '{file_name}': {e}")
            return None
        except Exception as e:
            print(f"Unexpected error: {e}")
            return None

    def file_append(self, file_name, content):
        """
        Append the content to the file inside the container.

        Parameters:
            file_name (str): The path to the file inside the container.
            content (str): The content to append to the file.
        """
        if not self.container:
            raise RuntimeError("Container not started.")

        # Create a temporary file
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            # Copy the file from the container to the temporary file
            self.copy_from_container(file_name, temp_file.name)

            # Append the content to the temporary file
            with open(temp_file.name, "a") as f:
                f.write(content)

        # Copy the modified file back to the container
        self.copy_to_container(temp_file.name, file_name)

    def file_write(self, file_name, content):
        """
        Write the content to the file inside the container.
        """
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            with open(temp_file.name, "w") as f:
                f.write(content)
            self.copy_to_container(temp_file.name, file_name)

    def file_replace(self, file_name, old_content, new_content):
        """
        Replace the old content with the new content in the file inside the container.

        Parameters:
            file_name (str): The path to the file inside the container.
            old_content (str): The content to be replaced.
            new_content (str): The content to replace with.
        """
        if not self.container:
            raise RuntimeError("Container not started.")

        # Create a temporary file
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            # Copy the file from the container to the temporary file
            self.copy_from_container(file_name, temp_file.name)

            # Read and replace the content in the temporary file
            with open(temp_file.name, "r") as f:
                content = f.read()

            updated_content = content.replace(old_content, new_content)

            # Write the updated content back to the temporary file
            with open(temp_file.name, "w") as f:
                f.write(updated_content)

        # Copy the modified file back to the container
        self.copy_to_container(temp_file.name, file_name)

    def get_vnc_connection_info(self):
        """
        Get VNC connection information.

        Returns:
            dict: Contains VNC connection details including ports and password.
        """
        return {
            "vnc_port": self.host_port_vnc,
            "novnc_port": self.host_port_novnc,
            "password": self.vnc_password,
            "vnc_address": f"localhost:{self.host_port_vnc}",
            "novnc_url": f"http://localhost:{self.host_port_novnc}/vnc.html",
        }

    def is_docker_experimental_enabled(self):
        """
        Check if Docker experimental features are enabled.

        Returns:
            bool: True if experimental features are enabled, False otherwise.
        """
        try:
            # Check daemon configuration
            daemon_info = self.client.api.info()
            return daemon_info.get("ExperimentalBuild", False)
        except Exception as e:
            print(f"Error checking Docker experimental status: {e}")
            return False

    def is_criu_installed(self):
        """
        Check if CRIU is installed in the system.

        Returns:
            bool: True if CRIU is installed and accessible, False otherwise.
        """
        try:
            # Try to execute criu --version
            output, exit_code = self.run_command("criu --version", root=True)
            if exit_code == 0 and "Version" in output:
                print(f"CRIU is installed: {output.strip()}")
                return True
            else:
                print("CRIU is not installed or not accessible")
                return False
        except Exception as e:
            print(f"Error checking CRIU installation: {e}")
            return False

    def run_vscode(self, maximize=True, root=False):
        # Check if vscode is already running
        if self.is_process_running("code", timeout=1):
            print("VSCode is already running")
            return

        # Run vscode in the background
        self.run_command("mkdir -p /home/devuser/evaluation", root=root)
        self.run_command("code --disable-workspace-trust --no-sandbox --disable-gpu /home/devuser/evaluation", root=root)

        if maximize:
            # Maximize the window
            while True:
                self.run_command('wmctrl -i -r $(wmctrl -l | grep "Code - OSS" | awk \'{print $1}\') -e 0,0,0,1920,1080', wait=2)
                window_info = self.run_command('wmctrl -lG | grep "Code - OSS"')[0]
                # Get window geometry 
                # Check if window dimensions match target
                if '1920 1080' in window_info:
                    break
                print('Trying to resize window', window_info)
                time.sleep(5)