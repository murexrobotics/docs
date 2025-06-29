# ESC Carrier Board

## Outline

![Raytraced Render](/img/esc_carrier_board_v1.0_release.png)

This is the MUREX ESC Carrier Board, the world's first open source modular motion control system. In the event of a speed controller failure, the ESC Carrier Board allows for rapid replacement of the components through a hotswap interface. In addition, the board offers inrush current protection for the ESCs. It has a footprint of 146.7 mm x 85.6 mm (5.78 in x 3.37 in).

## Current Status

- `V2.0` tested and functional

## Detailed Description

The MUREX ESC Carrier board is a two-layer carrier board that can hold up to 6 ESCs. The ESCs are protected from inrush current by Ametherm's AS32_1R030 NTC thermistor, which provides a resistance of 1Ω at 25°C. The board receives 12V and 3.3V input from the [MUREX Power Board](https://docs.murexrobotics.com/elec/boards/power.html) via the 8-channel Molex 43045-0821 Micro-Fit connector, and data is exchanged via the 2-wire UART protocol with the [MUREX Carrier Board](https://docs.murexrobotics.com/elec/boards/carrier.html) through the 5-channel Molex 53047-0510 PicoBlade. The TE 5530843-7 connector is used to connect the ESCs to the ESC Carrier Board. The Molex 43045-0627 Micro-Fit connector is used to output the ESC phases to the brushless DC motors.

### Connectors and ICs

- [Ametherm AS32_1R030](https://www.ametherm.com/datasheetspdf/AS321R030.pdf) (NTC Thermistor)
    - 12V input and output
    - 30A maximum stable current
    - 1Ω resistance at 25°C
    - 0.03Ω resistance at 15A
    - 0.01Ω resistance at 30A

- [Molex 43045-0821 Micro-Fit](https://www.molex.com/en-us/products/part-detail/430450821?display=pdf) (to [MUREX Power Board](https://docs.murexrobotics.com/elec/boards/power.html))
    - 8.5A maximum current per position
    - Right-angle mating
    - 8 positions (2 x 4)
    - 12V input to ESCs (through NTC thermistor)
        - 3 positions
    - 3.3V input for RP2040 on ESCs
        - 1 positions
    - Remaining 4 positions used for grounding

- [Molex 53047-0510 PicoBlade](https://www.molex.com/en-us/products/part-detail/530470510?display=pdf) (to [MUREX Carrier Board](https://docs.murexrobotics.com/elec/boards/carrier.html))
    - 1.0A maximum current per position
    - Vertical mating
    - 5 positions (1 x 5)
    - 2 UART channels (1 primary and 1 backup)
        - 4 position
    - Remaining position used for grounding

- [TE 5530843-7](https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Catalog+Section%7F1773096_SEC03_CARD_EDGE%7F0210%7Fpdf%7FEnglish%7FENG_CS_1773096_SEC03_CARD_EDGE_0210.pdf%7F5530843-7) (to ESCs)
    - [Application Specification](https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Specification+Or+Standard%7F114-13018%7FC%7Fpdf%7FEnglish%7FENG_SS_114-13018_C.pdf%7F5530843-7)
    - 3.0A maximum current per position
    - Vertical mating
    - 60 positions (2 x 30)
    - Sends power to ESCs
        - Protected 12V (18 positions)
        - 3.3V (2 positions)
    - Sends UART data from MUREX Carrier Board to ESCs (2 positions per channel, 4 positions total)
    - Sends ESC phases to BLDC motors (through Molex 43045-0627 Micro-Fit connector)
        - 6 positions per phase, 18 total
    - Remaining 18 positions used for grounding

- [Molex 43045-0627 Micro-Fit](https://www.molex.com/en-us/products/part-detail/430450627?display=pdf) (to BLDC Motors)
    - 8.5A maximum current per contact
    - Vertical mating
    - 6 positions (2 x 3)
    - Sends ESC phases to BLDC motors (2 positions per phase, 6 positions total)

### [Schematic (PDF)](/pdf/schematics/esc_carrier_v2.0_schematic.pdf)

![Schematic Preview](/img/esc_carrier_board_schematic_preview.png)

### To Do

- [ ] `V2.0` testing

### Changelog

V1.0:

- Initial design

V2.0:

- Refactored pinout of the TE 5530843-7 connector to bring 12V and GND next to phases
  - Refactored placement of the components on the right side of the board to accommodate new pinout and decrease the size of the board
- Decreased spacing between ESCs to give the board a smaller footprint
- Thickened 12V traces on the Molex 43045-0821 Micro-Fit connector
- Removed connectors for 2 ESCs to decrease the size of the board