# PCB Design

PCB Design is the entire process of making a PCB, from initial schematic to manufactured board! It's not easy, but incredibly rewarding when you finally get to admire the glistening PCB in your palms. Again, all the basics and terminology for PCBs can be learned through [Shawn Hymel's Digikey KiCAD tutorial series](https://www.youtube.com/watch?v=vaCVh2SAZY4&list=PL3bNyZYHcRSUhUXUt51W6nKvxx2ORvUQB), but here's our own take.

## PCB Design Process

1. Research and determine main components. What ICs will be on the board? What connectors will be used? Etc.
2. Design your schematic
    - Import any component symbols, footprints, and 3D models that are not in the default KiCAD library
    - Design circuitry
    - Follow component datasheets to understand the pinout and typical application guidelines
    - Assign reference designators (REFDES) and footprints to each component
3. Design your PCB
    - Update design constraints based on fabricator PCB specifications
    - Untangle your ratsnest by shuffling and rotating parts around
    - Route your board by placing traces between components, adding vias when necessary
    - Add any copper pours (typically GND or PWR planes)
    - Add grounding vias
    - Double-check circuitry and clearance. KiCAD's Design Rules Checker (DRC) can be helpful in detecting any design violations
    - Draw your board outline
    - Rinse and repeat until satisfied! PCB Design is an iterative process. Rerouting the board often saves precious space and cements the designer's understanding of the circuitry
4. Design your silkscreen
    - The silkscreen is a layer of visible ink on your PCB
    - Make sure REFDES is visible
    - Add any other important component information e.g polarities, input, test points
    - Add aesthetics, logos, and inspirational quotes e.g. attempt the impossible, coconut water tastes good etc.
5. Tapeout verification with the team
6. Production with Fabricator
    - Generate your production files. This includes your gerber files, BOM, and CPL. Can be simplified with an external plugin e.g. Bouni
    - Upload and order your board on the fabricator website! We typically order from JLCPCB
7. PCB Testing
    - Once you receive the board, solder any components have haven't been assembled by the fabricator
    - Conduct vigorous testing
    - Summon Altan for any embedded programming

Remember, if you board doesn't work first try, that's okay. Try to identify where the problems are and fix them in the second revision. PCBs can cost a hefty amount however, so make sure you do your best to get everything correct first try.

## Common Terms

- SCHEMATIC DESIGN
  - Symbol: Simple diagrams that represent real world components, e.g resistors, ICs. They include the pins/leads, which abstractly represents connections that the component is capable of making (ICs have many many pins, resistors usually have 2 pins, etc.).
  - REFDES: (Reference Designator) Identifies a component. Usually a letter followed by a number e.g R13 (Resistor number 13). This is very helpful when referring to a specific component later in the design process – "Altan, which LED is not lighting up?", "D2". You know exactly which LED it is now.
  - Pin: An point of connection on a component
    - Pinout: The arrangement and functionality of each pin on a component
    - Label: A good way to not route wires all around your sheet. Labels with the same name are electrically connected with each other
      - GND (Ground): In PCB Design, GND usually does NOT refer to literally sticking a wire into the Earth. Instead, it's an easy way to refer to the common return path of electricity, like the negative terminal of a power supply
    - Datasheet: Your textbook for understanding a component, written by the manufacturer of the component. Typically, all technical specifications, pinout, physical dimensions, performance characteristics, software details are included. Another section is the sample schematic (sometimes referred to as "typical application", "sample application", "application example", etc.). It tells you how to integrate the component onto the board. Datashets can be hundreds of pages long. Some parts you don't need to read, but for the important parts, each sentence that the datasheet says should be crystal clear in your head.
    - Schematic Heirarchy: A better way to design complex schematics. Your main sheet is composed of individual "block" symbols that have their own sheets to represent subcomponents. Similar to OOP programming, abstraction is the key.
- PCB LAYOUT
  - Ratsnest: a messy "nest" showing electrical connections between components when there are no traces yet. Usually straight lines between pads in a ECAD/EDA software like KiCAD. It tells the user what connection goes where. As the connections are routed, the ratsnest diminishes in size.
  - Layer: In KiCAD, layers can refer to physical copper layers, or graphical layers like silkscreen
  - Trace: A conductive copper track with a chosen width. This does the actual connection between the
  - Copper Pour: An area on the PCB that is filled with copper. Usually GND or power (PWR). One (or more) ground copper pours is **vital** to minimizing [noise](https://en.wikipedia.org/wiki/Noise_(electronics)) in a circuit. This is a very complex topic, with a lot of advice, calculations and more.
  - Via: Sometimes one layer isn't enough for routing. A small drilled hole that creates an electrical connection between layers.
  - Pad: A small area of exposed metal on the PCB for component pins to be soldered onto.
  - Footprint: Specific arrangement of pads for a component to be soldered onto.
  - Clearance: Shortest distance allowed between two copper regions that won't have a chance of shorting e.g traces, pours.
  - Mounting Hole: Drilled holes that secure the board to an enclosure, typically with screws.
  - Board Outline: Determines the boundaries of your physical PCB. Defined in the edge.cuts layer in KiCAD. It is where the fabricator will physically cut.
  - Silkscreen: Topmost layer of a PCB, where text and graphics are printed. Typically in white ink. Like printing with a regular printer, if the text is too small, it will be illegible.
- PRODUCTION
  - Fabricator: Company that fabricates, or transcribes, your PCB design onto the physical board. PCB Fabricators are often capable of manufacturing as well, meaning that they can also assemble components that are in their libraries for you
  - Gerber files: Industry standard file for describing each PCB layer to the manufacturer
  - BOM: Bill of materials. A BOM typically lists out all the components required, the associated REFDES, footprint names, and the manufacturer part number
  - CPL: Component placement list. Details the layer, position, and orientation of each component.

## Common PCB Design Considerations TODOTDOTODTODOTDOT

- Trace width and length: Wide traces have less resistance and can handle more current. Short traces also decrease resistance and minimize power loss. Therefore, high power traces should be wide and short
- Noise:
- GND Pours: TODOTDO
- Clearance:
- Thermal Issues:OTDOTOD
- Impedance Matching:
- Mounting:DTPDOTDOTODTODOT

## Summary

- TODOTODTODTODOTDOTDO