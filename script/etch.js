const GRIDDIM = 600; //Side of Grid
const MAXSIZE = Math.pow(GRIDDIM,2);
let grid = document.querySelector(".container");

//Calculate GridSize

function calculateSize(numColumns){
  if (numColumns > MAXSIZE){
    numColumns = MAXSIZE;
  }else{
    numColumns *= numColumns;
    makeGrid(numColumns);
  }
}

//Inital Setup
window.onload = calculateSize(4);

//Resets Grid
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", resetGrid);

function resetGrid (){
  let resetCells = document.querySelectorAll(".active");
  for (let i = 0; i < resetCells.length; i++){
    resetCells[i].classList.remove("active");
  }
}

let changeColor = (cell) => {
  cell.classList.add("active");
}

//Generates Grid, Elements and Active Spaces
function makeGrid(numberOfBoxes){
  let numRowCol = Math.sqrt(numberOfBoxes); //num of columns / rows
  let gridItemSize = GRIDDIM / numRowCol;
  let clickState = false; //initialize click value
  grid.style.display = "grid";
  grid.style.width = String(GRIDDIM) + "px";
  grid.style.height = String(GRIDDIM) +"px";
  grid.style.gridTemplateColumns = "repeat(" + numRowCol + ", " + gridItemSize+ "px)";
  grid.style.gridTemplateRows = "repeat(" + numRowCol + ", " + gridItemSize+ "px)";
  // single quotes don't work for some styles...


  for(i = 0; i < numberOfBoxes; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");

    gridItem.style.width = gridItemSize;
    gridItem.style.height = gridItemSize;

    gridItem.style.cssText = 'border-style: solid; border-color: black'; //delete later
    gridItem.style.borderWidth = "1px";
    gridItem.innerHTML = "<span>" + i + "</span>";

    grid.appendChild(gridItem);

    gridItem.addEventListener("click", function (e){
      let cell = e.target;
      if (clickState){
        clickState = false;
      }else{
        changeColor(cell);
        clickState = true;
      }
    });

    gridItem.addEventListener('mouseenter', function (e){
        let cell = e.target;
        if (clickState){
          changeColor(cell);
        }
    });

    }
}
