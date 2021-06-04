console.clear();

const colorPaletteReference = document.querySelector('#color-palette');

const createElementPixelBoard = document.createElement('table');

const createInput = document.createElement('input');

const createButtonForNumberOfPixel = document.createElement('button');

createElementPixelBoard.setAttribute('id', 'pixel-board');

colorPaletteReference.after(createElementPixelBoard);

colorPaletteReference.after(createButtonForNumberOfPixel);
colorPaletteReference.after(createInput);

createInput.setAttribute('id', 'board-size');

createInput.setAttribute('min', '1');

createInput.setAttribute('step', '1');

createInput.setAttribute('type', 'number');

createButtonForNumberOfPixel.setAttribute('id', 'generate-board');

createButtonForNumberOfPixel.innerText = 'VQV';

for (let index = 0; index < 25; index += 1) {
  const createElementoPixel = document.createElement('tr');
  createElementoPixel.setAttribute('class', 'pixel');
  createElementPixelBoard.appendChild(createElementoPixel);
}

let random = `#${Math.ceil(Math.random() * 9) * 100000 + parseInt((Math.random() * 99999), 10)}`;

document.getElementsByClassName('colorTwo')[0].style.backgroundColor = random;
random = `#${Math.ceil(Math.random() * 9) * 100000 + parseInt((Math.random() * 99999), 10)}`;
document.getElementsByClassName('colorThree')[0].style.backgroundColor = random;
random = `#${Math.ceil(Math.random() * 9) * 100000 + parseInt((Math.random() * 99999), 10)}`;
document.getElementsByClassName('colorFour')[0].style.backgroundColor = random;

const colorsOfThePalette = document.querySelectorAll('.color');

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

const pixelSize = parseInt(window.getComputedStyle(document.querySelector('.pixel')).width, 10);

const pixelBoard = document.getElementById('pixel-board');

pixelBoard.style.width = `${pixelSize * 5 + 5}px`;

pixelBoard.style.height = `${pixelSize * 5 + 5}px`;

const createElementButtonClear = document.createElement('button');

createElementButtonClear.setAttribute('id', 'clear-board');

colorPaletteReference.after(createElementButtonClear);

createElementButtonClear.style.width = '70px';

createElementButtonClear.style.height = '30px';

createElementButtonClear.style.margin = '5px auto';

createElementButtonClear.style.display = 'inline-block';

createElementButtonClear.innerText = 'Limpar';

const buttonClearReference = document.querySelector('#clear-board');

const buttonInput = document.getElementById('generate-board');

const input = document.getElementById('board-size');

function bob2() {
  if (Number.isNaN(parseInt(input.value, 10))) {
    alert('Board inválido!');
  }
  if (parseInt(input.value, 10) < 5) {
    input.value = 5;
  }
  if (parseInt(input.value, 10) > 50) {
    input.value = 50;
  }
}

function bub() {
  for (
    let index = 0;
    index < parseInt(input.value, 10) * parseInt(input.value, 10);
    index += 1
  ) {
    const createElementoPixel = document.createElement('tr');
    createElementoPixel.setAttribute('class', 'pixel');
    createElementPixelBoard.appendChild(createElementoPixel);
    // document.getElementsByClassName('pixel')[index].style.backgroundColor =
    //   'white';
  }
}

const pixelsOnTheBoard = document.querySelectorAll('.pixel');

buttonInput.addEventListener('click', () => {
  pixelBoard.innerHTML = '';
  bob2();
  bub();
  if (parseInt(input.value, 10) > 5) {
    const fui = (parseInt(input.value, 10) - 5) * 41;
    pixelBoard.style.width = `${205 + fui}px`;
    pixelBoard.style.heith = `${205 + fui}px`;
  }
});

for (let index = 0; index < pixelsOnTheBoard.length; index += 1) {
  pixelsOnTheBoard[index].addEventListener('click', () => {
    const colorsOfThePaletteSelected = document.querySelector('.selected');
    const color = window.getComputedStyle(
      colorsOfThePaletteSelected,
    ).backgroundColor;
    pixelsOnTheBoard[index].style.backgroundColor = color;
  });
}

const lib = document.querySelector('#generate-board');
lib.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const colorsOfThePaletteSelected = document.querySelector('.selected');
      const color = window.getComputedStyle(
        colorsOfThePaletteSelected,
      ).backgroundColor;
      pixels[index].style.backgroundColor = color;
      console.log('bob');
    });
  }
  console.log('borb');
});

input.oninput = () => {
  if (parseInt(input.value, 10) < 1) {
    input.value = 1;
  }
  if (parseInt(input.value, 10) > 50) {
    input.value = 50;
  }
};

buttonClearReference.addEventListener('click', () => {
  for (let index = 0; index < pixelsOnTheBoard.length; index += 1) {
    pixelsOnTheBoard[index].style.backgroundColor = 'white';
  }
});

// input.oninput = () => {
//     input.value = 1;
// };

// for (let index = 0; index < pixelsOnTheBoard.length; index += 1) {
//   pixelsOnTheBoard[index].style.width = `${parseInt(input.value, 10) * 2}px`;
//   pixelsOnTheBoard[index].style.height = `${parseInt(input.value, 10) * 2}px`;
// }
// pixelBoard.style.width = `${parseInt(input.value, 10) * 10 + 10}px`;
// pixelBoard.style.maxHeight = `${parseInt(input.value, 10) * 10 + 10}px`;
