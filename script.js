let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
  console.log("mudei")

}, 3000)

function nextImage() {
  count++;
  if(count>4) {
    count = 1;
  } 
  console.log("mudei")

  document.getElementById("radio" + count).checked = true;
}