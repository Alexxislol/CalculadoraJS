let displayValue = "0";

function updateDisplay() {
    const display = document.getElementById("pantalla");
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === "0" && value !== '.') {
    displayValue = value;
    } else {
    displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculate() {
    try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
    } catch (error) {
    displayValue = "Syntax Error";
    updateDisplay();
    }
}

updateDisplay();