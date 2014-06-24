/*

	This script is designed to test the effect of memory management on output functions.
	The blink function should run every 1000ms. The build() function adds to an array, and 
	at some point, the garbage collector should kick in to clean up after this function.
	When it does, there (ideally) shouldn't be a significant difference in the timing of 
	blink(). 
	
	As it turns out, the timing is pretty consistent. Timing between blinks typically 
	runs at less than 0.00001 seconds difference.
	
	This script runs out of memory pretty quickly because of the build() function,
	which continually adds to an array. When it runs out of memory, here's what happens:
	
	ERROR: Out of Memory!
at line 2 col 30
  myNumber[x] = (Math.random());
                              ^
in function called from system
ERROR: Error processing interval - removing it.
Execution Interrupted during event processing.
754.46172332763671875
755.46173095703125
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
ERROR: Out of Memory!
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
ERROR: Out of Memory!
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
ERROR: Out of Memory!
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
ERROR: Out of Memory!
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
ERROR: Out of Memory!
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
ERROR: Out of Memory!
ERROR: Out of Memory!
WARNING: Unable to create string as not enough memory
{}
at line 2 col 31
  console.log(process.memory());
                               ^
in function called from system
ERROR: Error processing interval - removing it.
Execution Interrupted during event processing.
	
		
created by Tom Igoe
23 Jun 2014  

*/

var ledState = 0;   // state of the LED
var x = 0;          // array index
var myNumber = [];  // array to fill up with numbers

// blinks the LED and pin C4.  I used pin C4 so that
// I could put an oscilloscope on that pin and check
// the frequency:
function blink() {
	digitalWrite(LED1, ledState);
    digitalWrite(C4, ledState);
	ledState = !ledState;
    console.log(getTime());
}

// add random numbers to an array:
function build() {
  myNumber[x] = (Math.random()); 
  x++;
}

setInterval(blink, 1000); // blink every second
setInterval(build, 10);   // run build() every 10ms

// every ten seconds, dump the heap info into
// the console:
setInterval(function() {
  console.log(process.memory());
}, 10000);