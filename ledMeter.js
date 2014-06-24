/*
	This script turns on a row of NeoPixels using an analog input

	created by Tom Igoe
	23 Jun 2014  
*/

// initialize SPI on pin B15
SPI2.setup({baud:3200000, mosi:B15});      
// number of neoPixels you have
var ledCount = 13;                         
// array of R, G, B values
var ledArray = new Uint8Array(ledCount*3); 

// function to set the pixel color.  Takes an address
// and a 3-value array for the color (R, G, B):

function setPixelColor(addr, color) {
  ledArray[addr*3] = color[0];
  ledArray[addr*3 + 1] = color[1];
  ledArray[addr*3+2] = color[2];
}


// main loop (you can have more than one  loop though):
function loop() {
  // read an analog input:
  var sensor = analogRead(A0);
  // convert to a range related to the number of LEDs:
  var meterValue = Math.round(sensor * ledCount, 0);
  console.log(meterValue);
  
 
 // loop over the LEDs. If the LED's address is lower
  // than the meter value, then turn on the LED:
  for (var thisLED=0; thisLED<ledCount; thisLED++) {
    if (meterValue >= thisLED) {
     setPixelColor(thisLED, [64, 18, 56]);
    } else {
    // if the LED's higher than the meter value, turn it off:
     setPixelColor(thisLED, [0,0,0]); 
    }
   }
   // update the LED array:
  SPI2.send4bit(ledArray, 0b0001, 0b0011);  

}

// set the loop to run every 10ms:
setInterval(loop, 10);
  