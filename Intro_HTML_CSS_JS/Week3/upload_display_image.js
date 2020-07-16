//File upload HTML
<input type="text" id="finput" >
<input type="button" value="Upload" onclick="upload()" >

//JS
function upload(){
var fileinput = document.getElementById("finput");
var filename = fileinput.value;
alert("Choose "+filename);


//Specifying that the file chosen SHOULD be a file and allows user to upload it to a website
//HTML
<input type="file" multiple="false" accept="image/*" id="finput" onchange="upload()" >
//No need to add the button explicitly, it is included in the file type !

//JS
function upload()
{
var imgcanvas = document.getElementById("can");
var fileinput = document.getElementById("finput");
var image = new SimpleImage(fileinput);
image.drawTo(imgcanvas);
}
