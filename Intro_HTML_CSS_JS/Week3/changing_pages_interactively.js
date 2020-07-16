//HTML

<div id="d1"> Hello </div>
<div id="d2"> Goodbye </div>
<p>
  <input type="button" value="color change" onclick="changecolor()">
</p>


//CSS
div{
width: 200px;
font-size: 28px;
}

.yellowback{
background-color: yellow;
}

.blueback{
background-color: lightblue;
}


//JS
function changecolor(){
var dd1 = document.getElementById("d1");
var dd2 = document.getElementById("d2");

dd1.className="blueback";
dd2.className="yellowback";
}

function changetext(){
var dd1 = document.getElementById("d1");
var dd2 = document.getElementById("d2");

//accesses the HTML content within the element (everything within the div element - which is text)
dd1.innerHTML = "Bonjour";
dd2.innerHTML = "Sayonara";
}
