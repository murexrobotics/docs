# Differential Pairs

PCIe and USB require 90Ω impedance matching for P/N differential pairs.
Important reference: [Digi-Key Tutorial](https://www.digikey.com/en/maker/projects/how-to-route-differential-pairs-in-kicad-for-usb/45b99011f5d34879ae1831dce1f13e93)

This is pretty important to keep in mind:

H_t (distance between traces and top ground plane): 10000 mm (we want this to be large to approximate infinity, as we are using an external layer for our differential pair--set this to the FR4 thickness if you are routing your USB lines on an internal layer sandwiched between two ground planes)
