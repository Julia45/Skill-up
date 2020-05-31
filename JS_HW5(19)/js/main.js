/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createMainContainer() {
  var mainContainer = document.createElement('div');

  mainContainer.classList.add('carousel');
  mainContainer.id = 'carousel';
  document.body.append(mainContainer);

}

createMainContainer()

// function createCarousel () {
//   var carousel = document.createElement('div')
//   var mainContainer = document.getElementById('carousel')
//   carousel.classList.add('carousel');

//   mainContainer.appendChild(carousel) 
// }

// createCarousel()


function createSlides() {
  var mainContainer = document.getElementById('carousel')
  var listContainer = document.createElement('ul');

  listContainer.classList.add('slides')

  for (i = 0; i <= 4; i++) {
    var listElement = document.createElement('li');
    var listElementLink = document.createElement('a');

    listElement.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');


    listElementLink.setAttribute('href', "#");
    listElement.appendChild(listElementLink)
    listContainer.appendChild(listElement);
  }

  mainContainer.appendChild(listContainer)
}


function createIndicators() {
  var mainContainer = document.getElementById('carousel')
  var indicatorContainer = document.createElement('div');
  indicatorContainer.classList.add('indicators');
  for (i = 0; i <= 4; i++) {
    let indicator = document.createElement('span');

    indicator.setAttribute(
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );

    indicator.setAttribute('data-slide-to', i);    
    indicatorContainer.appendChild(indicator);
  }
  mainContainer.appendChild(indicatorContainer);
}



function createControls() {
  var mainContainer = document.getElementById('carousel')
  var controlsContainer = document.createElement('div');
  controlsContainer.classList.add('controls');
  for (i = 0; i < 3; i++) {
    let controlbutton = document.createElement('div');
    let controlIcon = document.createElement('i');

    switch (i) {
      case 0:
        controlbutton.classList.add('controls__item', 'controls__prev');
        controlIcon.classList.add('fas', 'fa-chevron-left');
        break;
      case 1:
        controlbutton.classList.add('controls__item', 'controls__next');
        controlIcon.classList.add('fas', 'fa-chevron-right');
        break;
      case 2:
        controlbutton.classList.add('controls__item', 'controls__pause');
        controlIcon.classList.add('fas', 'fa-play');
        break;
    }
    controlbutton.appendChild(controlIcon);
    controlsContainer.appendChild(controlbutton);
  }
  mainContainer.appendChild(controlsContainer);
}



function createStyle() {
  var mainContainer = document.getElementById('carousel')
  styleContainer = document.createElement('style');
  let styleCode = `
    .controls,
    .slides {
      position: relative;

    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 20px;
      height: 20px;
      background-color: gray;
      margin: 5px;
      border-radius: 10px;
    }`;

  styleContainer.innerHTML = styleCode;
  mainContainer.appendChild(styleContainer);
}





function createCarousel() {
  createMainContainer()
  createSlides();
  createIndicators()
  createControls();
  createStyle()


}

createCarousel();

