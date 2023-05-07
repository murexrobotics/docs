# Carrier Board

## Outline

### CM4

- HDMI
- USB 2.0
- Ethernet (w/ POE)
- Hard power on and reset

### Sensors/IC

- PCA9685 (pwm)
- BME680 (gas)
- MMC5603NJ (magneto)
- BMI088 (accel/gyro)
- MS5837 (depth)
- Neopixel (debug/status)
- Piezo Buzzer (debug/status)
- Screen (debug/status)
- Light strip (debug/status)

### Other ICs

- Ethernet Switch

## Progress

### Schematics

#### Completed

- Sensors
- CM4
- Neopixel
- Footprint
- Preliminary Research

#### To Do

- Board-to-board connectors
- Ethernet switch
- LX200V20 EVB

#### Concerns

- Ethernet is a complicated protocol involving magnetic coupling
  - LX200V20 EVB has the same concern

#### Solutions

- Purchase external ethernet switch
  - Pros
    - Simple, easy, reliable
  - Cons
    - Large, more soldering for internal wiring

- Keep LX200V20 EVB
  - Pros
    - Simple, easy, reliable
  - Cons
    - Large, more components = less integrated
