# MiniFOC ESC

## Outline

![Raytraced Render](/img/minifoc_v1_release.png)

The MiniFOC ESC is the world's first USB-modular, high-power density ESC capable of sensorless FOC. Future integration with an USB carrier board will provide all the advantages of the ANYESC in an even smaller and intuitive form factor.

## Detailed Description

The MiniFOC ESC hardware design utilizes an RP2040 MCU and Texas Instrument's DRV8316C three phase motor driver with integrated FETs, CSAs (Current Shunt Amplifier), and power distribution to form its motor architecture. Its commutation method capabilities are fully customizable, spanning from traditional TRAP to highly-efficient sensorless FOC. Dual USB connectors provide high power support, an extremely intuitive and hotswappable interface with a USB carrier board, and both USB and MASCP/UART communication capabilities, allowing for high bandwidth and live programming.

The MiniFOC ESC theoretically supports a load up to 40V 8A-peak, but has not been fully tested with T200 thrusters and other BLDCs yet. 

## Current Status

- `V1.0` hardware bringup and load testing in progress

## Integrated Sensors and ICs

- [RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
  - Dual Core ARM Cortex M0+
- [W25Q64JVXGIQ](https://www.winbond.com/resource-files/W25Q64JV%20RevK%2003102021%20Plus.pdf) 8MB QSPI flash
- [DRV8316C](https://www.ti.com/product/DRV8316C) Motor Driver with integrated FETs


### [Schematic (PDF)](/pdf/schematics/power_v2.0_schematic.pdf)

![Schematic Preview](/img/minifoc_schematic_preview.png)

### To Do

- Pull NSLEEP high
- Fix VRef cap
- Switch to RP2050
- Custom Sensorless FOC firmware
- USB ESC Carrier

### Changelog

V1.0:

- Initial Design