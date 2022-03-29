// get elements
const tilesContainer = document.querySelector(".tiles-container");
const keyboardContainer = document.querySelector(".keyboard-container");
const messageContainer = document.querySelector(".message-container");

// make keyboard
const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<<",
];

const handleClick = () => {
  console.log("button clicked");
};

keys.forEach((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  button.setAttribute("id", key);
  button.addEventListener("click", handleClick);
  keyboardContainer.append(button);
});

// make tiles
const tilesRows = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

tilesRows.forEach((row, rowIndex) => {
  const rowElement = document.createElement("div");
  rowElement.setAttribute("id", `row-${rowIndex}`);
  row.forEach((tile, tileIndex) => {
    const tileElement = document.createElement("div");
    tileElement.setAttribute("id", `row-${rowIndex}-tile-${tileIndex}`);
    tileElement.classList.add("tile");
    rowElement.append(tileElement);
  });
  tilesContainer.append(rowElement);
});

// message
const showMessage = (message) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
};
