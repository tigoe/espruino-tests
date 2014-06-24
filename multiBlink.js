// set the initial variables:
var ledState = 0;
var led2State = 0;
var led3State = 0;

// blink LED1
function blink() {
  digitalWrite(LED1, led1State);
  led1State = !led1State;
}

// blink LED2
function blink2() {
  digitalWrite(LED2, led2State);
  led2State = !led2State;
}

// blink LED3
function blink3() {
  digitalWrite(LED3, led3State);
  led3State = !led3State;
}

setInterval(blink, 500);   // run blink every 500ms
setInterval(blink2, 1000); // run blink2 every 1s
setInterval(blink3, 2000); // run blink3 every 2s
