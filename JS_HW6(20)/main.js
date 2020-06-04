var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);
var pauseButton = document.querySelector('#pause');
var playing = true;
var next = document.querySelector('#next');
var previous = document.querySelector('#previous');


function nextSlide() {
  goToSlide(currentSlide + 1)
}

function prevSlide() {
  goToSlide(currentSlide - 1)
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length; // n = 1
  slides[currentSlide].className = 'slide active';
}

function pauseSlideShow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideShow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}


pauseButton.onclick = function() {
  if (playing) {
      pauseSlideShow();
  } else {
      playSlideShow();
  }
};


next.onclick = function () {
  pauseSlideShow();
  nextSlide();
};

previous.onclick = function () {
  pauseSlideShow();
  prevSlide();
};
