
var showPrevBtn = document.getElementById('show_prev_btn');
var showNextBtn = document.getElementById('show_next_btn');

var slideImage_prev = document.getElementById('slide_prev-img');
var slideImage = document.getElementById('slide-img');
var slideImage_next = document.getElementById('slide_next-img');

showPrevBtn.addEventListener('click',onShowPrevBtnClick);
showNextBtn.addEventListener('click',onShowNextBtnClick);

var imagesPaths = ['photos/board-1.png', 'photos/board-2.png', 'photos/board-3.png', 'photos/board-4.png', 'photos/board-5.png', 'photos/board-6.png', 'photos/board-7.png', 'photos/board-8.png']

var currentImageIndex_prev = 0;
var currentImageIndex = 1;
var currentImageIndex_next = 2;


slideImage_prev.src = imagesPaths[currentImageIndex_prev];


slideImage.src = imagesPaths[currentImageIndex];
slideImage_next.src = imagesPaths[currentImageIndex_next];




function onShowPrevBtnClick () {

  if (currentImageIndex_prev != 0) currentImageIndex_prev--;
  else currentImageIndex_prev = imagesPaths.length-1;



  if (currentImageIndex != 0) currentImageIndex--;
  else currentImageIndex = imagesPaths.length-1;

  if (currentImageIndex_next != 0) currentImageIndex_next--;
  else currentImageIndex_next = imagesPaths.length-1;

  slideImage_prev.src = imagesPaths[currentImageIndex_prev];



  slideImage.src = imagesPaths[currentImageIndex];
  slideImage_next.src = imagesPaths[currentImageIndex_next];

}

function onShowNextBtnClick () {

  if (currentImageIndex_prev >= 7) currentImageIndex_prev = 0;
  else currentImageIndex_prev++;

  if (currentImageIndex >= 7) currentImageIndex = 0;
  else currentImageIndex++;

  if (currentImageIndex_next >= 7) currentImageIndex_next = 0;
  else currentImageIndex_next++;

  slideImage_prev.src = imagesPaths[currentImageIndex_prev];
  slideImage.src = imagesPaths[currentImageIndex];
  slideImage_next.src = imagesPaths[currentImageIndex_next];
}
