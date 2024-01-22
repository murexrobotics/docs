# Setting up Lua Scripting with Ardupilot on Linux

This page will explain how to set up [Lua Scripting](https://ardupilot.org/copter/docs/common-lua-scripts.html) on an Ardupilot on Linux system, such as the [MUREX Carrier Board](https://docs.murexrobotics.com/elec/boards/carrier), [Navio2](https://navio2.hipi.io), [Blue Robotics Navigator](https://bluerobotics.com/store/comm-control-power/control/navigator/), and others. This method has been tested on a Raspberry Pi 4/Compute Module 4, but should apply for other boards built on the Ardupilot Linux HAL.

1. Enable the `SCR_ENABLE` parameter, and restart the binary (`./ardusub, ./arducopter, etc.`)
2. A folder should be created ***from the directory that you started running the binary from***. You can also configure a custom [storage path](https://ardupilot.org/dev/docs/ardupilot-on-linux-starting.html#storage-directory) where the `scripts` are located.
   1. Find any folder named `scripts` that appear to be related to Ardupilot or newly created from setting the `SCR_ENABLE` parameter.
   2. If none can be found, create a folder from the directory that you started running the binary from named `scripts`
3. Load Lua scripts in the `scripts` folder. Ardupilot will automatically search `.lua` files.
