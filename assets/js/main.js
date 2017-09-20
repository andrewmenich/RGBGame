var numSquares = 3;
var colors = [];
var pickedColor;
var boxes = document.querySelectorAll(".box");
var secretColor = document.getElementById("rgbTitle");
secretColor.textContent = pickedColor;
var message = document.getElementById("message");
var titleBar = document.querySelector(".title-bar");
var resetBtn = document.getElementById("newGame");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var insaneBtn = document.getElementById("insaneBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  pickerLogic();
  reset();
}

function setupModeButtons(){
  for (var i=0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy 🎂"){
        numSquares = 3;
      } else if (this.textContent == "Hard 🤜🏽"){
        numSquares = 6;
        } else {
        numSquares = 9;
        }
      reset();
    })
  }
}

function pickerLogic(){
  for (var i=0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        titleBar.style.backgroundColor = pickedColor;
        changeAllColors(clickedColor);
        resetBtn.textContent = "Play Again"
      } else {
        this.style.backgroundColor = "#222";
        message.textContent = "Try again!";
      }
    })
  }
}

function reset(){
  for (var i=0; i < boxes.length; i++){
      boxes[i].style.backgroundColor = "transparent";
    }
  colors = randColors(numSquares);
  pickedColor = colorPicker();
  secretColor.textContent = pickedColor;
  resetBtn.textContent = "New Colors"
  for (var i=0; i < boxes.length; i++){
    if(colors[i]){
      boxes[i].style.background = colors[i];
      boxes[i].style.display = "block";
    } else {
    boxes[i].style.display = "none";
    }
  }
  titleBar.style.backgroundColor = "#4281A4";
  message.textContent = "";
}

resetBtn.addEventListener("click", function(){
    if (modeButtons[0].classList == "mode selected"){
      numSquares = 3;
    } else if (modeButtons[1].classList == "mode selected"){
      numSquares = 6;
      } else {
      numSquares = 9;
      }
  reset();
})

function changeAllColors(color){
  for (var i=0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = color;
  }
}

function colorPicker(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randColors(num){
  //make an array
  var arr = []
  //add random colors to array
  for(var i=0; i < num; i++){
    arr.push(generateRandomColors())
    //get random color and push into array
  }
  //return that array
  return arr;
}

function generateRandomColors() {
  //pick a "red" from 0 - 255
  var r = Math.floor((Math.random() * 255) + 1);
  //pick a "green" from 0 - 255
  var g = Math.floor((Math.random() * 255) + 1);
  //pick a "blue" from 0 - 255
  var b = Math.floor((Math.random() * 255) + 1);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
