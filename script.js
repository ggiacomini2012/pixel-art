console.clear();

const referenciaColorPalette = document.querySelector('#color-palette');
const criarElementoPixelBoard = document.createElement('table');
criarElementoPixelBoard.setAttribute('id', 'pixel-board');
referenciaColorPalette.after(criarElementoPixelBoard);
// const elementoPixelBoard = document.querySelector('#pixel-board');
// const elementoPixelBoardVertical = document.querySelector('.pixel');

for (let index = 0; index < 25; index += 1) {
  const criarElementoPixelHorizontal = document.createElement('tr');
  criarElementoPixelHorizontal.setAttribute('class', 'pixel');
  criarElementoPixelBoard.appendChild(criarElementoPixelHorizontal);
// for (let i = 0; i < 5; i += 1) {
//   const criarElementoPixelVertical = document.createElement('tr');
//   criarElementoPixelVertical.setAttribute('class', 'pixel');
//   criarElementoPixelBoard.appendChild(criarElementoPixelVertical);
//   }
}
