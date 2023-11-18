# Welcome!

Welcome to MUREX Robotics Electrical. We are focused on pushing boundaries and making electronics/systems design more accessible to all.

## Introduction

> *"I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success"*
– [Nikola Tesla](https://en.wikipedia.org/wiki/Nikola_Tesla)

MUREX Robotics Electrical focuses on making everything highly integrated and custom. We make industrial/commercial level motion, power, communication, vision and wireless systems accessible to all. By making components fully custom, we can accomplish unprecedented levels of integration within MUREX robotics systems. By keeping COTS parts to a minimum, we vertically integrate all aspects of the robot, minimize space, and surprisingly, minimize cost. We don't do it the easy way. That's not what we believe in.

## Explanations

MUREX Robotics Electrical has a high but very rewarding learning curve. Below explains the basis of the work we do. ***It is not required that you understand the material. This is for you to learn. We do not expect you to know anything when you first join.***

## Required Software

- KiCAD **Nightly** (we utilize Nightly build features)
  - Version 7.99
    - [macOS](https://downloads.kicad.org/kicad/macos/explore/nightlies)
    - [Windows](https://downloads.kicad.org/kicad/windows/explore/nightlies)
    - [Linux](https://www.kicad.org/download/linux/)
      - Install Nightly version
    - We do not use any other PCB software like EasyEDA, Eagle (R.I.P) or Altium Designer.
- CAD Software
  - Suggested: PTC OnShape, Fusion 360, FreeCAD, etc.
- Text Editor
  - Suggested: Visual Studio Code, Sublime Text, etc.
- Git/GitHub

## Design Process

1. Brainstorm and optimize tech stack
2. Research solutions, focusing on minimizing space while maximizing efficiency
3. Propose solutions with the team, receive feedback and further development
4. Repeat steps 1 and 3 until an idea is fully formed and agreed upon
5. Design schematic in KiCAD
6. Design PCB in KiCAD
7. Silkscreen designing
8. Tapeout verification with the team
9. Production with fabricator (usually JLCPCB)
10. Receive PCB and stress testing
11. Integration into other parts of the tech stack

## Common Terms

- Volt: unit of electric potential difference
- Amp: unit of electric current
- Ohm: unit of electric resistance
- Ohm's Law: *V = IR* or *U = IR* for US and EU respectively. This law relates resistance, current and voltage.
  - [Khan Academy Ohm's Law Explanation](https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-1)
- Voltage Drop: the decrease in voltage between two points (e.g all or part of a circuit) due to resistance
- Short: unexpected and potentially dangerous connection between two locations in a circuit
- Route/Jump/Bridge: purposeful connection between two locations in a circuit
- PCB: A printed circuit board connects electrical components together usually on a piece of fiberglass (FR4). MUREX uses KiCAD to make all its PCBs. All the basics and terminology for PCBs can be learned through Shawn Hymel's Digikey KiCAD tutorial series
  - [Shawn Hymel's KiCAD tutorials](https://www.youtube.com/watch?v=vaCVh2SAZY4&list=PL3bNyZYHcRSUhUXUt51W6nKvxx2ORvUQB)
  - [**For more details on PCB design, take a look at this**](./pcb_design.md)
- Integrated Circuits (ICs): A set of electronic circuits on one small flat piece (or "chip") of semiconductor material, usually silicon. ICs are the heart of PCBs and are what provides the functionality of the boards.
- Through-hole technology (THT): Device that mounts radially or axially through a PCB. Simpler to solder, takes up valuable space. They can also cost more.
- Surface-mount technology (SMT): Device that mounts on the surface of a PCB. Much smaller, harder to solder by hand. They usually cost less.
- Capacitor (cap/C): Device used to store electric charge on two dielectric plates, usually ceramic or electrolytic based. Common shorthand is a *"cap"*. Caps are commonly used in circuits to decouple or bypass power or signals.
  - [Decoupling capacitor basics](https://lcamtuf.substack.com/p/the-basics-of-decoupling-capacitors)
  - [Great Scott Explains Capacitors](https://www.youtube.com/watch?v=otQGdPLyF3w)
- Resistor (res/R): Device used to resist electric flow.
  - [Great Scott Explains Resistors](https://www.youtube.com/watch?v=7w5I-KbJ1Sg)
- Inductor (L): Device used to store electric charge in a magnetic field.
  - [Great Scott Explains Inductors](https://www.youtube.com/watch?v=kdrP9WbJIb8)
- MOSFET (mos/fet): metal-oxide semiconductor field-effect transistors are "digital switches". There are 3 pins on a MOSFET. If the "gate" pin has a voltage applied, the other two pins become conductive.
  - [Great Scott Explains MOSFETs](https://www.youtube.com/watch?v=o4_NeqlJgOs)
- Multimeter (DMM, multi, meter): OK, you've learned so much about electronics already. In a circuit, how do you test to see if it actually works? Use a multimeter.
  - [Colin's Lab Explains How to Use a Multimeter](https://www.youtube.com/watch?v=rPGoMbVSUu8&pp=ygUWY29saW4ncyBsYWIgbXVsdGltZXRlcg%3D%3D)
- Soldering (to solder): the process of melting metal, usually Tin and Gold to create metal joins. MUREX strives to be environmentally safe, thus we work in compliance to [RoHS](https://environment.ec.europa.eu/topics/waste-and-recycling/rohs-directive_en).
  - [Colin's Lab Explains How to Solder](https://www.youtube.com/watch?v=QKbJxytERvg)
  - [... and Desolder](https://www.youtube.com/watch?v=N_dvf45hN6Y&pp=ygUVY29saW4ncyBsYWIgc29sZGVyaW5n)
  - [... and SMD solder](https://www.youtube.com/watch?v=QzoPxvIM2qE&pp=ygUVY29saW4ncyBsYWIgc29sZGVyaW5n)
  - and honestly, watch all of Colin's Lab's videos. They're great.
  - Soldering takes practice. A lot of practice.
- Electrical connector (conn): How do you form reliable electrical connections between circuits? You guessed it –– an electrical connector. There are mainly 3 types:
  - Wire to board: connects wires to PCBs
  - Board to board: connects PCBs to PCBs
  - Wire to wire: ...connects wires to wires...
- Breakout/Breaking [component] out: making a pin or function (usually of an IC) easier to access through a connector (usually 2.54 mm pitch header pins)
- Production files: the complete set of files generated from an EDA (like KiCAD), usually with a Gerber zip and BOM/CPL files if necessary.
  - Check [PCB Design](./pcb-design.md) for more info

How do you get started with electronics? In the modern, Internet-equipped days, YouTube is an amazing place to start.

- [Great Scott](https://www.youtube.com/playlist?list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0)
- [Colin's Lab](https://www.youtube.com/playlist?list=PLECC9C55893C696A7)
- [Electroboom](https://www.youtube.com/@ElectroBOOM)

## Robotics-Specific Terms

- [Blue Robotics](https://bluerobotics.com/learn/technical-reference/) (BR) is a company specializing in underwater robotics. Basically all teams use their thrusters, and most teams use their enclosures and ESCs. Their products are extremely robust and easy to use, but at a high cost and unspecialized towards MATE robotics. As an educational team, we receive a 15% discount.
- BLDC: brushless DC motor
  - [Great Scott Explains](https://www.youtube.com/watch?v=UteZJ_7C4Mg)
  - [Animation](https://www.youtube.com/watch?v=bCEiOnuODac)
- T200 (thruster): Blue Robotics's latest underwater thruster offering. There is a motor and a propeller, which displaces water through its blades, thus generating thrust. It is a BLDC, meaning it has high torque and speed, but requires an ESC to control it.
  - [Rusty (CEO of Blue Robotics) Introduces T200 Thrusters](https://www.youtube.com/watch?v=Q2pI3XF_XU4)
- ESC: an electronic speed controller, as the name implies, controls the speed of a motor. The reason an ESC is required is because BLDCs don't take a DC current. They actually take 3 phases as input.
  - [Great Scott DIY ESC](https://www.youtube.com/watch?v=W9IHEqlGG1s)
  - [Texas Instruments Whitepaper](https://www.ti.com/lit/an/slvaes1a/slvaes1a.pdf?ts=1687900715464)
  - [More TI Whitepapers](https://www.ti.com/solution/dc-input-bldc-motor-drive#tech-docs)
- Ethernet (eth): a family of wired computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN). In MUREX, we use it as an intranet between the Raspberry Pi and topside. This requires some knowledge of network management.
  - [Network Chuck Explains IP Addresses](https://www.youtube.com/watch?v=5WfiTHiU4x8)
  - This is a pretty big topic. It's better explained through demos.
- OFDM (powerline adapter): best explained by [Linus](https://www.youtube.com/watch?v=ywQeJCa3jl8)
  - In particular, OFDM is orthogonal frequency division multiplexing. We use this to essentially "encode" ethernet through a pair of wire at high frequencies. Through two OFDM devices on either end of an ethernet connector, the end devices have no difference, but the communication process is much simplified.
- Raspberry Pi: the Raspberry Pi Foundation explains flawlessly. [Take a look at their docs](https://www.raspberrypi.com/documentation/)
  - [They offer a lineup of products](https://www.raspberrypi.com/products/)
  - [Fireship Explained in 100s](https://www.youtube.com/watch?v=eZ74x6dVYes)

- JLCPCB: "Founded in 2006, JLCPCB has been at the forefront of the PCB industry. With over 15-year continuous innovation and improvement based on customers' need, we have been growing fast, and becoming a leading global PCB manufacturer, who provides the rapid production of high-reliability and cost-effective PCBs and creates the best customer experience in the industry."
  - Our primary PCB and PCBA (component assembly) contractor of choice
  - [Strange Parts Tours JLCPCB Factory](https://www.youtube.com/watch?v=ljOoGyCso8s)
- I2C: a synchronous, multi-master/multi-slave (controller/target), packet switched, single-ended, serial communication bus. It is widely used for attaching lower-speed peripheral ICs to processors and microcontrollers in short-distance, intra-board communication. Almost all sensors use I2C to communicate
  - [nandland Explains I2C](https://www.youtube.com/watch?v=jFtr0Ha5f-c&t)
  - [Great Scott Explains I2C](https://www.youtube.com/watch?v=_fgWQ3TIhyE)
- UART: [best explained by wikipedia](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)
  - [Great Scott Explains UART](https://www.youtube.com/watch?v=yFQS_TQ4948)
- Buck Converter/Voltage Regulator/Step Down Converter (buck, v reg): Once again, a complex topic best explained by other sources such as [Wikipedia](https://en.wikipedia.org/wiki/Buck_converter). In short, it uses a circuit to step down a higher voltage (potential) to a lower voltage (potential). The opposite of a buck converter is booster converter.
  - [Great Scott Explains](https://www.youtube.com/watch?v=m8rK9gU30v4)
- USB: universal serial bus is a physical and software protocol defining how devices communicate with each other. It is important to know the different sizes for USB, and how it works under the hood.
  - [USB Connector Sizing](https://www.youtube.com/watch?v=pIZREjck9jg&t)
  - [Really Good Video on USB](https://www.youtube.com/watch?v=HbQ6q3skZgw)
  - [I dare you to read this whitepaper by Cypress/Infineon](https://www.infineon.com/dgdl/Infineon-AN57294_USB_101_An_Introduction_to_Universal_Serial_Bus_2.0-ApplicationNotes-v09_00-EN.pdf?fileId=8ac78c8c7cdc391c017d072d8e8e5256)
- Neopixel: [Read Adafruit's Überguide](https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels)
- MEMS Sensor: A MEMS (Micro-Electro-Mechanical Systems) sensor is a miniaturized device that combines electronic components with mechanical elements on a silicon substrate. It can detect and measure various physical phenomena, such as motion, pressure, temperature, and environmental changes, making it a fundamental component in many modern electronic devices and applications.
- Gas Sensor: A gas sensor, like the BME680, detects changes in gas in the surrounding environment, such as pressure, VOCs, temperature, humidity, etc. The operating principle is MEMS.
- PWM: PWM stands for Pulse Width Modulation, a technique used in electronics to control the average power delivered to a load. It involves rapidly switching a signal on and off with varying duty cycles, where the ratio of the on-time to the off-time determines the effective power output on a device, either directly (like brushed DC motors) or further processed (like ESCs or servos).
- PWM Driver: An IC that sends PWM pulses to a device.
- Analog Data: Usually data is digital (0 or 1). However, analog data can be anywhere between fully on or off (this *is NOT quantum mechanics*). For example, a sensor that varies in voltage depending on stimuli can be read by an ADC.
- ADC/DAC: ADC = analog to digital converter, and DAC = digital to analog converter. Analog to digital converters can read analog input and convert it to be read by digital microcontrollers. Vice versa with DACs. They take digital input, then output analog signals, usually to headphones. ADCs are much more important to our use case.

## MUREX-specific Terms

- PCB Terminology:
  - Carrier - Byran Huang '25: Powered by a Raspberry Pi CM4, acting as the control hub for the ROV. Learn more [here](../boards/carrier.md)
  - ESC Carrier - Celine Zhang '26: Utilizing an NTC thermistor, acting as a mechanism for the modularization and protection of the ESCs. Learn more [here](../boards/esc_carrier.md)
  - Power Board - Max Liu '26: Dual output buck converter with reverse polarity protection and current sensing. Learn more [here](../boards/power.md)
  - ESC - Byran Huang '25: Powered by RP2040s, acting as the driving board for controlling the thrusters. They handle a lot of current. Learn more [here](../boards/esc.md)
  - LVX - RAKWireless: The OFDM module produced by RAKWireless, formally known as the LX200V20EVB
- Conversational Terminology:
  - Altan: the magic word to yell when the code does not work as expected. Duration only lasts for the 23-24 and 24-25 season.
  - Throwing: when somebody makes an accidental mistake that results in unwanted circumstances.
  - Calcs: not calculus (although it can be). It simply refers to any important calculation/verification that is necessary for a circuit, such as: trace thickness of a power network, impedance calculations for a high frequency trace, voltage drop across a system, or even just a simple calculation of whether a resistor will blow up given a expected load.
- MORE TODOs

## Writing Docs

It is expected of every MUREX Robotics Electrical member to write documentation in a timely manner. The "docs" are built with Nextra, which puts Markdown files in a easily-readable format and deploys to GitHub Pages through GitHub Actions.

- When adding docs, it should outline any work you have done, and any specialized knowledge required. Pictures are good.
- In writing any docs, if there is precedent, follow it.
- If there is not, find precedent online and follow that.
- All prose must be at least semi-formal and clearly written, with the assumption that the reader has intermediate electronics knowledge.
- Markdown must follow regular linting.

## Git Commits

Once you've done some work, either in writing documentation or working in KiCAD, how do you commit it? Good question. To make sure everyone's on the same page, we follow a [commit standard](../../standards.md). Commits are incredibly important – think of them as chapters in a book. They track changes over time, meaning incremental updates are much better than a big one. For example:

```txt
Feat[project-name]: initialized project
Feat[project-name]: initial schematic design
Feat[project-name]: finalized schematic design
Feat[project-name]: initial component layout
Fix[project-name]: fixing component layout
Feat[project-name]: routing
Fix[project-name]: fixes according to feedback
Feat[project-name]: routing v2
Feat[project-name]: routing v3
Feat[project-name]: finalized routing
Feat[project-name]: board file production ready
Feat[project-name]: optimized BOM
Feat[project-name]: tape-out stage

... is a lot better than

Feat[project-name]: <insert project name> done
```

Commit standards apply to all commits on Git to the MUREX organization. Since we're a pretty small team, we don't implement any PR system or much CI/CD for those who come from a software development background, but a good commit history is important.

## Attempt the Impossible

Going to back our "mission statement"... (it's not really a mission statement, more a motivational quote)

> *Attempt the impossible*

What does this mean? Now that you have read through what MUREX Robotics Electrical (or *elec*) is all about and equipped with technical expertise, we can finally say what the true meaning is.

***Attempt the impossible***: We do it the best way possible. If pre-built parts or breakout boards don't cut it, we don't use it. If a processor isn't powerful enough, we don't use it. If a board isn't small enough, we make it smaller. No matter how difficult it may be to accomplish, we will follow through. No matter how hard it is. Things don't always go your way. No matter how hard you try to perfect your schematic, your PCB layout, your system integration, it still might not work out. Things are bound to go wrong, and it is up to *us* do it right. It's "impossible", a non-MUREX Robotics Electrical member might say. However, we accept it as the process. In the end, we will have achieved something others might have called "impossible". But the achievement only comes through endless, motivated attempts at the impossible.

## Summary

This is not the end of your learning, only to jumpstart the beginning. 99% of knowledge comes from failing. This is especially true in electronics. Nobody can call themselves a master without having released some [magic smoke](https://en.wikipedia.org/wiki/Magic_smoke). All the links listed above are excellent resources to explore further. The YouTube channels are basically MUREX Electrical's subscription feed. We strongly encourage you to do the same.

> *Dream Big*\
> *Think Different*\
> *Don't Throw (joking joking)*

*Always attempting the impossible,*\
Members:

- Byran Huang '25
- Max Liu '26
- Altan Unver '25
- Crane Lee '27
- Varit Asavathiratham '25

Emeriti:

- Chaney Hollis '23
