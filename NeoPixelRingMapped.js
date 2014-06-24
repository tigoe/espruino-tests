/*

This code uses a 16 ct Adafruit NeoPixel Ring & Arduino Espruino
Power to 3.3v
GND to GND
DIN to B15

As well as a  Sharp  2Y0A21 F 08    IR Distance sensor

GND to GND
Power to 3.3v
Data to A0

Written by Justin Lange and Don Coleman
ITP Camp 2014

using code from http://www.espruino.com/Individually+Addressable+LEDs

*/

SPI2.setup({baud:3200000, mosi:B15});

var rgb = new Uint8Array(16*3);

function getPattern(amount) {

  console.log("amount: " + amount);

  for (var i=0;i<amount*3;i+=3) {
     rgb[i  ] = 0;
     rgb[i+1] = 255;
     rgb[i+2] = 0;
  }
}

 function resetLights() {

  for (var i=0;i<rgb.length;i+=3) {
     rgb[i  ] = 0;
     rgb[i+1] = 0;
     rgb[i+2] = 0;
  }
}

function doLights() {
  getPattern();
  SPI2.send4bit(rgb, 0b0001, 0b0011);
}

doLights();


var reading;
var close = 0.7;
var far = 0.42;
var mappedReading;

function loop() {
  resetLights();
  reading = analogRead(A0);
  mappedReading = superMap(reading, close, far, 0,15);
  getPattern(mappedReading);
  doLights();
}

function superMap(myValue, fromLow, fromHigh, toLow, toHigh){

  var returnValue = (myValue - fromLow) * ((toHigh - toLow) / (fromHigh - fromLow)) + toLow;

  if(returnValue < toLow) return toLow;
  if(returnValue > toHigh) return toHigh;
  return parseInt(Math.floor(returnValue), 10);
}


setInterval(loop, 30);



