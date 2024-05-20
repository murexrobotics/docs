# Setup `SITL` (macOS)

`SITL` (Software in the loop) allows testing of the software without access to any hardware components. To do so we need to setup a linux working environment.

### Create new VM

1. Install `OrbStack`

```sh
brew install orbstack
```

2. Create Ubuntu VM (Or re-use VM from mrxOS build)

Open OrbStack and create a new Ubuntu instance under "Linux > Machines"

3. Start VM

```sh
orb
```

### Enter `mrx` Directory

```sh
cd <PATH_TO_MRX>
```

### Install Dependencies

```sh
./Tools/environment_install/install-prereqs-ubuntu.sh
source ~/venv-ardupilot/bin/activate
python3 -m pip install empy==3.3.4
```

### Compile and Run `SITL`

```sh
cd ./ArduSub
../Tools/autotest/sim_vehicle.py -w
../Tools/autotest/sim_vehicle.py --help # List of all configuration options
```

### Further Refernces

- <https://ardupilot.org/dev/docs/using-sitl-for-ardupilot-testing.html>
