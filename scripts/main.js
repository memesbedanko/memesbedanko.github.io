
async function createsGallery() {

  for (let i = 0; i < galleryList.length; i++) {

    //creates children element -> div
    var galleryImages = document.createElement('div')
    galleryImages.setAttribute('id', `gallery-images${i}`)
    galleryImages.className = 'gallery-images';

    //creates a elements
    var aTag = document.createElement('a')
    aTag.setAttribute('id', `aTag${i}`)
    aTag.setAttribute('href', `images/${galleryList[i].name}`)
    aTag.setAttribute('target', `_blank`)


    //creates gc element -> img
    var eachImg = document.createElement('img')
    eachImg.src = `images/${galleryList[i].name}`;
    eachImg.className = `each-img ${galleryList[i].tag}`;


    document.getElementById('hello').appendChild(galleryImages)
    document.getElementById(`gallery-images${i}`).appendChild(aTag)
    document.getElementById(`aTag${i}`).appendChild(eachImg)
  }

}
createsGallery()

async function createsList() {
  // Changes the display to none, closing the modal by clicking X
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    myModal.style.display = "none";
  }
  // Same thing, but with the outside of the modal content
  window.onclick = function (event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }
  // loop goes through all phrases
  for (var i = 0; i < myListArray.length; i++) {
    // Section generates the phrases on the page
    let theList = document.createElement('h3')
    theList.className = "my-list hover-effect"
    theList.innerHTML = myListArray[i].name
    theList.setAttribute('id', myListArray[i].name)
    // removes hover effect by removing the class from the element
    if (myListArray[i].caption == "tk") {
      theList.classList.remove('hover-effect')
    }
    // onClick event which 1.gets the caption 2.allows the modal to be shown hidden
    theList.onclick = function () {
      let theCaption = () => {
        for (var i = 0; i < myListArray.length; i++) {
          if (phrase_id == myListArray[i].name)
            return myListArray[i].caption
        }
      }
      var phrase_id = this.id
      if (theCaption() != 'tk') {
        myModal.style.display = "block"
      }
      let htmlCaption = document.getElementById('list-caption')
      htmlCaption.innerHTML = theCaption()
    }

    document.getElementById('phrase').appendChild(theList)
  }
  /*
    for (let i = 0; i < theTruthList.length; i++) {
      let truthList = document.createElement('h3');
      truthList.className = 'my-list'
      truthList.innerHTML = theTruthList[i];
      document.getElementById('truths').appendChild(truthList)
    }
  */

}
createsList()
