---
layout: project
title: wiSticky
date: 2013-10-13
last_modified_at: 2023-01-11 0:00:00 +0000
icon: wisticky_icon.svg
tags: project play hardware software bluetooth embedded nRF c++

---

A hobby project to develop a fridge magnet display, based on low power bluetooth and EPaper technology.

<!--more-->

![wiStickyScreen](../../images/projects/wisticky/wiStickyScreen.jpg)



### Description

**wiSticky** (working title) is a **Bluetooth Low Energy EPaper display** that syncs with your cell phone to display an always-on and always up-to-date summary of the information you need for your day. Its crisp, day-light readable 2.7" display never shuts off, so you stay informed and your phone stays in your pocket. By using ultra-low power technologies, it lasts for weeks between charges, so it's always available.  wiSticky can go places -- like on your refrigerator or your dashboard -- where it's inconvenient or unsafe to use your cell phone.

wiSticky embraces open hardware and open software at every level.  The entire software stack including the device firmware and the iPhone and Android applications (under development) are open source.  The graphical screen editor lets you choose what's on the display without having to program anything.  If you can write a web page, you can completely customize the display via our REST/JSON interfaces.  They allow you to push custom information to the display in SVG format.  If Arduino is your thing, you'll love our easy to use wireless and display SDK -- it exposes all of the capability of the hardware via easy C++ APIs.  wiSticky has 7 unused analog/digital pins available for your customization.

![WiSticky Block Diagram](../../images/projects/wisticky/WiSticky Block Diagram.png)



### Screen Ideas

![ScreenLandscape](../../images/projects/wisticky/ScreenPortrait.png)![ScreenLandscape](../../images/projects/wisticky/ScreenLandscape.png)![ScreenPortrait](../../images/projects/wisticky/Grocery List.png)



### Tech Specs

* **Pervasive Displays EM027AS012** 2.7" EPaper Display 264x176 pixels ([data sheet](http://repaper.org/doc/em027as012.html), [Arrow](http://parts.arrow.com/item/detail/pervasive-displays-inc/em027as012))
* **Nordic nRF 51822QFAA** ARM Cortex M0/Bluetooth Low Energy SOC.  256k flash, 16k RAM (180k flash, 8k RAM usable by programs) ([data sheet](evernote:///view/1512005/s13/3f25091e-3643-48e9-93f6-6c3c54ea9aec/3f25091e-3643-48e9-93f6-6c3c54ea9aec/),  [reference manual](evernote:///view/1512005/s13/e0a9f61a-21d7-45da-823f-d8cf5b2d5163/e0a9f61a-21d7-45da-823f-d8cf5b2d5163/), [Arrow](http://parts.arrow.com/item/detail/nordic-semiconductor/nrf51822-qfaa-t))
* **LTC 3554** Dual Switching Regulator / LiPo Battery Charger ([data sheet](http://cds.linear.com/docs/en/datasheet/355412fe.pdf), [Arrow](http://parts.arrow.com/item/detail/linear-technology/ltc3554eudpbf))
* **MAX17048G** LiPo Battery Fuel Gauge ([data sheet](http://datasheets.maximintegrated.com/en/ds/MAX17048-MAX17049.pdf), [Mouser](http://www.mouser.com/ProductDetail/Maxim-Integrated/MAX17048G+/?qs=sGAEpiMZZMsfD%2bbMpEGFJWBnJGfrscOUwZMb7EByTlM%3d)) 
* **Freescale MMA8652FC** 3 Axis Accelerometer ([data sheet](http://cache.freescale.com/files/sensors/doc/data_sheet/MMA8652FC.pdf), [Digikey](http://www.digikey.com/product-detail/en/MMA8652FCR1/MMA8652FCR1CT-ND/3831434))
* Micro SD card slot
* 200 mAh battery
* Approx size 4" x 2" x 5mm (no case)



### Pictures

![wiStickyAdvertising](../../images/projects/wisticky/wiStickyAdvertising.jpg)

![wiStickyEarlyProto](../../images/projects/wisticky/wiStickyEarlyProto.JPG)

![wiStickySmallScreen](../../images/projects/wisticky/wiStickySmallScreen.jpg)