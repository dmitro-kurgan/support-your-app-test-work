const images = [
  'full-carezza-lake.jpg',
  'full-lonely.jpg',
  'full-uluwatu.jpg',
];

const block = document.getElementById('bgImage');
const handler = setInterval(carousel, 10000);
const countEnd = 6;
const startDelay = 1500;
let count = 0;
let imageIndex;

function getIndex() {
  localStorage.getItem('image') ? imageIndex = localStorage.getItem('image') : imageIndex = Math.floor(Math.random() * images.length);
}

getIndex();

function carousel() {
  if (++count === countEnd) clearInterval(handler);

  localStorage.setItem('image', imageIndex);

  if (block) {
    setTimeout(function () {
      block.style.opacity = '1';
    }, startDelay);

    block.style.background = 'url("./images/' + images[imageIndex] + '") no-repeat center center fixed';
    block.style.backgroundSize = 'cover';
  }

  imageIndex++

  if (imageIndex >= images.length) imageIndex = 0;
}

carousel();
