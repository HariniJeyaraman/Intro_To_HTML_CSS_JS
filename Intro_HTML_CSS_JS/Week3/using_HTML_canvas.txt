//HTML

<h1> Using a Canvas </h1>
<canvas id="d1">
 </canvas>

<p> <input type="button" value="make lime" onclick=" dolime()" >
    <input type="button" value="make yellow" onclick=" doyellow() " >
</p>

//CSS
canvas{
width: 200px;
height: 100px;
border: 1px solid #c3c3c3;
}


//JS

function dolime(){
//here the element with id d1 is canvas
var dd1 = document.getElementById("d1");
dd1.style.backgroundColor = "lime";
}

function doyellow(){
var dd1 = document.getElementById("d1");
dd1.style.backgroundColor = "white";
//accessing the context of the canvas
//the graphics are displayed in the canvas's context
var ctx = dd1.getContext("2d"); //2D context
ctx.fillStyle("yellow"); //anything you draw will be yellow
ctx.fillRect(10,10,40,40); //(x coordinate, y coordinate, width, height) of the rectangle to be drawn
ctx.fillRect(60,10,40,40);

ctx.fillStyle="black";
ctx.font = "30px Arial";
ctx.fillText("Hello", 10, 80); //coordinates

}
