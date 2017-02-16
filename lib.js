var color = [
  "RGB(255, 0, 0)",
  "RGB(255, 0, 255)",
  "RGB(255, 255, 0)",
  "RGB(0, 255, 0)",
  "RGB(0, 0, 255)",
  "RGB(0, 255, 255)"
]
var pickedColor = color[3];

//update picked color onto the h1
var title = document.querySelector("span").textContent = pickedColor;

//select all the squares and give them a color
var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
  squares[i].style.background  = color[i];
  console.log(squares[i])
}
