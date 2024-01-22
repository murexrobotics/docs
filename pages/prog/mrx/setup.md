# Setup `mrx` Development Environment (macOS)

### Clone `mrx` Repository

```sh
git clone https://github.com/murexrobotics/mrx
cd mrx
git submodules update --recursive --init
```

### Install Dependencies

```sh
brew install gcc-arm-none-eabi gawk
brew tap messense/macos-cross-toolchains
brew install arm-unknown-linux-gnueabihf armv7-unknown-linux-gnueabihf
```

### Python Dependencies

```sh
python3 -m pip install empy==3.3.4
```

*NOTE: You must have a python version less that python 3.12*

```sh
python3 -V
> 3.11.7 # Recommended python version
```

### For uploading and other notes, refer to

   1. <https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md>
   2. <https://ardupilot.org/dev/docs/building-setup-mac.html>
   3. <https://docs.emlid.com/navio2/ardupilot/installation-and-running#launching-a-custom-ardupilot-binary>
