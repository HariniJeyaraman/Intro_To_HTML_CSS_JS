//HTML
<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js" >
</script>

<h1>Green Screen Web Page</h1>

<canvas id = "fgcan">
</canvas>
<canvas id = "bgcan">
</canvas>

<p>
Foreground: <input type="file" multiple="false" accept="image/*" id="fgfile" onchange="loadForegroundImage()" >
</p>

<p>
Background: <input type="file" multiple="false" accept="image/*" id="bgfile" onchange="loadBackgroundImage()" >
</p>

<p>
<input type="button" value="Create Composite" onclick="doGreenScreen()" >
<input type="button" value="Clear Canvases" onclick="clearCanvas()" >
</p>
<br>
<br>

//CSS
body {
  background-color: wheat;
  font-family: Verdana;
  margin: 40px;
}

canvas {
  border: 1px solid #c3c3c3;
  height: 200px;
}

input {
  font-size: 12pt;
}

//JS
var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;

function loadForegroundImage() {
  var file = document.getElementById("fgfile");
  fgImage = new SimpleImage(file);
  fgCanvas = document.getElementById("fgcan");
  fgImage.drawTo(fgCanvas);
}

function loadBackgroundImage() {
  var file = document.getElementById("bgfile");
  bgImage = new SimpleImage(file);
  bgCanvas = document.getElementById("bgcan");
  bgImage.drawTo(bgCanvas);
}

function createComposite() {
  // this function creates a new image with the dimensions of the foreground image and returns the composite green screen image
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  var greenThreshold = 240;
  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      //pixel is green, use background
      var bgPixel = bgImage.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else {
      //pixel is not green, use foreground
      output.setPixel(x,y,pixel);
    }
  }
  return output;
}

function doGreenScreen() {
  //check that images are loaded
  if (fgImage == null  || ! fgImage.complete()) {
    alert("Foreground image not loaded");
  }
  if (bgImage == null || ! bgImage.complete()) {
    alert("Background image not loaded");
  }
  // clear canvases
  clearCanvas();
  // call createComposite, which does green screen algorithm and returns a composite image
  var finalImage = createComposite();
  finalImage.drawTo(fgCanvas);
}

function clearCanvas() {
  doClear(fgCanvas);
  doClear(bgCanvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}
