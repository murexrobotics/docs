# MrxShield

## Outline

![Raytraced Render](/img/shield_v1_release.png)

The MUREX Shield is the world's first open-source modular power protection board designed for ROVs and other high current applications. A hotswappable controller hat and power panel provide exceptional thermal dissipation, space-efficency, and easy replacement.

## Detailed Description

The MUREX Shield is an ultra-compact and modular "two-piece" power protection system designed for ROVs/robotics and other high current applications. The shield is currently tested to handle 300W (12V @25A linear) safely. A custom LM7481 Ideal Diode Controller hat attaches onto the main power panel, which hosts back-to-back IRFB3077PbF N-channel MOSFETs and TVS diodes to provide transient protection, reverse polarity protection, shorting safeguards, inrush current control, and undervoltage and overvoltage protection. Jumpers on the LM7481 hat provide multiple configurations for UVLO+OVLO, ranging from 6V to 18V. Status LEDs on the hat and power panel indicate safe power input. 

## Current Status

- `V1.0` tested with parallel electronic loads, functional at 300W

## Integrated Sensors and ICs

- [LM7481](https://www.ti.com/product/LM7481) NFET Ideal Diode Controller
- [IRFB3077PbF](https://www.infineon.com/dgdl/irfb3077pbf.pdf?fileId=5546d462533600a4015356153f0d1def) Infineon Linear FETs


### [Schematic (PDF)](/pdf/schematics/shield_v1.0_schematic.pdf)

![Schematic Preview](/img/shield_schematic_preview.png)

### To Do

- Alternative power mosfet selections (higher efficiency, cost, accessibility)
- GANFETs 
- Improved board-to-wire connection for thicker wire gauges
- Enhanced thermal dissipation
- Inductive load testing

### Changelog

V1.0:

- Initial Design