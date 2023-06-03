# ESC Carrier Board

## Outline

The MUREX ESC Carrier board is designed to modularize the ESCs so that if one breaks it is easy to replace it in the electronics. It is designed to hold MUREX's custom ESCs, although it will be able to accommodate slightly bigger ESCs as well.

## Detailed Description

The MUREX ESC Carrier board will most likely be a two-layer carrier board for the MUREX ESCs. It can hold up to 8 ESCs, and it utilizes Toshiba's TCKE812NA,RF resettable, low-resistance electronic fuse for overcurrent protection, overvoltage protection, and thermal regulation of the 12 volts entering the ESCs from the MUREX Power Board. The 3-channel Wago 2606-1103 connector is used to connect to the MUREX Power Board, and the Molex PicoBlade 53261-0571 connector is used to connect to the MUREX Carrier Board. The Molex SlimStack 53625-0674 connector is used to connect the ESCs to the MUREX ESC Carrier Board. The TE 1734260-6 connector is used to output the ESC phases to the brushless DC motors.

### TCKE812NA,RF (electronic fuse)

- Takes 12V as input and returns 12V as output
- Current protection at 5A

### Wago 2606-1103 (to MUREX Power Board)

- 1x3 connector
- Takes 12V and 3.3V input

### Molex PicoBlade 53261-0571 (to MUREX Carrier Board)

- 1x5 connector
- 4 pins for UART data transmission (2 primary, 2 backup)

### Molex SlimStack 53625-0674 (to MUREX ESCs)

- 2x30 connector
- Sends 12V and 3.3V to ESCs

### TE 1734260-6 (to BLDC Motors)

- 1x6 connector
- Takes 3 ESC phases as input to motors

## To Do

- [ ] Test pads
- [ ] Clean up schematic
- [ ] Add more customizability to efuse