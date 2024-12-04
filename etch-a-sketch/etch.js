const container = document.querySelector(".flex-container");
const buttons = document.querySelectorAll(".buttonsDiv button");
let selectedColor = ""; // Default color
let method = "mouseover"; //default event
//Generate a 20*20 grid/div
for (let i = 0; i < 20 * 20; i++) {
  const cell = document.createElement("div");
  cell.setAttribute("data-cell-id", i); // Add a unique identifier
  container.appendChild(cell);
}

//all the colors that are possible
const Colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "cyan",
  "magenta",
  "lime",
  "indigo",
  "violet",
  "teal",
  "maroon",
  "beige",
  "navy",
];

//change color when "mouseover"
// Add click event to change color of clicked cell
container.addEventListener(method, (event) => {
  const cell = event.target;
  // Check if the clicked element is a cell with the `data-cell-id` attribute
  if (cell.hasAttribute("data-cell-id")) {
    const cellId = cell.getAttribute("data-cell-id");
    // Change the background color of the clicked cell
    cell.style.backgroundColor = selectedColor;
    // Optionally, log the cell ID to verify
    console.log(`Cell ID ${cellId},touched`);
  }
});

function setRandomColor() {
  //Colors[Math.floor(Math.random() * Colors.length)];
  //don't define this globally outside of the function or it will only have one color for the whole
  //time as the number remains the same even though function is being called multiple times,rookie error :(
  const color = Colors[Math.floor(Math.random() * Colors.length)];
  return color;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("buttonRed")) {
      selectedColor = "red";
    } else if (button.classList.contains("buttonGreen")) {
      selectedColor = "green";
    } else if (button.classList.contains("buttonBlue")) {
      selectedColor = "blue";
    } else if (button.classList.contains("buttonRand")) {
      selectedColor = setRandomColor();
      selectedColor = selectedColor;
    } else if (button.classList.contains("buttonFill")) {
      const cells = container.querySelectorAll("div");
      cells.forEach((cell) => {
        selectedColor = setRandomColor();
        cell.style.backgroundColor = selectedColor;
      });
    } else if (button.classList.contains("disc")) {
      //function to add a delay in ms
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      //runs the loop with delay provided above
      async function runLoop() {
        for (let i = 0; i < 50; i++) {
          console.log(i);
          const cells = container.querySelectorAll("div");
          console.log(`Iteration: ${i}`);
          cells.forEach((cell) => {
            selectedColor = setRandomColor();
            cell.style.backgroundColor = selectedColor;
          });

          // Wait for 2 seconds before continuing to the next iteration
          await delay(100);
        }
      }
      runLoop();
    }
  });
});
