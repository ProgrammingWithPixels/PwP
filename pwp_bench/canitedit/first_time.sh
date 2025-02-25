if [ ! -f Dockerfile ]; then
    echo "Dockerfile not found"
    exit 1
fi


if [ ! -f setup_files/start.sh ]; then
    echo "setup_files/start.sh not found"
    exit 1
fi


if [ ! -f setup_files/setup.py ]; then
    echo "setup_files/setup.py not found"
    exit 1
fi

if [ ! -f setup_files/eval.py ]; then
    echo "setup_files/eval.py not found"
    exit 1
fi

if [ ! -f CanItEdit/ ]; then
    echo "CanItEdit/ not found"
    exit 1
fi


echo "Dataset seems to be setup properly"