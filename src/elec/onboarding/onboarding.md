# Onboarding

Welcome to MUREX Robotics Electrical. We are a subgroup focused on integration, and efficiency. A few core ideologies follow our design:

> *Attempt the Impossible*\
> *Dream Big*\
> *Think Different*\
> *Don't Throw (joking joking)*

In following such mottos, MUREX Robotics Electrical focuses on making everything custom, highly integrated, and making it as well as we possibly can. By relying on minimal COTS parts, we can vertically integrate all aspects of the robot, and interestingly, minimize cost.

## Required Software

- KiCAD Nightly
- CAD Software
- Text Editor
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
- Short: unexpected and potentially dangerous connection between two locations in a circuit
- Route/Jump/Bridge: purposeful connection between two locations in a circuit
- PCB: A printed circuit board connects electrical components together usually on a piece of fiberglass (FR4). MUREX uses KiCAD to make all its PCBs. All the basics and terminology for PCBs can be learned through Shawn Hymel's Digikey KiCAD tutorial series
  - [Shawn Hymel's KiCAD tutorials](https://www.youtube.com/watch?v=vaCVh2SAZY4&list=PL3bNyZYHcRSUhUXUt51W6nKvxx2ORvUQB)
  - [**For more details on PCB design, take a look at this**](./pcb-design.md)
- Integrated Circuits (ICs): A set of electronic circuits on one small flat piece (or "chip") of semiconductor material, usually silicon. ICs are the heart of PCBs and are what provides the functionality of the boards.
- Through-hole technology (THT): Device that mounts radially or axially through a PCB. Simpler to solder, takes up valuable space. They can also cost more.
- Surface-mount technology (SMT): Device that mounts on the surface of a PCB. Much smaller, harder to solder by hand. They usually cost less.
- Capacitor (cap/C): Device used to store electric charge on two dielectric plates, usually ceramic or electrolytic based. Common shorthand is a *"cap"*. Caps are commonly used in circuits to decouple or bypass power or signals.
  - [Decoupling capacitor basics](https://lcamtuf.substack.com/p/the-basics-of-decoupling-capacitors)
  - [Great Scott's Explanation of Capacitors](https://www.youtube.com/watch?v=otQGdPLyF3w)
- Resistor (R): Device used to resist electric flow.
- Inductor (L): Device used to store electric charge in a magnetic field.
- MOSFET: metal-oxide semiconductor field-effect transistors are "digital switches". There are 3 pins on a MOSFET. If the "gate" pin has a voltage applied, the other two pins become conductive.
- Multimeter: OK, you've learned so much about electronics already. In a circuit, how do you test to see if it actually works? Use a multimeter.
  - [Colin's Lab Explains How to Use a Multimeter](https://www.youtube.com/watch?v=rPGoMbVSUu8&pp=ygUWY29saW4ncyBsYWIgbXVsdGltZXRlcg%3D%3D)
- Soldering: the process of melting metal, usually Tin and Gold to create metal joins. MUREX strives to be environmentally safe, thus we work in compliance to [RoHS](https://environment.ec.europa.eu/topics/waste-and-recycling/rohs-directive_en).
  - [Colin's Lab Explains How to Solder](https://www.youtube.com/watch?v=QKbJxytERvg)
  - [... and Desolder](https://www.youtube.com/watch?v=N_dvf45hN6Y&pp=ygUVY29saW4ncyBsYWIgc29sZGVyaW5n)
  - [... and SMD solder](https://www.youtube.com/watch?v=QzoPxvIM2qE&pp=ygUVY29saW4ncyBsYWIgc29sZGVyaW5n)
  - and honestly, watch all of Colin's Lab's videos. They're great.
- Electrical connector: TODO
- Wire to board: TODO
- Board to board: TODO
- Wire to wire: TODO

## Robotics-Specific Terms

- [Blue Robotics](https://bluerobotics.com/learn/technical-reference/) is a company specializing in underwater robotics. Basically all teams use their thrusters, and most teams use their enclosures and ESCs. Their products are extremely robust and easy to use, but at a high cost and unspecialized towards MATE robotics. As an educational team, we receive a 15% discount.
- BLDC: brushless DC motor
  - [Great Scott Explains](https://www.youtube.com/watch?v=UteZJ_7C4Mg)
  - [Animation](https://www.youtube.com/watch?v=bCEiOnuODac)
- T200: Blue Robotics's latest underwater thruster offering. It is a BLDC, meaning it has high torque and speed, but requires an ESC to control it.
- ESC: an electronic speed controller, as the name implies, controls the speed of a motor. The reason an ESC is required is because BLDCs don't take a DC current. They actually take 3 phases as input.
  - [Great Scott DIY ESC](https://www.youtube.com/watch?v=W9IHEqlGG1s)
  - [Texas Instruments Whitepaper](https://www.ti.com/lit/an/slvaes1a/slvaes1a.pdf?ts=1687900715464)
  - [More TI Whitepapers](https://www.ti.com/solution/dc-input-bldc-motor-drive#tech-docs)
- Ethernet: a family of wired computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN). In MUREX, we use it as an intranet between the Raspberry Pi and topside. This requires some knowledge of network management.
  - [Network Chuck Explains IP Addresses](https://www.youtube.com/watch?v=5WfiTHiU4x8)
  - This is a pretty big topic. It's better explained through demos.
- OFDM (powerline adapter): best explained by [Linus](https://www.youtube.com/watch?v=ywQeJCa3jl8)
  - In particular, OFDM is orthagonal frequency division multiplexing. We use this to essentially "encode" ethernet through a pair of wire at high frequencies. Through two OFDM devices on either end of an ethernet connector, the end devices have no difference, but the communication process is much simplified.
- Raspberry Pi: the Raspberry Pi Foundation explains flawlessly. [Take a look at their docs](https://www.raspberrypi.com/documentation/)
  - [They offer a lineup of products](https://www.raspberrypi.com/products/)
- JLCPCB: "Founded in 2006, JLCPCB has been at the forefront of the PCB industry. With over 15-year continuous innovation and improvement based on customers' need, we have been growing fast, and becoming a leading global PCB manufacturer, who provides the rapid production of high-reliability and cost-effective PCBs and creates the best customer experience in the industry."
  - Our PCB and PCBA (component assembly) contractor of choice
- I2C: a synchronous, multi-master/multi-slave (controller/target), packet switched, single-ended, serial communication bus. It is widely used for attaching lower-speed peripheral ICs to processors and microcontrollers in short-distance, intra-board communication. Almost all sensors use I2C to communicate
- UART: [best explained by wikipedia](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)
- Buck Converter/Voltage Regulator/Step Down Converter: Once again, a complex topic best explained by other sources such as [Wikipedia](https://en.wikipedia.org/wiki/Buck_converter). In short, it uses a circuit to step down a higher voltage (potential) to a lower voltage (potential). The opposite of a buck converter is booster converter.
  - [Great Scott Explains](https://www.youtube.com/watch?v=m8rK9gU30v4)
- USB: universal serial bus is a physical and software protocol defining how devices communicate with each other. It is important to know the different sizes for USB, and how it works under the hood.
  - [I dare you to read this whitepaper by Cypress/Infineon](https://www.infineon.com/dgdl/Infineon-AN57294_USB_101_An_Introduction_to_Universal_Serial_Bus_2.0-ApplicationNotes-v09_00-EN.pdf?fileId=8ac78c8c7cdc391c017d072d8e8e5256)
- Neopixel: [Read Adafruit's Überguide](https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels)

## MUREX-specific Terms

- Carrier: TODO
- ESC Carrier: TODO
- Power Board: TODO
- LVX: TODO
- MORE TODOs

## Summary

This is not the end of your learning, only to jumpstart the beginning. 99% of knowledge comes from failing. This is especially true in electronics. Nobody can call themselves a master without releasing some [magic smoke](https://en.wikipedia.org/wiki/Magic_smoke). All the links listed are good resources to explore further. The YouTube channels are basically MUREX Electrical's subscription feed. We strongly encourage you to do the same.
