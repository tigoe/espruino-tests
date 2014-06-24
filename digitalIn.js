/*
	This script demonstrates how to read a digital input
	in a loop, and set the value of an LED with that input
		
	created by Tom Igoe
	23 Jun 2014  
*/
function loop() {
	var pushButton = digitalRead(A1);   // read the pushbutton
	console.log(pushButton);				// print out the state of the button
	digitalWrite(C4, pushButton);       // use the button's state to turn on or off the LED
}

setInterval(loop, 10);                 // run the loop function once every 10ms