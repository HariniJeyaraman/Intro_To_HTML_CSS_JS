//HTML
<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js">
</script>
<h1> Upload Image and Display </h1>
<canvas id="can" > </canvas>
<p>
<input type="file" multiple="false" accept="image/*" id="finput" onchange="upload()" >
</p>
<p>
  <input type = "button" id="b1" value="Make Grayscale" onclick="makeGray()">
</p>

//CSS
canvas
{
  width: 200px;
  height: 300px;
  border: 1px solid #c3c3c3;
}

//JS
var image;
function upload()
{
var imgcanvas = document.getElementById("can");
var fileinput = document.getElementById("finput");
image = new SimpleImage(fileinput);
image.drawTo(imgcanvas);
}

function makeGray(){
  for(pixel of image.values()){
    var avg = (pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}
