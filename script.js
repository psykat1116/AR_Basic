let name = "hat";
function change(imgName) {
  /*var image = document.getElementById('image1');
 if(image_tracker==document.getElementById('image1')){
 image.src="images/hat.png";
 image_tracker=document.getElementById('image1');
 }
 else{
 image.src="images/mirror-sunglasses.png";
 image_tracker=document.getElementById('image2');
 }*/

  var img = document.getElementById("image1");
  img.src = imgName;
  if (img.src.match("sunglasses.png")) {
    document.img.src = "sunglasses.png";
    name = "sunglasses";
  } else {
    document.img.src = "hat.png";
    name = "hat";
  }

  /*if(img.src.match()) img.src = "images/mirror-sunglasses.png";
   else img.src = "images/hat.png";

  document.image.src = img.src;*/
}
