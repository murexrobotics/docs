# Ardupilot

## Compiling `ardupilot` on macOS

*insert prose here*

1. Clone `ardupilot` repository

```sh
git clone https://github.com/murexrobotics/ardupilot
cd ardupilot
```

2. Install dependencies

```sh
brew install gcc-arm-none-eabi gawk
brew tap messense/macos-cross-toolchains
brew install arm-unknown-linux-gnueabihf
```

3. Configure and compile

```sh
./waf configure --board murex_carrier
./waf sub
```

4. For uploading and other notes, refer to:
   1. https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md
   2. https://ardupilot.org/dev/docs/building-setup-mac.html
   3. https://docs.emlid.com/navio2/ardupilot/installation-and-running#launching-a-custom-ardupilot-binary