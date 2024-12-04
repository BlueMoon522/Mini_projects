const container = document.querySelector(".flex-container");
const buttons = document.querySelectorAll(".buttonsDiv button");

for (let i = 0; i < 20 * 20; i++) {
  const cell = document.createElement("div");
  cell.setAttribute("data-cell-id", i); // Add a unique identifier
  container.appendChild(cell);
}

let selectedColor = "white"; // Default color
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("buttonRed")) {
      selectedColor = "red";
    } else if (button.classList.contains("buttonGreen")) {
      selectedColor = "green";
    } else if (button.classList.contains("buttonBlue")) {
      selectedColor = "blue";
    }
  });
});

// Add click event to change color of clicked cell
container.addEventListener("mouseover", (event) => {
  const cell = event.target;

  // Check if the clicked element is a cell with the `data-cell-id` attribute
  if (cell.hasAttribute("data-cell-id")) {
    const cellId = cell.getAttribute("data-cell-id");
    // Change the background color of the clicked cell
    cell.style.backgroundColor = selectedColor; // New color (blue)
    // Optionally, log the cell ID to verify
    console.log(`Cell ID ${cellId} clicked!`);
  }
});
