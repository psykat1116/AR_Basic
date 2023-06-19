let image = null;
function init() {
  image = document.getElementById("image");
  image.style.position = "relative";
  image.style.left = "0px";
  image.style.top = "0px";
}
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
  }
}
function moveLeft() {
  image.style.left = parseInt(image.style.left) - 5 + "px";
}
function moveUp() {
  image.style.top = parseInt(image.style.top) - 5 + "px";
}
function moveRight() {
  image.style.left = parseInt(image.style.left) + 5 + "px";
}
function moveDown() {
  image.style.top = parseInt(image.style.top) + 5 + "px";
}

var video = document.querySelector("#videoElement");

/*function change(img){
 var image = document.getElementById('image1');
 if(image_tracker==document.getElementById('image1')){
 image.src="images/hat.png";
 image_tracker=document.getElementById('image1');
 }
 else{
 image.src="images/mirror-sunglasses.png";
 image_tracker=document.getElementById('image2');
 }*/

function swapImage(id, primary, secondary) {
  src = document.getElementById(id).src;
  if (src.match(primary)) {
    document.getElementById(id).src = secondary;
  } else {
    document.getElementById(id).src = primary;
  }
}

/*if(img.src.match("images/mirror-sunglasses.png")) image.src = "images/mirror-sunglasses.png";
   else image.src = "images/hat.png";
 }
function newImg()
{
  if (name === "hat")
  {
    image.src = "images/hat.png";
  }
  else
    image.src = "images/mirror-sunglasses.png";
}*/

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.log("Something went wrong!");
    });
}
/*var overlay= document.getElementById('image');
  var video= document.getElementById('vid');
  
  overlay.style.visibility= show? 'visible' : 'visible';*/
window.onload = init;
