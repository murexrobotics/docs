# Communication Protocols

Outline for communication standards used in the MUREX codebase

## Carrier Board

The carrier board facilitates all functionality of the ROV, thus communication to and from the board is critical. We've opted to use two serial communication protocols for their unique advantages.

### I2C

I2C is the primary protocol used for communication with peripherals on the carrier board such as the BME680 and the PCA9685.

#### Primary
We will use I2C0 as our primary I2C bus.
- SDA: GPIO 0
- SCL: GPIO 1

#### Secondary
We will use I2C3 as our backup I2C bus. (Should only be used in the event of absolute failure of I2C0)
- SDA: GPIO 4
- SCL: GPIO 5

### UART

UART is the primary protocal used for inte-board communication. We will use UART to gather telemetry data from the other boards and control the MUREX ESC's

#### Primary
We will use UART0 as our primary bus.
- SDA: GPIO 14
- SCL: GPIO 15

#### Secondary
We will use UART3 as our backup bus. (Should only be used in the event of absolute failure of UART0)
- SDA: GPIO 4
- SCL: GPIO 5