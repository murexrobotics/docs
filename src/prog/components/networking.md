# Networking

1. Create `/boot/wpa_supplicant.conf` and add the [correct configuration](https://gist.github.com/aspyct/994b603aaefe5996ca331f107d6abb67).
   1. Most likely:

   ```txt
   network={
     ssid="WIFI_SSID"
     scan_ssid=1
     key_mgmt=WPA-EAP
     identity="USERNAME"
     password="PASSWORD"
     eap=PEAP
     phase1="peaplabel=0"
     phase2="auth=MSCHAPV2"
   }
   ```

    2. Then run `wpa_supplicant -i wlan0 -c ./wpa_supplicant.conf`

2. Add `ipv6.disable=1` to `/boot/cmdline.txt`
3. Add the following to `/etc/network/interfaces.d/wlan0`

```txt
allow-hotplug wlan0
iface wlan0 inet dhcp
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
```

4. Add the following to `/etc/network/interfaces.d/eth0`

```txt
auto eth0
iface eth0 inet static
address 192.168.100.1
netmask 255.255.255.0
```

5. Disable `dhcpcd` with `sudo systemctl disable dhcpcd` and `sudo reboot`
6. `sudo apt install isc-dhcp-server`
7. Add the following to `/etc/dhcp/dhcpd.conf`

```txt
subnet 192.168.100.0 netmask 255.255.255.0 {
range 192.168.100.50 192.168.100.240;
option routers 192.168.100.1;
option subnet-mask 255.255.255.0;
}
```

8. In the same file, `dhcpd.conf`, uncomment `authoritative`
9. Add the following to `/etc/default/isc-dhcp-server`

```txt
INTERFACESv4="eth0
INTERFACESv6="
```

10. `sudo reboot` and check status with `sudo systemctl status isc-dhcp-server`

More information [here](https://linuxhint.com/raspberry_pi_wired_router/)
