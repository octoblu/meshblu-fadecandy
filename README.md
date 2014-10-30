meshblu-fadecandy
=================

Gateblu plugin for Fade Candy

![small_icon](https://github.com/octoblu/meshblu-fadecandy/blob/master/fc2.svg)

![large_icon](https://github.com/octoblu/meshblu-fadecandy/blob/master/fc.svg)

##Wiring and set up

[Go here!](https://github.com/scanlime/fadecandy)

Also clone the repo in the link above

##Run fcserver

The plugin will message the fcserver app which handles all the USB protocol goodness.

Having cloned the repo you'll find the fcserver app for your os in [this folder](https://github.com/scanlime/fadecandy/tree/master/bin)


##Modes:


- colorWipe : Fade all pixels to specified color. Pixel definition not required
```
payload example : {"mode" : "colorWipe", "stripLength" : 64 , "red" : 255 , "blue" : 0, "green" : 0}

```
- start : Initialize strip to all pixels off (run this first to start up strip) can be used whenever
```
payload example : {"mode" : "start"}

```
- set : set a pixel. Do this multiple times to set a buffer of pixels to be written
```
payload example : {"mode" : "set", "pixel" : 0,  "red" : 255 , "blue" : 0, "green" : 0}

```
- write : write all pixels in the buffer after having run "set" mode. 
```
payload example : {"mode" : "write"}

```
- setWrite : Set pixel and immediately write it
```
payload example : {"mode" : "setWrite", "pixel" : 10,  "red" : 255 , "blue" : 0, "green" : 0}

```
