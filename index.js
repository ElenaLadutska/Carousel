const leftArrow = document.getElementsByClassName('leftArrow')[0];
const rightArrow = document.getElementsByClassName('rightArrow')[0];
const images = document.getElementsByClassName('images')[0];
const pages = document.getElementsByClassName('pages')[0];

const imgToShow = document.createElement('img');

const COUNT = 9;
let index = 0;

for (let i = 0; i < COUNT; i++) {
  const page = document.createElement('div');
  page.className = 'page';
  page.id = i;
  pages.appendChild(page);
};

const page = document.getElementsByClassName('page');

Array.from(page).forEach(item => item.addEventListener('click', () => {
  removeStylesFromPage(index)
  showActivePicAndPage(item.id);
}));

const showActivePicAndPage = (id = index) => {
  imgToShow.src = `./assets/${id}.jpg`;
  pages.children[id].classList.add('active');
  images.appendChild(imgToShow);
  index = id;
};

showActivePicAndPage();

const removeStylesFromPage = () => {
  pages.children[index].classList.remove('active');
};


const showNextPicture = (id = index) => {
  if (index === COUNT - 1) {
    removeStylesFromPage();
    index = 0;
    showActivePicAndPage();
  }
  else {
    removeStylesFromPage();
    index++;
    showActivePicAndPage();
  }
};

const showPreviousPicture = (id = index) => {
  if (index <= 0) {
    removeStylesFromPage();
    index = COUNT -1;
    showActivePicAndPage();
  }
  else {
    removeStylesFromPage();
    index--;
    showActivePicAndPage();
  }
}

rightArrow.addEventListener('click', showNextPicture);
leftArrow.addEventListener('click', showPreviousPicture);

window.addEventListener('keydown', e => {
  if(e.key === 'ArrowRight') {
    showNextPicture();
  } 
  else if (e.key === 'ArrowLeft') {
    showPreviousPicture()
  }
});

