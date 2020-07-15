//HTML

<h1> Change Things I</h1>
<div id="d1"> Hello </div>
<div id="d2"> Goodbye </div>
<p> 
  <input type="button" value="change" onclick="dochange()">
</p>

//CSS
div{
width: 200px;
font-size: 28px;
}

#d1{
background-color: lightblue;
}

#d2{
background-color: yellow;
}

//JS
function dochange(){
  alert('clicked button with JS function');
}
