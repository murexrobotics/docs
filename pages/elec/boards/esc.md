# ESC

## Outline

The MUREX ESC module is one of the first ESC agnostic speed controlling systems. It is a compact, high power electronic speed controller (ESC) control board, paired with a general purpose MCU to allow for "universal" compatibility. This allows a variety of modules to be used to fit the application, or allow for rapid replacement in the event of a device failure.

## Detailed Description

There are plans to have multiple, independent versions of this board, hence its "module" name. More modules will be listed below as designs arise.

- "STESC" module  ––>  B-G431B-ESC1 + RP2040
  - This ESC design utilizes the B-G431B-ESC1 Discovery kit as its driving element. Utilizing a STM32G431CB MCU, L6387 gate drivers, and STL180N6F7 FETs, it is capable of computing FOC (field-oriented control drive) or 6-step trap (trapezoidal) control algorithms. Important features include:
    - 40A peak current
    - OCP/OVP (overcurrent/overvoltage) protection
    - PWM/UART/CAN
    - User configurable LED
    - 3 shunt resistors
  - The RP2040 acts as its abstraction layer. Communicating over UART to the [MUREX Carrier Board](./carrier.md), the RP2040 acts as a bridge between the B-G431B-ESC1 and the rest of the system. This module can also communicate over USB over an on-board USB-C connector (5.1kΩ pull down on CC1 and CC2 equipped). There are programmable LEDs for immediate end-user feedback and configurable ADC pins for providing rapid telemetry from the ESC. Note that this RP2040 removes any voltage regulation in favor of the [MUREX Power Board](./power.md).

- "DRVESC" module  ––>  DRV8305 + CSD18540Q5B FETs + RP2040
  - This ESC design utilizes an RP2040 MCU, Texas Instrument's DRV8305NPHP three phase gate driver with integrated CSAs (Current Shunt Amplifier), and CSD18540Q5B FETs to form its motor architecture. Its commutation method capabilities have yet to be determined. Important features include:
    - 30A peak current
    - MOSFET Shoot-through protection and OCP
    - Overtemperature protection
    - PWM/UART
    - 3 integrated CSAs with shunts
  - The RP2040 acts as the control system of the DRVESC as well as its abstraction layer. It communicates over SPI with the DRV8305, sending PWM signals and receiving fault reporting and detailed diagnostics. The RP2040 communicates over UART to the [MUREX Carrier Board](./carrier.md). The module can also communicate over USB over an on-board USB-C connector (5.1kΩ pull down on CC1 and CC2 equipped). Note that this RP2040 removes any voltage regulation in favor of the [MUREX Power Board](./power.md).

### Current Status

- STESC `V1.0` Draft Complete
  - `V1.1` revisions in progress
- DRVESC `V1.0` in progress 

### Integrated Sensors/ICs

- [B-G431B-ESC1](https://www.st.com/content/ccc/resource/technical/document/user_manual/group1/86/3f/45/e0/12/18/47/85/DM00564746/files/DM00564746.pdf/jcr:content/translations/en.DM00564746.pdf) + [RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
  - [STM32G431CB](https://www.st.com/resource/en/datasheet/stm32g431cb.pdf)
    - Arm Cortex M4 MCU, equipped with a suite of communication protocols, DAC and ADCs.
  - [L6387](https://www.st.com/resource/en/datasheet/cd00002423.pdf)
    - High voltage, fast switching FET gate driver
  - [STL180N6F7](https://www.st.com/resource/en/datasheet/stl180n6f7.pdf)
    - 60V, 120A, low RDs-ON, N-channel MOSFET
  - [RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
    - Dual Core ARM Cortex M0+
    - [W25Q64JVXGIQ](https://www.winbond.com/resource-files/W25Q64JV%20RevK%2003102021%20Plus.pdf) 8MB QSPI flash

### Schematic

In progress

### To Do

- [ ] DRVESC `V1.0` Draft
- [ ] STESC `V1.1` revisions

### Changelog

- V1.0 in progress
