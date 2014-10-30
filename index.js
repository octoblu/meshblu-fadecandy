'use strict';
var util = require('util');
var OPC = new require('./opc')
var client = new OPC('localhost', 7890);
var EventEmitter = require('events').EventEmitter;

var r = 0;
var g = 0;
var b = 0;

var MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    mode: {
      type: 'integer',
      required: true
    },
    pixel: {
      type: 'integer',
      required: false
    },
    red: {
      type: 'integer',
      required: false
    },
    blue: {
      type: 'integer',
      required: false
    },
    green: {
      type: 'integer',
      required: false
    }
  }
};

var OPTIONS_SCHEMA = {
  type: 'object',
  properties: {
    firstExampleOption: {
      type: 'string',
      required: true
    }
  }
};

function Plugin(){
  this.options = {};
  this.messageSchema = MESSAGE_SCHEMA;
  this.optionsSchema = OPTIONS_SCHEMA;
  return this;
}
util.inherits(Plugin, EventEmitter);

Plugin.prototype.onMessage = function(message){
  var payload = message.payload;
 // this.emit('message', {devices: ['*'], topic: 'echo', payload: payload});

 
switch (payload.mode) {

    case "colorWipe":
    for (var i = 0; i < 64; i++)
   {

        client.setPixel(i, payload.red, payload.green, payload.blue);
    }
    client.writePixels();
    
    break;
    case "set":

    if(payload.pixel == 0){ 
      if(r != payload.red){
        r = payload.red;
            }
    if(g != payload.green){
        g = payload.green;
            }
    if(b != payload.blue){
        b = payload.blue;
            }
        client.setPixel(0, r, g, b);
    }else{
      client.setPixel(0, r, g, b);
      client.setPixel(payload.pixel, payload.red, payload.green, payload.blue);  
  }
    break; 
    case "setWrite":

    if(payload.pixel == 0){ 
      if(r != payload.red){
        r = payload.red;
            }
    if(g != payload.green){
        g = payload.green;
            }
    if(b != payload.blue){
        b = payload.blue;
            }
        client.setPixel(0, r, g, b);
    }else{
      client.setPixel(0, r, g, b);
      client.setPixel(payload.pixel, payload.red, payload.green, payload.blue);  
      client.writePixels();
      client.writePixels();
  }
    break;
    case "write":

        client.writePixels();
        client.writePixels();

    break;

    case "start":
     for (var i = 0; i < 64; i++)
   {

        client.setPixel(i, 0, 0, 0);
    }

     client.writePixels();

    break;



    }
  

};

Plugin.prototype.onConfig = function(device){
  this.setOptions(device.options||{});
};

Plugin.prototype.setOptions = function(options){
  this.options = options;
};

module.exports = {
  messageSchema: MESSAGE_SCHEMA,
  optionsSchema: OPTIONS_SCHEMA,
  Plugin: Plugin
};
