# ESC Carrier Board

## Outline

The MUREX ESC Carrier board is designed to modularize MUREX's ESCs. In the event of a speed controller failure, the ESC Carrier Board allows for rapid replacement of the components through a highly modular design and hotswap interface. The board is designed to hold MUREX's custom ESCs, and it can accommodate slightly bigger ESCs as well.

## Detailed Description

The MUREX ESC Carrier board is a two-layer carrier board that can hold up to 8 MUREX ESCs. The ESCs are protected from damage by Toshiba's TCKE812NA,RF electronic fuse, which provides overcurrent protection, overvoltage protection, and thermal regulation for the 12 volts entering the ESCs. The 3-channel Wago 2606-1103 connector is used to connect to the MUREX Power Board, and the Molex PicoBlade 53261-0571 connector is used to connect to the MUREX Carrier Board. The TE 5530843-7 connector is used to connect the ESCs to the MUREX ESC Carrier Board. The TE 1734260-8 connector is used to output the ESC phases to the brushless DC motors.

### TCKE812NA,RF (electronic fuse)

- 12V input and output
- Current protection at 5A

### Wago 2606-1103 (to MUREX Power Board)

- 1x3 connector
- 12V input for ESCs
- 3.3V input for RP2040 on ESCs

### Molex PicoBlade 53261-0571 (to MUREX Carrier Board)

- 1x5 connector
- 4 UART pins (2 primary, 2 backup)

### TE 5530843-7 (to MUREX ESCs)

- 2x30 connector
- Sends 12V and 3.3V to ESCs
- Sends data to ESCs
- Sends ESC phases to the TE 1734260-8 connector

### TE 1734260-8 (to BLDC Motors)

- 1x6 connector
- 3 ESC phase inputs to motors

## To Do

- [ ] Route board
- [ ] ESC securing mechanism
- [ ] Add more customizability to efuse