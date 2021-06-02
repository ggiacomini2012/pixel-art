console.clear();

const colorPaletteReference = document.querySelector('#color-palette');
const createElementPixelBoard = document.createElement('table');
createElementPixelBoard.setAttribute('id', 'pixel-board');
colorPaletteReference.after(createElementPixelBoard);
// const createElementPixelBoard = document.querySelector('#pixel-board');

for (let index = 0; index < 25; index += 1) {
  const createElementoPixel = document.createElement('tr');
  createElementoPixel.setAttribute('class', 'pixel');
  createElementPixelBoard.appendChild(createElementoPixel);
}

const colorsOfThePalette = document.querySelectorAll('.color');
const pixelsOnTheBoard = document.querySelectorAll('.pixel');

for (let index = 0; index < colorsOfThePalette.length; index += 1) {
  colorsOfThePalette[index].addEventListener('click', () => {
    for (
      let indexClassRemoval = 0;
      indexClassRemoval < colorsOfThePalette.length;
      indexClassRemoval += 1
    ) {
      colorsOfThePalette[indexClassRemoval].classList.remove('selected');
    }
    colorsOfThePalette[index].className += ' selected';
  });
}

for (let index = 0; index < pixelsOnTheBoard.length; index += 1) {
  pixelsOnTheBoard[index].addEventListener('click', () => {
    const colorsOfThePaletteSelected = document.querySelector('.selected');
    const color = window.getComputedStyle(colorsOfThePaletteSelected).backgroundColor;
    pixelsOnTheBoard[index].style.backgroundColor = color;
  });
}
