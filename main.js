const galleryList = [
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
const myList = [
  "The feeling is mutual",
  "...---...",
  "Melanhap",
  "Contrived smiles and a bill of goods",
  "Unreliable narrator",
  "She likes to talk",
  "I'm not sure what I'm looking for",
  "Put an * next to my name",
  "White Lies",
  "Imaginary Muse",
  'Ashley\'s safety',
  'What if wonders',
  'Don\'t overdose on happiness',
  'Depression',
  'You\'re one to talk',
  'Someone to talk to',
  'I am not sure why we have to keep doing this shit',
  'I dont know enough',
  "The less I know"
]
const theTruthList = [

]
async function createsGallery() {

  for(let i = 0;i<galleryList.length;i++){

    //creates children element -> div
    var galleryImages = document.createElement('div')
    galleryImages.setAttribute('id',`gallery-images${i}`)
    galleryImages.className = 'gallery-images';

    //creates gc element -> img
    var eachImg = document.createElement('img')
    eachImg.src = `images/${galleryList[i].name}`;
    eachImg.className = `each-img ${galleryList[i].tag}`;


    document.getElementById('hello').appendChild(galleryImages)
    document.getElementById(`gallery-images${i}`).appendChild(eachImg)
  }


}
createsGallery()

async function createsList(){
  for(let i = 0;i<myList.length;i++){
    let theList = document.createElement('h3');
    theList.className = 'my-list';
    theList.innerHTML = myList[i];
    document.getElementById('phrase').appendChild(theList);


  }
  for (let i = 0; i < theTruthList.length; i++) {
    let truthList = document.createElement('h3');
    truthList.className = 'my-list'
    truthList.innerHTML = theTruthList[i];
    document.getElementById('truths').appendChild(truthList)
  }


}
createsList()

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
