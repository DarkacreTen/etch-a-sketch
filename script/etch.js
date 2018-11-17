const GRIDDIM = 600; //Side of Grid
const MAXSIZE = Math.pow(GRIDDIM,2);
let grid = document.querySelector(".container");
const colInput = document.getElementById("col-input"); //initial value from HTML
let displayBoxNum = document.getElementById("noOfBoxes");
let goColor = document.getElementById("color-submit");
var currentColor = "black"; //initializes as black

//Checks when New Color Checked
goColor.addEventListener("click", function (e){
  currentColor = document.querySelector("input[name=color-choice]:checked").value
});


//Calculate GridSize

function calculateSize(numColumns){
  if (numColumns > MAXSIZE){
    numColumns = MAXSIZE;
  }else{
    numColumns *= numColumns;
    makeGrid(numColumns);
  }
}

//Displays Number of Boxes on Screen
function displayBoxes(numColumns){
  displayBoxNum.textContent = String(Math.pow(numColumns,2));
}


//Resets Grid
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", resetGrid);

function resetGrid (){
  //returns nodelist of all child cells
  let resetCells = document.querySelectorAll(".active");
  for (let i = 0; i < resetCells.length; i++){
    resetCells[i].style.backgroundColor = "initial";
    resetCells[i].classList.remove("active");
  }
}

//Color on or Off on Grid
function switchColor (cell) {
  cell.classList.add("active");
  cell.style.backgroundColor = currentColor;
}

//Sets New Size on Grid

colInput.addEventListener("input", function(){
  calculateSize(colInput.value);
  resetGrid();
  displayBoxes(colInput.value);
})

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

    gridItem.style.cssText =
    'border-style: solid; border-color: rgb(175, 185, 193)'; //delete later
    gridItem.style.borderWidth = "1px";

    grid.appendChild(gridItem);

    gridItem.addEventListener("click", function (e){
      let cell = e.target;
      if (clickState){
        clickState = false;
      }else{
        switchColor(cell);
        clickState = true;
      }
    });

    gridItem.addEventListener('mouseenter', function (e){
        let cell = e.target;
        if (clickState){
          switchColor(cell);
        }
    });

    }
}

//Inital Load
window.onload = calculateSize(colInput.value);
displayBoxes(colInput.value);
