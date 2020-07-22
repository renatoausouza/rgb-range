window.addEventListener('load', start);

let inputRangeRed = null,
  inputRangeGreen = null,
  inputRangeBlue = null;

let inputTextRed = null,
  inputTextGreen = null,
  inputTextBlue = null;

let divShowColor = null;

let red = 0,
  green = 0,
  blue = 0;

function start() {
  mapping();
  sync();
}

function mapping() {
  inputRangeRed = document.querySelector('#inputRangeRed');
  inputRangeGreen = document.querySelector('#inputRangeGreen');
  inputRangeBlue = document.querySelector('#inputRangeBlue');

  inputTextRed = document.querySelector('#inputTextRed');
  inputTextGreen = document.querySelector('#inputTextGreen');
  inputTextBlue = document.querySelector('#inputTextBlue');

  divShowColor = document.querySelector('#divShowColor');
}

function sync() {
  inputRangeRed.addEventListener('change', handleChange);
  inputRangeGreen.addEventListener('change', handleChange);
  inputRangeBlue.addEventListener('change', handleChange);
}

function handleChange(event) {
  switch (event.target.id) {
    case 'inputRangeRed':
      red = event.target.value;
      inputTextRed.value = red;
      break;
    case 'inputRangeGreen':
      green = event.target.value;
      inputTextGreen.value = green;
      break;
    case 'inputRangeBlue':
      blue = event.target.value;
      inputTextBlue.value = blue;
      break;
  }
  updateColor();
}

function updateColor() {
  divShowColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
