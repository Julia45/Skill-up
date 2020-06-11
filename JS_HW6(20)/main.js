var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);
var pauseButton = document.querySelector('#pause');
var playing = true;
var indicatorsContainer = document.querySelector('.indicators-container');
var indicators = document.querySelectorAll('.indicator_item')
var next = document.querySelector('#next');
var previous = document.querySelector('#previous');
var controls = document.querySelector('.button-container')
var mainContainer = document.querySelector('.carousel')
var swipeStartX = null;
var swipeEndX = null;
controls.style.display = 'flex'
indicatorsContainer.style.display = 'flex'


function nextSlide() {
  goToSlide(currentSlide + 1)
}

function prevSlide() {
  goToSlide(currentSlide - 1)
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  indicators[currentSlide].className = 'indicator_item';
  currentSlide = (n + slides.length) % slides.length; // n = 1 => 6 % 6 = 1
  slides[currentSlide].className = 'slide active';
  indicators[currentSlide].className = 'indicator_item active';
}

function pauseSlideShow() {
  if (playing) {
    playing = false;
    pauseButton.innerHTML = '<i class="fas fa-pause">';
    clearInterval(slideInterval);
  }
}

function playSlideShow() {
  pauseButton.innerHTML = '<i class="fas fa-play">';
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

function indicate(e) {
  var target = e.target;

  if (target.classList.contains('indicator_item')) {
    pauseSlideShow();
    goToSlide(+target.getAttribute('data-slide-to'))
  }
}
indicatorsContainer.addEventListener('click', indicate)


pauseButton.onclick = function () {
  pausePlay()
};


next.onclick = function () {
  pauseSlideShow();
  nextSlide();
};


previous.onclick = function () {
  pauseSlideShow();
  prevSlide();
};

function pausePlay() {
  if (playing) {
    pauseSlideShow();
  } else {
    playSlideShow();
  }
}

function pressKey(e) {
  if (e.key === 'ArrowLeft') {
    pauseSlideShow();
    prevSlide()
  } if (e.key === 'ArrowRight') {
    pauseSlideShow();
    nextSlide()
  } if (e.key === ' ') {
    pausePlay();
  }
}


function swipeStart(e) {
  swipeStartX = e.changedTouches[0].pageX

}

function swipeEnd(e) {
  swipeEndX = e.changedTouches[0].pageX
  if ((swipeStartX - swipeEndX) > 100) {
    pauseSlideShow()
    nextSlide()
  } else if ((swipeStartX - swipeEndX) < -100) {
    pauseSlideShow()
    prevSlide()
  }
}

document.addEventListener('keydown', pressKey)
mainContainer.addEventListener('touchstart', swipeStart)
mainContainer.addEventListener('touchend', swipeEnd)