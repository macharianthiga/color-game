var color = generateRandom(6);
var pickedColor = pickColor();
var message = document.getElementById("message");
var reTry  = document.getElementById('repeat');





//update picked color onto the h1
var colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor;

//select all the squares and give them a color
var squares = document.querySelectorAll(".square");


function changerBox(){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background  = color[i];
    //find the color of the picked box. If it's correct change it to the bacground color
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
        message.textContent= "Correct!"
        colorChanger();
        console.log("Bravo. You got it correct!")
      } else{
        this.style.background = "#232323";
        message.textContent ="Try Again"
      }
    });
  }
}

//change colors
changerBox();
//change Color of all boxes to match that of the correct Color
function colorChanger(){
  squares.forEach(function(square){
    square.style.background = pickedColor;
    document.querySelector("#messages-Wrapper").style.background = pickedColor;
  })
};


//Create a random color
function pickColor(){
  var random = Math.floor(Math.random()*color.length);
  return color[random];
}

//generate random colors

function generateRandom(num){
  //create an array
  var arr = [];
  //add random numbers to array
  for(var i = 0; i < num; i++){
    //get random color  and push into array
    arr.push(randomColor())
  }
  //return the array
  return arr
}

function randomColor(){
  //pick a red from 0 to 255
  var r = Math.floor(Math.random()*256);
  //pick a green from 0 to 255
  var g =  Math.floor(Math.random()*256);
  //pick a blue from 0 to 255
  var b =  Math.floor(Math.random()*256);
  return 'rgb(' + r + ", " + g + ", " + b + ')';
}


  reTry.addEventListener('click', playAgain);
  function playAgain(){
    //generate all new colors
    color = generateRandom(6);
    //pick a new colr from array
    pickedColor = pickColor();
    //update the color display
    colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor;
    //change color of squares
    changerBox();
    //change color of the messages-Wrapper
    document.querySelector("#messages-Wrapper").style.background = "#4278Ab";
    //remove message from display
      message.textContent = "";

  }
