const images = document.getElementsByClassName('images')[0];
const leftArrow = document.getElementsByClassName('leftArrow')[0];
const rightArrow = document.getElementsByClassName('rightArrow')[0];
const pages = document.getElementsByClassName('pages')[0];

const imagesArray = [];
const pagesArray = [];

let index = 0;

for (let i = 0; i < images.children.length; i++) {
  imagesArray.push(images.children[i]);
  pagesArray.push(pages.children[i]);
};

pagesArray[index].classList.add('active');

const removeStylesOnClick = () => {
  imagesArray[index].style.display = 'none';
  pagesArray[index].classList.remove('active');
};

const addStylesByClick = () => {
  pagesArray[index].classList.add('active');
  imagesArray[index].style.display = 'flex';
};

rightArrow.addEventListener('click', function() {
  if (index === imagesArray.length -1) {
    index--;
  };

  removeStylesOnClick();
  index++;
  addStylesByClick();
});

leftArrow.addEventListener('click', function() {
  if (index <= 0) {
    index++;
  };

  removeStylesOnClick();
  index--;
  addStylesByClick();
});
