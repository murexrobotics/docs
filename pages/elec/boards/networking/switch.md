# Networking Switch

![Raytraced Render](/img/ethernet_switch_v1_release.jpg)

## Outline

The MUREX Ethernet Switch is the world's first open source ethernet switch. With the focus on minimizing physical footprint and cost, the MUREX Ethernet Switch utilizes external magnetics, a high performance unmanaged switch IC, and 1.25mm pitch Fast Ethernet (100BASE-TX) connectors.

## Detailed Description

The MUREX Ethernet Switch is a 5 port 100BASE-TX unmanaged switch using the IP175Gx Ethernet Integrated Switch IC, designed for highly embedded applications. The MUREX Ethernet Switch steps down an input up to 15V down to its operating voltage of 3.3V. Designed with a four layer board for minimal noise, the MUREX Ethernet Switch has full Bob-Smith style termination for all center taps and calculated differential pairs of 100Ω. The switch utilizes 10 pairs of magnetic transformer and common-mode chokes to ensure proper compliance with the IEEE 802.3 standard.

### Current Status

- V1.0 tested and functional, see the [blog post](https://www.murexrobotics.com/blog/murex-ethernet-switch-v1/)

### Integrated Sensors/ICs

- [IC Plus IP175Gx](https://datasheet.lcsc.com/lcsc/2008201637_IC-Plus-IP175GHI_C703539.pdf) 5 Port 10/100 Ethernet Integrated Switch
  - 5 Port 100BASE-TX Embedded Switch
  - High efficiency 85nm CMOS process
  - Full status LEDs
  - EEPROM configuration

- [LM1117MP-3.3](https://www.ti.com/lit/ds/symlink/lm1117.pdf) 800mA LDO
  - 3.3V fixed output LDO
  - 15V maximum input
  - 1.2V dropout

- [QT24A23](https://datasheet.lcsc.com/szlcsc/TNK-QT24A23_C216362.pdf) 10/100/1000Base-T Single Port Transformer
  - 350uH primary
  - 8mA DC bias

- [BT16A07](https://datasheet.lcsc.com/lcsc/1806051531_TNK-BT16A07_C216355.pdf) 10/100 Base-T Single Port Transformer
  - 350uH primary

### [Schematic (PDF)](/pdf/schematics/switch_v1.0_schematic.pdf)

![Schematic Preview](/img/switch_schematic_preview.png)

### To Do

### Changelog
