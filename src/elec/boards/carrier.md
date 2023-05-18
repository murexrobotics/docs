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
- LX200V20EVB + LX200V20

## Progress

### Schematics

#### Completed

- Sensors
- CM4
- Neopixel
- Footprint
- Preliminary Research
- Footprint Linking

#### To Do

- [ ] PicoBlade from ESC Carrier
- [ ] Amplification required for leak detection matrix?
- [ ] External magnetics for Ethernet
- [ ] Smaller crystal `Y1`
- [ ] Break out expensive sensors
- [ ] Route PCB
- [ ] Mounting holes for Ethernet Switch, PLC and Power board

#### Concerns

- Ethernet is a complicated protocol involving magnetic coupling
  - LX200V20 EVB has the same concern

#### Solutions

- Current solution:
  - Modify existing network switch
    - Utilize breakout for higher efficiency