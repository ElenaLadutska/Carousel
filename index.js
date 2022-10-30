const images = document.getElementsByClassName('images')[0];
const leftArrow = document.getElementsByClassName('leftArrow')[0];
const rightArrow = document.getElementsByClassName('rightArrow')[0];
const pages = document.getElementsByClassName('pages')[0];

const imagesArray = [];
const pagesArray = [];

let startedIndex = 0;

for (let i = 0; i < images.children.length; i++) {
  imagesArray.push(images.children[i]);
}

for (let i = 0; i < pages.children.length; i++) {
  pagesArray.push(pages.children[i]);
}

pagesArray[startedIndex].classList.add('active');

leftArrow.addEventListener('click', function(){
  if (startedIndex <= 0) {
    startedIndex = startedIndex + 1;
  };
  
  imagesArray[startedIndex].style.display = 'none';
  pagesArray[startedIndex].classList.remove('active');

  startedIndex = startedIndex - 1;

  pagesArray[startedIndex].classList.add('active');
  imagesArray[startedIndex].style.display = 'flex';
});

rightArrow.addEventListener('click', function(){
  if (startedIndex === imagesArray.length -1 ) {
    startedIndex = startedIndex - 1;
  };

  imagesArray[startedIndex].style.display = 'none';
  pagesArray[startedIndex].classList.remove('active');

  startedIndex = startedIndex + 1;

  pagesArray[startedIndex].classList.add('active');
  imagesArray[startedIndex].style.display = 'flex';
});
