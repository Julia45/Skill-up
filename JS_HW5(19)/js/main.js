/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

var prevIndicator;
var slidesCount = 5;


function createMainContainer() {
  var mainContainer = document.createElement('div');

  mainContainer.classList.add('carousel');
  mainContainer.id = 'carousel';
  document.body.append(mainContainer);

}

function createSlides(slidesCount) {

  var mainContainer = document.getElementById('carousel')
  var listContainer = document.createElement('ul');

  listContainer.classList.add('slides')

  for (var i = 0; i < slidesCount; i++) {
    var listElement = document.createElement('li');
    var listElementLink = document.createElement('a');

    if (i === 0) {
      listElement.classList.add('slides__item', 'active')
    } else {
      listElement.classList.add('slides__item')
    }

    listElementLink.setAttribute('href', "#");
    listElement.appendChild(listElementLink)
    listContainer.appendChild(listElement);
  }

  mainContainer.appendChild(listContainer)
}


function createIndicators(slidesCount) {

  var mainContainer = document.getElementById('carousel')
  var indicatorContainer = document.createElement('div');
  indicatorContainer.classList.add('indicators');
  for (i = 0; i < slidesCount; i++) {
    var indicator = document.createElement('span');

    if (i === 0) {
      indicator.classList.add('indicators__item', 'active')
    } else {
      indicator.classList.add('indicators__item')
    }

    indicator.dataset.slideTo = i;
    indicatorContainer.appendChild(indicator);
  }
  mainContainer.appendChild(indicatorContainer);
}



function createControls() {
  var mainContainer = document.getElementById('carousel')
  var controlsContainer = document.createElement('div');
  controlsContainer.classList.add('controls');

  for (i = 0; i < 3; i++) {
    var controlbutton = document.createElement('div');
    var controlIcon = document.createElement('i');

    switch (i) {
      case 0:
        controlbutton.classList.add('controls__item', 'controls__prev');
        controlbutton.innerHTML = 'Prev'
        controlIcon.classList.add('fas', 'fa-chevron-left');
        break;
      case 1:
        controlbutton.classList.add('controls__item', 'controls__next');
        controlIcon.classList.add('fas', 'fa-chevron-right');
        controlbutton.innerHTML = 'Next'
        break;
      case 2:
        controlbutton.classList.add('controls__item', 'controls__pause');
        controlIcon.classList.add('fas', 'fa-play');
        controlbutton.innerHTML = 'Pause'
        break;
    }
    controlbutton.appendChild(controlIcon);
    controlsContainer.appendChild(controlbutton);
  }
  mainContainer.appendChild(controlsContainer);
}



function createStyle() {
  var mainContainer = document.getElementById('carousel')
  var styleContainer = document.createElement('style');
  styleContainer.innerHTML =  `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 22px;
      height: 21px;
      background-color: grey;
      margin: 10px;
      border-radius: 4px;
    }`;

  mainContainer.appendChild(styleContainer);
}


function clickHandler(e) {
  var target = e.target;


  if (target.classList.contains('indicators__item')) {
    // target.style.backgroundColor = 'red';

    if (target.style.backgroundColor !== 'red') {
      target.style.backgroundColor = 'red'
    } else {
      target.removeAttribute('style')
    }

    if (prevIndicator && prevIndicator !== target) {
      prevIndicator.removeAttribute('style');
    }

    

    prevIndicator = target;
  }
}

function eventListenerFunc() {
  var indicatorContainer = document.querySelector('.indicators');

  indicatorContainer.addEventListener('click', clickHandler);


}

function createCarousel(slidesCount) {
  createMainContainer()
  createSlides(slidesCount);
  createIndicators(slidesCount)
  createControls();
  createStyle()
  eventListenerFunc()
}

createCarousel(slidesCount);

