/*
function createsDivs() {
  //gets the parent element
  var gridContainer = document.getElementById('hello');

  //creates children element -> div
  var galleryImages = document.createElement('div')
  galleryImages.setAttribute('id','gallery-images1')
  galleryImages.className = 'gallery-images';

  //creates gc element -> img
  var eachImg = document.createElement('img')
  eachImg.setAttribute('id','each-img');
  eachImg.src = "images/baddays.png";
  eachImg.className = 'each-img';

  document.getElementById('hello').appendChild(galleryImages)
  document.getElementById('gallery-images1').appendChild(eachImg)

}
createsDivs()

function imageAxe() {
  var fs =require('fs');
  var files = fs.readdirSync('images/')
  console.log(files)
}
imageAxe()
*/
function now(){
  window.confirm("NSFW pieces are included here.")
}now();
