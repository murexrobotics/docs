# Vision

There are many ways to implement vision on the ROV. Currently, electrical has a few ideas:

- Custom USB camera to IP camera compression over a mini SBC with a Banana Pi BPI-P2 Zero or similar

![Banana Pi BPI-P2 Zero](https://wiki.banana-pi.org/images/d/d2/BPI-F2_zero_1.JPG)

> *The Banana Pi BPI-P2 Zero*

- Custom MIPI-CSI to IP camera compression over a mini SBC with a Banana Pi BPI-P2 Zero or similar

![Camera Module 3](https://assets.raspberrypi.com/static/c2af6b4a57b2100026272262b6631dae/2b8d7/documentation.webp)

> *The Raspberry Pi Camera Module 3, a MIPI-CSI camera*

- USB to Ethernet extender

![Startech.com USB to Ethernet Extender](https://media.startech.com/cms/products/gallery_large/usb2004extv.main.jpg)

- IP drone cameras, potentially even gimbal cameras

![SIYI A2 Mini](https://ueeshop.ly200-cdn.com/u_file/UPAV/UPAV102/2211/18/products/9-400e.png?x-oss-process=image/quality,q_80/resize,m_lfit,h_640,w_640)

> *SIYI A2 Mini Ultra Wide Angle FPV Gimbal Camera*

- IP Security cameras, like ones from Amcrest or others.

## Video Streaming Pipeline

There are numerous options for video streaming pipelines. The highest performance would be hardware H.264/5 encoding with a dedicated SBC that sends a UDP/RTSP to the topside. Libraries like `ffmpeg`, `opencv`, and `gstreamer` all have this capability. It is usually a limitation of the hardware. Chips like the Allwinner H3, used in most low-cost small SBCs, have such hardware encoding capabilities through Cedrus or other libraries, but they typically run at a large overhead. Webcams sometimes have H.264 or other compression algorithms built in, but in recent developments, manufacturers have been removing them. This is the reason why the SBCs must have hardware encoding. Alternatively, readily-made IP cameras don't have this limitation, but how well the compression and image quality will be is a coin toss. The USB to Ethernet extender forgoes this limitation, directly streaming webcam data. However, the bandwidth limitations of uncompressed (or not very efficiently compressed) may impose unforeseen limitations.