const container = document.querySelector(".flex-container");

// Generate 32x32 = 1024 cells
for (let i = 0; i < 32 * 32; i++) {
  const cell = document.createElement("div");
  container.appendChild(cell);
}

const newBgcolor = document.querySelector(".flex-container");
function changeBgColor() {
  newBgcolor.style.backgroundColor = "blue";
}
console.log(newBgcolor);

newBgcolor.addEventListener("mouseover", changeBgColor);
