function loop() {
	var pushButton = digitalRead(A1);
	console.log(pushButton);
	digitalWrite(C4, pushButton);
}

setInterval(loop, 10);