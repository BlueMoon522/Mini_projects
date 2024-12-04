//selecting the class flex container from the  html
const container = document.querySelector(".flex-container");
//iteratively creating a cells in the container ,change 20*20 to another number to generate that number of cells i.e 20*20 = 400
for (let i = 0; i < 20 * 20; i++) {
  //creating a new div called cells
  const cell = document.createElement("div");
  //adding an attribute of id to the data sell from 0-399, while iterating it add the value to the new div/cells
  cell.setAttribute("data-cell-id", i);
  //appending the cell in the container as child
  if (i === 2) {
    cell.setAttribute("data-value", 4);
  }
  container.appendChild(cell);
  cell.textContent = i;

  //checking all the properties of a cell
  //   const getAllProperties = (cell, props = []) =>
  //     cell.__proto__
  //       ? getAllProperties(
  //           cell.__proto__,
  //           props.concat(Object.getOwnPropertyNames(cell))
  //         )
  //       : [...new Set(props.concat(Object.getOwnPropertyNames(cell)))];
  //   const divProps = getAllProperties(cell);
  //   console.log(divProps);
}
//clicking on a particular cell
container.addEventListener("click", (event) => {
  const cell = event.target;
  //using id to check if the current cell is actually cell on not
  if (cell.hasAttribute("data-cell-id")) {
    const cellValue = cell.getAttribute("data-value");

    if (cellValue) {
      cell.textContent = cellValue;
    }
    container.appendChild(cell);
    const id = cell.getAttribute("data-cell-id");
    console.log(`cell Id ${id},touched`);
  }
});
