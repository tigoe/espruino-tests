var buttonPin = C3;		    // pin number for the button
var lastTime = 0;			    // last time the button was pressed
pinMode(C3, INPUT_PULLUP);  // set the input pin as an input with internal pullup

function buttonPress(event) { 
    console.log(event.time); 	// note the time
}


// set a watcher for the button, and when it happens, 
// trigger the buttonPress event:
setWatch(buttonPress, buttonPin, {edge:"falling", repeat:true, debounce:10});