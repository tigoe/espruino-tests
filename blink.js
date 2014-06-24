/*
	This script demonstrates how to blink an LED
		
	created by Tom Igoe
	23 Jun 2014  
*/

var ledState = 0;    // the state of the LED

function blink() {
	digitalWrite(LED1, ledState);  // change the LED's state 
	ledState = !ledState;          // change the value of the state variable
}

setInterval(blink, 1000);         // run the blink function once per second