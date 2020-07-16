//HTML
//color picker input type
<input type="color" value="#001A57" id="clr" onchange="docolor()">

//JS
//Color picker
function docolor(){
var dd1 = document.getElementById("d1");
var colorinput = document.getElementById("clr");
var color = colorinput.value;
dd1.style.backgroundColor = color;
}

//HTML
//slider input
<input type="range" min="10" max="100" value="10" id="sldr" oninput="dosquare()" >

//JS
function dosqaure(){
var dd1 = document.getElementById("d1");
var sizeinput = document.getElementById("sldr");
var size = sizeinput.value;
//getting context of the canvas
var ctx = dd1.getContext("2d");
ctx.clearRect(0,0,dd1.width, dd1.height);//to clear previous rectangles
ctx.fillStyle = "yellow";
ctx.fillRect(10,10,size,size);
