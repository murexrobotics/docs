# UART

Everyone's favorite LLM explains UART as:

> *UART (Universal Asynchronous Receiver-Transmitter) is a vital communication protocol in embedded systems. It facilitates serial data exchange between devices through asynchronous transmission, eliminating the need for a separate clock signal. UART operates with a set baud rate, ensuring synchronized data transfer. It employs a simple data format comprising start and stop bits around each 8-bit data byte. While half-duplex, microcontrollers' hardware UART modules streamline communication by handling timing intricacies. Developers configure parameters like baud rate and data format, while the firmware uses specific registers to transmit and receive data. Despite its basic nature, UART is crucial for debugging, sensor interfacing, and connecting devices due to its simplicity and widespread adoption.*

![UART Diagram](https://vanhunteradams.com/Protocols/UART/uart_hardware.png)

> *Simple diagram explaining how UART is wired. Notice how the TX (transmit) of one device goes to the RX (receive) of the other device. You can think of the "X" in TX and RX as a transfer. Nobody really knows why its called TX and RX, it's a remanent from the olden days.*

## Setting Up UART on the Compute Module 4

The Raspberry Pi 4 (and by extension the Compute Module 4) have 6 lanes of UART. There are two types of UART implementations: `PL011` and `mini UART`. UART is typically used by Bluetooth, while mini UART is provided as a debugging console. By default, the mini UART capabilities are disabled.

### Implementation

The Linux implementation of UART is as such:

| Linux device     | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `/dev/ttyS0`     | mini UART                                                                     |
| `/dev/ttyAMA0`   | first PL011 (UART0)                                                           |
| `/dev/serial0`   | primary alias/symbolic link to either `/dev/ttyS0` or `/dev/ttyAMA0`          |
| `/dev/serial1`   | secondary alias/symbolic link to either `/dev/ttyS0` or `/dev/ttyAMA0`        |
| `/dev/ttyAMA<x>` | Additional UART lanes that can be enabled through a DeviceTree overlay config |

### Enabling UART

The `enable_uart` flag, used in `/boot/config.txt` tells which UART lane is the primary UART. *The default baud rate of UART is 115200bps*

| Primary UART        | Default state of `enable_uart` flag |
| ------------------- | ----------------------------------- |
| mini UART           | 0                                   |
| first PL011 (UART0) | 1                                   |

### Disable Linux Serial Console

- `sudo raspi-config`
- Interface > Serial Port
- Login Shell > `NO`
- Serial Hardware > `YES`
- Reboot

**Important:** It may be required to disable the console through `systemctl` completely:

```sh
sudo systemctl stop serial-getty@ttyS0.service
sudo systemctl disable serial-getty@ttyS0.service
```

And any reference to the serial console **must be removed** from `/boot/cmdline.txt`.

### Switching BT and UART with the DeviceTree

`disable-bt`: disables BT, makes PL011 (UART0) the primary. Disables BT completely. Also run `sudo systemctl disable hciuart` to prevent BT from connecting to UART.

`miniuart-bt`: switches BT to use mini UART and PL011 (UART0) to primary UART. This will reduce BT baud rate. VPU core clock needs to be fixed because baud rate is dependent on clock. Either `force_turbo=1` or `core_freq=250`.

Usage example: `dtoverlay=disable-bt`

### PL011 vs mini-UART

mini-UART = smaller FIFO, no flow control (lose more characters are high baud), no break detection, no framing error detection, no parity bits, no RX timeout interrupt. Linked to VPU clock speed.

### In Conclusion

- Disable serial console but keep serial hardware
- Disable serial console systemctl service
- Remove serial console configuration in `cmdline.txt`
- Enable UART with `enable_uart=1`
- Switch to PL011 as primary with `disable-bt`
- Debugging with a UART-USB bridge like the CP2102 and using `picocom` and `minicom` is very helpful.

Thus, all references to UART will be to `/dev/ttyAMA0`. A better practice is to use `/dev/serial0` to utilize the abstraction provided by the symbolic links.

### Common Commands

- List serial aliases: `ls -l /dev` or `ls -l /dev | grep serial`
- Test TX of UART: `echo 'MUREX Robotics' > /dev/ttyAMA0`
- Test RX of UART: most likely `cat /dev/ttyAMA0`

For more information and what this section references:

- [Raspberry Pi Documentation <raspberrypi.com>](https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-uarts)
- [RPi 3 + 4 UART (Spell Foundry) <spellfoundry.com>](https://spellfoundry.com/2016/05/29/configuring-gpio-serial-port-raspbian-jessie-including-pi-3-4/)
- [A great practical overview of UART on RPi <medium.com>](https://jason19970210.medium.com/raspberry-pi-4-with-multiple-uart-interface-4eac75f74d7c)
- [RPi to Pico UART implementation <medium.com>](https://medium.com/geekculture/serial-connection-between-raspberry-pi-and-raspberry-pico-d6c0ba97c7dc)
