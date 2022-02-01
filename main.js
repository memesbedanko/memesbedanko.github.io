const newList = [
  {
    'name':'ThisIsntAboutYou.png',
    'tag':'sfw'
  },
  {
    'name': 'baddays.png',
    'tag': 'sfw'
  },
  {
    'name': 'FuckIfIKnow.png',
    'tag': 'sfw'
  },
  {
    'name': 'CebCock.png',
    'tag': 'nsfw'
  },
  {
    'name': 'CursedGrabNewBooba.png',
    'tag': 'nsfw'
  },
  {
    'name': 'FullBodyTrimmed.png',
    'tag': 'sfw'
  },
  {
    'name': 'How i hold my joystick.png',
    'tag': 'nsfw'
  },
  {
    'name': 'NewMemeWhoThis.png',
    'tag': 'sfw'
  },
  {
    'name': 'Pasted image 20211118231633.png',
    'tag': 'sfw'
  },
  {
    'name': 'Pasted image 20211118231830.png',
    'tag': 'sfw'
  },
  {
    'name': 'Pasted image 20211118231914.png',
    'tag': 'sfw'
  },
  {
    'name': 'Right My Wrongs.png',
    'tag': 'sfw'
  },
  {
    'name': 'Scene.png',
    'tag': 'sfw'
  },
  {
    'name': 'SpaceCowBoy.png',
    'tag': 'nsfw'
  },
  {
    'name': 'ash.png',
    'tag': 'sfw'
  },

  {
    'name': 'beachnobody.png',
    'tag': 'sfw'
  },
  {
    'name': 'maggie.png',
    'tag': 'sfw'
  },
  {
    'name': 'midrift.png',
    'tag': 'sfw'
  },
  {
    'name': 'no3.jpg',
    'tag': 'sfw'
  },
  {
    'name': 'pepe.png',
    'tag': 'sfw'
  },
  {
    'name': 'pl.jpg',
    'tag': 'sfw'
  },
  {
    'name': 'pole.png',
    'tag': 'nsfw'
  },
  {
    'name': 'someboxes.png',
    'tag': 'sfw'
  },
  {
    'name': 'waiting.png',
    'tag': 'sfw'
  },
  {
    'name': 'why.png',
    'tag': 'sfw'
  }
]
const list = [
  'CebCock.png',
  'CursedGrabNewBooba.png',
  'FuckIfIKnow.png',
  'FullBodyTrimmed.png',
  'How i hold my joystick.png',
  'NewMemeWhoThis.png',
  'Pasted image 20211118231633.png',
  'Pasted image 20211118231830.png',
  'Pasted image 20211118231914.png',
  'Right My Wrongs.png',
  'Scene.png',
  'SpaceCowBoy.png',
  'ash.png',
  'baddays.png',
  'beachnobody.png',
  'maggie.png',
  'midrift.png',
  'no3.jpg',
  'pepe.png',
  'pl.jpg',
  'pole.png',
  'someboxes.png',
  'waiting.png',
  'why.png'
]

function createsDivs() {

  for(let i = 0;i<list.length;i++){

    //creates children element -> div
    var galleryImages = document.createElement('div')
    galleryImages.setAttribute('id',`gallery-images${i}`)
    galleryImages.className = 'gallery-images';

    //creates gc element -> img
    var eachImg = document.createElement('img')
    eachImg.src = `images/${newList[i].name}`;
    eachImg.className = `each-img ${newList[i].tag}`;


    document.getElementById('hello').appendChild(galleryImages)
    document.getElementById(`gallery-images${i}`).appendChild(eachImg)
  }


}
createsDivs()
/*
function imageAxe() {
  var fs =require('fs');
  var files = fs.readdirSync('images/')
  console.log(files)
}
imageAxe()

function now(){
  window.confirm("NSFW pieces are included here.")
}now();
*/
