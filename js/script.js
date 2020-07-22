window.addEventListener('load', start);

var outputRed = document
  .querySelector('#inputValueRed')
  .addEventListener('input', changeShowColor);
var outputGreen = document
  .querySelector('#inputValueGreen')
  .addEventListener('input', changeShowColor);
var outputBlue = document
  .querySelector('#inputValueBlue')
  .addEventListener('input', changeShowColor);

function start() {
  activateInput();
}

function changeShowColor() {
  var red = document.querySelector('#inputValueRed').value;
  var green = document.querySelector('#inputValueGreen').value;
  var blue = document.querySelector('#inputValueBlue').value;
  var rgbString = 'rgb(' + red + ',' + green + ',' + blue + ')';
  console.log(rgbString);
  var divShowColor = (document.querySelector(
    '#showColor'
  ).style.backgroundColor = rgbString);
}

function activateInput() {
  //Get red values
  var inputValueRed = document.querySelector('#inputValueRed');
  var outputValueRed = document.querySelector('#outputValueRed');
  inputValueRed.oninput = function () {
    var result = (document.querySelector(
      '#outputValueRed'
    ).placeholder = outputValueRed.innerHTML = this.value);
  };

  //Get green values
  var inputValueGreen = document.querySelector('#inputValueGreen');
  var outputValueGreen = document.querySelector('#outputValueGreen');
  inputValueGreen.oninput = function () {
    var result = (document.querySelector(
      '#outputValueGreen'
    ).placeholder = outputValueGreen.innerHTML = this.value);
  };

  //Get blue values
  var inputValueBlue = document.querySelector('#inputValueBlue');
  var outputValueBlue = document.querySelector('#outputValueBlue');
  inputValueBlue.oninput = function () {
    var result = (document.querySelector(
      '#outputValueBlue'
    ).placeholder = outputValueBlue.innerHTML = this.value);
  };
}
