const GRIDDIM = 600; //Side of Grid
let grid = document.querySelector(".container");

function makeGrid(numberOfBoxes){
  let numRowCol = Math.sqrt(numberOfBoxes); //num of columns / rows
  let gridItemSize = GRIDDIM / numRowCol;
  grid.style.display = "grid";
  grid.style.width = String(GRIDDIM) + "px";
  grid.style.height = String(GRIDDIM) +"px";
  grid.style.gridTemplateColumns = "repeat(" + numRowCol + ", " + gridItemSize+ "px)";
  grid.style.gridTemplateRows = "repeat(" + numRowCol + ", " + gridItemSize+ "px)";
  // single quotes don't work for some styles...

  //grid.style.gridTemplateColumns = 'repeat (' + numRowCol + ', ' + gridItemSize +'px)';
  //grid.style.gridTemplateRows = 'repeat (' + numRowCol + ', ' + gridItemSize +'px)';


  for(i = 0; i < numberOfBoxes; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");

    gridItem.style.width = gridItemSize;
    gridItem.style.height = gridItemSize;

    gridItem.style.cssText = 'border-style: solid; border-color: black'; //delete later
    gridItem.style.borderWidth = "1px";
    gridItem.innerHTML = "<span>" + i + "</span>";

    grid.appendChild(gridItem);

    }
}

window.onload = makeGrid(25);
