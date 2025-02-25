import json
import os
from typing import Any, Dict, Optional

import imagehash
from PIL import Image


class ImageCache:
    def __init__(
        self,
        cache_file: str = "image_cache.json",
        hash_size: int = 256,
        max_distance: int = 5,
    ):
        """
        Initialize the ImageCache.

        :param cache_file: Path to the JSON file used for caching.
        :param hash_size: Size of the hash. Larger values increase precision but use more space.
        :param max_distance: Maximum Hamming distance to consider two images as similar.
        """
        self.cache_file = cache_file
        self.hash_size = hash_size
        self.max_distance = max_distance
        self.cache: Dict[str, Any] = self._load_cache()

    def _compute_image_hash(self, img: Image.Image) -> imagehash.ImageHash:
        """
        Compute the perceptual hash of an image.

        :param img: PIL Image object.
        :return: ImageHash object.
        """
        return imagehash.phash(img, hash_size=self.hash_size)

    def _load_cache(self) -> Dict[str, Any]:
        """
        Load the cache from the JSON file.

        :return: Dictionary representing the cache with hash strings as keys.
        """
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, "r") as f:
                    cache = json.load(f)
                # print(f"Loaded cache from '{self.cache_file}'.")
                return cache
            except (json.JSONDecodeError, IOError) as e:
                print(f"Error loading cache file '{self.cache_file}': {e}")
                return {}
        else:
            print(f"No existing cache file found. Starting with an empty cache.")
            return {}

    def _save_cache_to_file(self) -> None:
        """
        Save the current cache to the JSON file.
        """
        try:
            with open(self.cache_file, "w") as f:
                json.dump(self.cache, f, indent=4)
            # print(f"Cache saved to '{self.cache_file}'.")
        except IOError as e:
            print(f"Error saving cache to file '{self.cache_file}': {e}")

    def _find_similar_hash(self, target_hash: imagehash.ImageHash) -> Optional[Any]:
        """
        Find a value in the cache that has a hash within the maximum Hamming distance.

        :param target_hash: ImageHash object of the target image.
        :return: The cached value if a similar hash is found; otherwise, None.
        """
        for cached_hash_str, value in self.cache.items():
            cached_hash = imagehash.hex_to_hash(cached_hash_str)
            distance = target_hash - cached_hash
            if distance <= self.max_distance:
                print(f"Found similar image with Hamming distance {distance}.")
                return value
        return None

    def get_cache(self, img: Image.Image) -> Optional[Any]:
        """
        Retrieve the cached value for an image if a similar one exists.

        :param img: PIL Image object.
        :return: Cached value if found; otherwise, None.
        """
        target_hash = self._compute_image_hash(img)
        # print(f"Computed hash for the image: {target_hash}")
        cached_value = self._find_similar_hash(target_hash)
        if cached_value is not None:
            ...
            # print("Loaded value from cache.")
        else:
            print("No similar image found in cache.")
        return cached_value

    def save_cache(self, img: Image.Image, value: Any) -> None:
        """
        Save the processed value for an image into the cache.

        :param img: PIL Image object.
        :param value: The value to cache (e.g., processing results).
        """
        img_hash = self._compute_image_hash(img)
        hash_str = img_hash.__str__()
        self.cache[hash_str] = value
        # print(f"Saving hash '{hash_str}' to cache with value: {value}")
        self._save_cache_to_file()

    def clear_cache(self) -> None:
        """
        Clear the entire cache and delete the cache file.
        """
        self.cache = {}
        if os.path.exists(self.cache_file):
            try:
                os.remove(self.cache_file)
                print(f"Cache file '{self.cache_file}' deleted.")
            except OSError as e:
                print(f"Error deleting cache file '{self.cache_file}': {e}")
        else:
            print("Cache file does not exist. Nothing to delete.")
