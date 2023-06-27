image = document.getElementById("image");
iMage = document.querySelector("#image img");

function init() {
  image.style.position = "relative";
  image.style.left = "0px";
  image.style.top = "0px";
  iMage.style.height = "12em";
  iMage.style.width = "14em";
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
function sizeUp() {
  iMage.style.height = parseInt(iMage.style.height) + 2 + "em";
  iMage.style.width = parseInt(iMage.style.width) + 2 + "em";
}
function sizeDown() {
  iMage.style.height = parseInt(iMage.style.height) - 2 + "em";
  iMage.style.width = parseInt(iMage.style.width) - 2 + "em";
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