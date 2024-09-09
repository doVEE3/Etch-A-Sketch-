const GRIDSIDE = 600;
const squaresPerSide = 16;

const sketchpad = document.querySelector("#sketchpad");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const clearGrid = document.querySelector("#clearBtn")
const rainbowBtn = document.querySelector("#rainbowModeBtn");
  

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchpad.style.width = sketchpad.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}



function createGridCells(squaresPerSide) {
  const numOfSquares = (squaresPerSide * squaresPerSide)
  const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

  for(i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div")
    gridCell.classList.add('gridCell')
  
    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    sketchpad.appendChild(gridCell)

    gridCell.addEventListener("mouseover", setBackgroundColor) ;
  }
}

function removeGridCells() {
  while (sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }
}
slider.oninput = function() {
  let txt = `${this.value} X ${this.value} (Resolution)`;
  sliderValue.innerHTML = txt;
  removeGridCells();
  createGridCells(this.value);

}

/* function rainBow() {
  let gridCell = document.querySelectorAll('.gridCell');

  const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = hexArray[(Math.floor(Math.random() * 16))];
    color = color + randomColor
  }  
} */ 

 
clearGrid.addEventListener("click", () => {removeGridCells(); createGridCells(16); });


createGridCells(16); 

