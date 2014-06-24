SPI2.setup({baud:3200000, mosi:B15});

var rgb = new Uint8Array(16*3);

function getPattern() {
  for (var i=0;i<rgb.length;i+=3) {
     rgb[i  ] = 0; 
     rgb[i+1] = 255;
     rgb[i+2] = 0;
  }
}

function doLights() {
  getPattern();
  SPI2.send4bit(rgb, 0b0001, 0b0011);
}

doLights();
