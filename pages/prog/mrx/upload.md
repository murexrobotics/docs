# Upload and Build `mrx`


### Build `mrx`
Run these commands to test if your setup has been configured properly, this will compile *everything*.
```sh
./waf configure --board murex_carrier
./waf build
```

### Upload `mrx` onto PI
```sh
./waf configure --board murex_carrier --rsync-dest murex@192.168.100.1:/home/murex/ardu-bin/ --static
./waf sub
./waf --target bin/ardusub --upload

ssh murex@<PI_IP_ADDRESS>
./ardu-bin/usr/bin/ardusub
```

### Additional References
- [BUILD.md](https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md)