# Ethernet PHY (or physical layer)

["How to design 100BASE-TX Ethernet schematics"](https://www.youtube.com/watch?v=mxabnNoSGVA)

- 0402 or 0201 capacitors for decoupling input voltage
  - Placed very close to IC
  - Use correct capacitances
- MDI pins (twisted pairs over the PHY) are differential pairs and have 100 ohm impedance matching
- Resistors should be 1% tolerance
- Ethernet reference clocks are important
- Magnetics should include common mode chokes and magnetics
  - Common mode chokes should face cable side (closer to connector?)
  - Center tab connected to ground through decoupling capacitors
  - Bob smith termination to reduce noise?
  - System GND and Earth GND should have 1 megaohm resistor and 4700pF cap across in parallel