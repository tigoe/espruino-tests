var ledState = 0;

function blink() {
	digitalWrite(LED1, ledState);
	ledState = !ledState;
}

setInterval(blink, 1000);