const colors = generateRandomColors(6);

const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");

colorDisplay.textContent = `Which is ${pickedColor}?`;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares

  squares[i].style.backgroundColor = colors[i];
  //add click listener to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    //compare to pickedColor
    if (clickedColor === pickedColor) {
      //alert("you did it!");
      messageDisplay.textContent = "Correct!";
      messageDisplay.style.color = "#71ee1e";
      colorDisplay.textContent = pickedColor;
      changeColors(clickedColor);
      setTimeout(() => {
        messageDisplay.textContent = "";
        const button = document.createElement("button");
        button.innerText = "Play Again";
        messageDisplay.appendChild(button);
        button.onclick = () => {
          document.location.reload();
        };
            }, 3000);

    } else {
      messageDisplay.textContent = `wrong, this is ${clickedColor}`;
      messageDisplay.style.color = "#ff2511";
      this.style.backgroundColor = "#232323";
      // only if onclick any square = false
/*       setTimeout(() => {
        messageDisplay.textContent = "Try again";
        messageDisplay.style.color = "#fff";
    }, 1000);
 */    }
  });
}
function changeColors(color) {
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  const arr = [];
  //add random colors to array=repeat num numbers of times
  for (let i = 0; i < num; i++) {
    //generate random color
    arr.push(randomColor());
  }
  //return that array
  return arr;
}
function randomColor() {
  // pick a redd from 0-255
  const r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  const g = Math.floor(Math.random() * 256);
  //pick a blue 0-255
  const b = Math.floor(Math.random() * 256);
  //combine colors
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
