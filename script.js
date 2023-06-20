function init() {
  image = document.getElementById("image");
  iMage = document.querySelector("#image img");
  image.style.position = "relative";
  image.style.left = "0px";
  image.style.top = "0px";
  iMage.style.height = "10em";
  iMage.style.width = "12em";
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

let video = document.querySelector("#videoElement");

// function swapImage(id, primary, secondary) {
//   src = document.getElementById(id).src;
//   if (src.match(primary)) {
//     document.getElementById(id).src = secondary;
//   } else {
//     document.getElementById(id).src = primary;
//   }
// }

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

window.onload = init;
