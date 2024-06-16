# Networking Switch

![Blender Render](/img/ethernet_switch_v2_release.png)
![Photo 1](/img/switch1.png)
![Photo 2](/img/switch2.png)

## Outline

The mrxSwitch is the world's smallest and cheapest networking switch, in addition to being fully open-source. With the focus on simplicity and cost, the MUREX Ethernet Switch utilizes external magnetics, a high performance unmanaged switch IC, and 1.25mm pitch Fast Ethernet (100BASE-TX) connectors.

## Detailed Description

The MUREX Ethernet Switch, or mrxSwitch, is a 5 port 100BASE-TX unmanaged switch using the IP175Gx Ethernet Integrated Switch IC. mrxSwitch steps down an input up to 15V down to its operating voltage of 3.3V. Designed with a four layer board for minimal noise, the mrxSwitch has full Bob-Smith style termination for all center taps and calculated differential pairs of 100Ω. The switch utilizes 10 pairs of magnetic transformer and common-mode chokes to ensure proper compliance with the IEEE 802.3 standard.

Measuring 44.9mm by 42.2mm, mrxSwitch V2 is the smallest networking switch in the world and outperforms all commerically available options in size and cost. Its applications include but are not limited to embedded systems, ROVs and AUVs, consumer electronics, DIY projects, and other space-constrained networking applications.

### Current Status

- V2.0 tested and functional
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

- [QT48A03](https://www.lcsc.com/datasheet/lcsc_datasheet_1810082007_TNK-QT48A03_C216365.pdf) 1000Base-T Dual Port Transformer
  - 350uH primary
  - 8mA DC bias

- [BT16A07](https://datasheet.lcsc.com/lcsc/1806051531_TNK-BT16A07_C216355.pdf) 10/100 Base-T Single Port Transformer
  - 350uH primary

- [2x QT24A23 (retired)](https://datasheet.lcsc.com/szlcsc/TNK-QT24A23_C216362.pdf) 10/100/1000Base-T Single Port Transformer
  - 350uH primary
  - 8mA DC bias

### [Schematic (PDF)](/pdf/schematics/switch_v2.0_schematic.pdf)

![Schematic Preview](/img/switch_schematic_preview.png)

### To Do

### Changelog
  - V2 Changes:
    - a 30% size reduction, making the mrxSwitch the smallest networking switch in the world as of June 2024
    - overall BOM cost reduction by 15% (more basic parts)
    - replaced both QT24A23s with the QT48A03, a cheaper and more compact solution
    - removed config components and EEPROM