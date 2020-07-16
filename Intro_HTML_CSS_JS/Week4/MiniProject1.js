//Mini Project 1
//HTML
<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js" >
</script>
<h1> Mini Project 1</h1>
<canvas id="can" > </canvas>
<p> <b>Load Image : </b> </p>
<p>
<input type="file" multiple="false" accept="image/*" id="imgfile" onchange="upload()">
</p>
<p> <b>Choose Filter</b></p>
<input type="button" value="Grayscale" onclick="doGrayscale()">
<input type="button" value="Red" onclick="doRed()">
<p> <input type="button" value="reset" onclick="reset()">


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

p{
  font-size: 20px;
}

input {
  font-size: 12pt;
}


//JS
var image=null;
var grayimage=null;
var redimage=null;
var redhue=null;
var rainbow=null;
var canvas;
function upload(){
  var file = document.getElementById("imgfile");
  image = new SimpleImage(file);
  redimage = new SimpleImage(file);
  grayimage = new SimpleImage(file);
  redhue = new SimpleImage(file);
  rainbow = new SimpleImage(file);
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function doClear() {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

function doRed(){
  //to make sure we operate on the original image
  for(var pixel of redimage.values()){
    var orig_pixel=image.getPixel(pixel.getX(), pixel.getY());
    redimage.setPixel(pixel.getX(), pixel.getY(), orig_pixel);
  }
  for(var pixel of redimage.values()){
    pixel.setRed(255);
  }
  doClear();
  redimage.drawTo(canvas);
}

function doGrayscale(){
  //to make sure we operate on the original image
  for(var pixel of grayimage.values()){
    var orig_pixel=image.getPixel(pixel.getX(), pixel.getY());
    grayimage.setPixel(pixel.getX(), pixel.getY(), orig_pixel);
  }
  for(var pixel of grayimage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  doClear();
  grayimage.drawTo(canvas);
}

function doRedHue(){
  for(var pixel of redhue.values()){
    var orig_pixel = image.getPixel(pixel.getX(), pixel.getY());
    redhue.setPixel(pixel.getX(), pixel.getY(), orig_pixel);
  }
    for(var pixel of redhue.values()){
      var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }      
    }
    doClear();
    redhue.drawTo(canvas);
}
/*
  -------> X- axis
  .
  .
  .
  Y- axis
*/
function doRainbow(){
  for(var pixel of rainbow.values()){
    var orig_pixel = image.getPixel(pixel.getX(), pixel.getY());
    rainbow.setPixel(pixel.getX(), pixel.getY(), orig_pixel);
  }
  for(var pixel of rainbow.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    //Red Stripe
    if(pixel.getY()<=rainbow.getHeight()/7){
        if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
        }
        else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
    //Orange Stripe
    if(pixel.getY()>rainbow.getHeight()/7 && pixel.getY()<=rainbow.getHeight*(2/7)){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
    //Yellow Stripe
    if(pixel.getY()>rainbow.getHeight()*(2/7) && pixel.getY()<=rainbow.getHeight()*(3/7)){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    //Green Stripe
    if(pixel.getY()>rainbow.getHeight()*(3/7) && pixel.getY()<=rainbow.getHeight()*(4/7)){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    //Blue Stripe
    if(pixel.getY()>rainbow.getHeight()*(4/7) && pixel.getY()<=rainbow.getHeight()*(5/7)){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    //Indigo Stripe
    if(pixel.getY()>rainbow.getHeight()*(5/7) && pixel.getY()<=rainbow.getHeight()*(6/7)){
      if(avg<128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    //Violet Stripe
    if(pixel.getY()>rainbow.getHeight()*(6/7) && pixel.getY()<=rainbow.getHeight()){
      if(avg<128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      else{
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  doClear();
  rainbow.drawTo(canvas);
}

function reset(){
  doClear();
  image.drawTo(canvas);
}
