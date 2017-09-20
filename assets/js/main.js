var colors = randColors(3);

var boxes = document.querySelectorAll(".box");
var pickedColor = colorPicker();
var secretColor = document.getElementById("rgbTitle");
secretColor.textContent = pickedColor;
var message = document.getElementById("message");
var titleBar = document.querySelector(".title-bar");
var resetBtn = document.getElementById("newGame");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var insaneBtn = document.getElementById("insaneBtn");

function gameStart(){
  colors = randColors(3);
  pickedColor = colorPicker();
  for (var i=0; i < boxes.length; i++){
    if(colors[i]){
      boxes[i].style.background = colors[i];
    } else {
    boxes[i].style.display = "none";
    }
  }
}

gameStart();

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  insaneBtn.classList.remove("selected");
  for (var i=0; i < boxes.length; i++){
      boxes[i].style.backgroundColor = "transparent";
    }
  colors = randColors(3);
  pickedColor = colorPicker();
  secretColor.textContent = pickedColor;
  for (var i=0; i < boxes.length; i++){
    if(colors[i]){
      boxes[i].style.background = colors[i];
    } else {
    boxes[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  insaneBtn.classList.remove("selected");
  for (var i=0; i < boxes.length; i++){
      boxes[i].style.backgroundColor = "transparent";
    }
  colors = randColors(6);
  pickedColor = colorPicker();
  secretColor.textContent = pickedColor;
  for (var i=0; i < boxes.length; i++){
    if(colors[i]){
      boxes[i].style.background = colors[i];
      boxes[i].style.display = "block";
    } else {
    boxes[i].style.display = "none";
    }
  }
})

insaneBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.remove("selected");
  insaneBtn.classList.add("selected");
  for (var i=0; i < boxes.length; i++){
      boxes[i].style.backgroundColor = "transparent";
    }
  colors = randColors(9);
  pickedColor = colorPicker();
  secretColor.textContent = pickedColor;
  for (var i=0; i < boxes.length; i++){
    if(colors[i]){
      boxes[i].style.backgroundColor = colors[i];
      boxes[i].style.display = "block";
    }
  }
})


resetBtn.addEventListener("click", function(){
  for (var i=0; i < boxes.length; i++){
      boxes[i].style.backgroundColor = "transparent";
    }
  if (easyBtn.classList == "selected"){
    colors = randColors(3);

  } else if (hardBtn.classList == "selected"){
    colors = randColors(6);
  } else {
    colors = randColors(9);
  }
  //pick a new random color
  pickedColor = colorPicker();
  secretColor.textContent = pickedColor;
  //change colors of squares
  for (var i=0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = colors[i];
  }
  titleBar.style.backgroundColor = "#4281A4";
  message.textContent = "";
})


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
