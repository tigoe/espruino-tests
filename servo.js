/*
	This script demonstrates how to separate sensing and actuation
	into two different loops. The actuation loop happens every 
	20ms because servos like a 20ms update (note also the 20ms
	frequency option in the analogWrite). You generall want the
	sensing loop to be as frequent as possible for responsiveness,
	so the sense interval is 1ms.
	
	A more complex example might take advantage of the sensing loop's
	short interval to provide immediate output when the sensor
	changes, using some actuator that's faster than a servo in its response.
	
	created by Tom Igoe
	24 Jun 2014  
*/

var sensor = 0;    // global variable for the sensor

// servo operation function:
function servoWrite (pin, position) {
  analogWrite(pin, (1+position) / 50.0, {freq:20});
}

// general sensing function:
function sense() {
   sensor = analogRead(A0); 
}

// general actuation function:
function actuate() {
   servoWrite(A1, sensor);
}

setInterval(sense, 1);     // sense once per 1ms
setInterval(actuate, 20);  // actuate once per 20ms
