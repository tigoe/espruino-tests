var buttonPin = C4;		// pin number for the button
var lastTime = 0;			// last time the button was pressed


function buttonPress(event) { 
	// get the time difference from the last button trigger:
	var difference = event.time - lastTime;
	// if it's less than 0.2 seconds:
	if (difference > 0.2) {
		console.log(event.time); 	// note the time
		lastTime = event.time;		// store the event time for next comparison
	}
}

// set a watcher for the button, and when it happens, 
// trigger the buttonPress event:
setWatch(buttonPress, buttonPin, {edge:"falling", repeat:true});