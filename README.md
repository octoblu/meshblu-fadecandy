meshblu-fadecandy
=================

#Gateblu plugin for Fade Candy

##Wiring and set up

[Go here!](https://github.com/scanlime/fadecandy)

Also clone the repo in the link above

##Run fcserver

The plugin will message the fcserver app which handles all the USB protocol goodness.

Having cloned the repo you'll find the fcserver app for your os in [this folder](https://github.com/scanlime/fadecandy/tree/master/bin)


##Modes:


- colorWipe : Fade all pixels to specified color. Pixel definition not required
- start : Initialize strip to all pixels off (run this first to start up strip) can be used whenever
- set : set a pixel. Do this multiple times to set a buffer of pixels to be written
- write : write all pixels in the buffer after having run "set" mode. 
- setWrite : Set pixel and immediately write it
