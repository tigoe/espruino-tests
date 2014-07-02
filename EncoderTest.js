var encoder = require("Encoder"),  // use Espruino's encoder library
   step = 0;                       // number of steps you've turned the encoder

// when the encoder turns, count the number of steps:
function count(direction) {        // direction will be 1 or -1
  step += direction;               // add the change to the current step count
  console.log(step);               // display the current step count
}

// initialize the encoder:
encoder.connect(A0,A1,count);