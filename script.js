const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");
let displayValue = "0";
updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}
keys.addEventListener("click", (event) => {
  const element = event.target;
  if (!element.matches("button")) return;

  if (element.classList.contains("operator")) {
    console.log("operator", element.value);
    return;
  }
  if (element.classList.contains("decimal")) {
    inputDecimal();
    updateDisplay();
    return;
  }
  if (element.classList.contains("clear")) {
    clear();
    updateDisplay();
    return;
  }
  inputNumber(element.value);
  updateDisplay();
});

function inputNumber(num) {
  displayValue = displayValue === "0" ? num : displayValue + num;
}

function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function clear() {
  displayValue = "0";
}
