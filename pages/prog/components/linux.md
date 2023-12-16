# Linux

Virtualized compilation of the Raspberry Pi Linux Kernel on macOS through Ubuntu using OrbStack.

*insert prose here*

## Compiling Linux Kernel

1. Install OrbStack

```sh
brew install --cask orbstack
```

2. Create a case-sensitive APFS filesystem volume to store the Linux source code
   1. Open Disk Utility
   2. Choose root disk (APPLE SSD .... Media)
   3. Click "partition" on top right
   4. Create a reasonably sized APFS case-sensitive filesystem (around 20 GB)
   5. Allow system to repartition (may take a few minutes)
3. Open OrbStack and create a new Ubuntu instance under "Linux > Machines"

4. `orb` to start the hypervisor. Stay in the Ubuntu environment for next steps.

5. Clone Linux source code to the new case-sensitive partition

```sh
sudo apt install -y git bc bison flex libssl-dev make libc6-dev libncurses5-dev crossbuild-essential-armhf crossbuild-essential-arm64
cd /Volumes/<PARTITION NAME>
git clone --depth=1 https://github.com/murexrobotics/linux
```

6. Make config files

```sh
cd linux
KERNEL=kernel8
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- bcm2711_defconfig
```

5. Make modifications to the kernel (if modifications are needed)

```sh
make menuconfig
```

6. Compile the kernel

```sh
make -j<NUMBER_OF_THREADS> ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- Image modules dtbs
```

```sh
# Example for M3 Max:
make -j14 ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- Image modules dtbs
```

*unsure, but the number of threads can be found with the `htop` command and seeing how many "bars" appear at the top*

Depending on system performance, the build process should take 15 minutes to an hour.

***note: actual flashing onto an RPi has not been tested***

## Next steps & external references

- https://www.jeffgeerling.com/blog/2020/cross-compiling-raspberry-pi-os-linux-kernel-on-macos
- https://www.raspberrypi.com/documentation/computers/linux_kernel.html