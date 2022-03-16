/* eslint-disable */

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

function buttonInputHelperOne() {
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

const pixels = document.getElementsByClassName('pixel');

const resize = document.createElement('button');

const resizeInput = document.createElement('input');

resizeInput.setAttribute('type', 'number');

resizeInput.setAttribute('step', '0.5');

buttonInput.after(resize);

resize.after(resizeInput);

function buttonInputHelperTwo() {
  for (
    let index = 0;
    index < parseInt(input.value, 10) * parseInt(input.value, 10);
    index += 1
  ) {
    const createElementoPixel = document.createElement('tr');
    createElementoPixel.setAttribute('class', 'pixel');
    createElementPixelBoard.appendChild(createElementoPixel);
  }
}

const pixelsOnTheBoard = document.querySelectorAll('.pixel');

function buttonInputHelperThree() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.width = `${parseInt(resizeInput.value, 10) * 2}px`;
    pixels[index].style.height = `${parseInt(resizeInput.value, 10) * 2}px`;
  }
  pixelBoard.style.width = `${
    parseInt(resizeInput.value, 10) * 2 * parseInt(input.value, 10)
  }px`;
  pixelBoard.style.height = `${
    parseInt(resizeInput.value, 10) * 2 * parseInt(input.value, 10)
  }px`;
}

buttonInput.addEventListener('click', () => {
  pixelBoard.innerHTML = '';
  buttonInputHelperOne();
  buttonInputHelperTwo();
  if (parseInt(input.value, 10) > 5) {
    const fui = (parseInt(input.value, 10) - 5) * 41;
    pixelBoard.style.width = `${205 + fui}px`;
    pixelBoard.style.heith = `${205 + fui}px`;
  }
  if (resizeInput.value > 0) {
    buttonInputHelperThree();
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

let count = 0;

window.mouseDown = false;
document.onmousedown = () => {
  window.mouseDown = true;
  count += 1;
};
document.onmouseup = () => {
  window.mouseDown = false;
};

const boardGenerate = document.querySelector('#generate-board');
boardGenerate.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    let bib;
    let bob = 1;
    pixelBoard.addEventListener('click', () => {
      bob += 1;
      bib = bob % 2 === 0;
    });
    pixels[index].addEventListener('mouseover', () => {
      if (bib) {
        const colorsOfThePaletteSelected = document.querySelector('.selected');
        const color = window.getComputedStyle(
          colorsOfThePaletteSelected,
        ).backgroundColor;
        pixels[index].style.backgroundColor = color;
      }
    });
  }
});

boardGenerate.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const colorsOfThePaletteSelected = document.querySelector('.selected');
      const color = window.getComputedStyle(
        colorsOfThePaletteSelected,
      ).backgroundColor;
      pixels[index].style.backgroundColor = color;
    });
  }
});

for (let index = 0; index < pixels.length; index += 1) {
  let bib;
  let bob = 1;
  pixelBoard.addEventListener('click', () => {
    bob += 1;
    bib = bob % 2 === 0;
  });
  pixels[index].addEventListener('mouseover', () => {
    if (bib) {
      const colorsOfThePaletteSelected = document.querySelector('.selected');
      const color = window.getComputedStyle(
        colorsOfThePaletteSelected,
      ).backgroundColor;
      pixels[index].style.backgroundColor = color;
      pixels[index].classList.add('shadow');
    }
  });
}

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

resize.addEventListener('click', () => {
  if (count > 0 && input.value > 0) {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.width = `${parseInt(resizeInput.value, 10) * 2}px`;
      pixels[index].style.height = `${parseInt(resizeInput.value, 10) * 2}px`;
    }
    pixelBoard.style.width = `${
      parseInt(resizeInput.value, 10) * 2 * parseInt(input.value, 10)
    }px`;
    pixelBoard.style.height = `${
      parseInt(resizeInput.value, 10) * 2 * parseInt(input.value, 10)
    }px`;
  }
});

resizeInput.oninput = () => {
  if (parseInt(resizeInput.value, 10) < 1) {
    resizeInput.value = 1;
  }
  if (parseInt(resizeInput.value, 10) > 50) {
    resizeInput.value = 50;
  }
};
