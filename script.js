let currentInput = '0';
let operator = null;
let prevInput = '0';

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0' || currentInput === 'Error') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  prevInput = currentInput;
  currentInput = '0';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  prevInput = '0';
  updateDisplay();
}

function calculate() {
  let result;
  const num1 = parseFloat(prevInput);
  const num2 = parseFloat(currentInput);

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Error';
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Error';
    }
  }

  currentInput = result.toString();
  operator = null;
  prevInput = '0';
  updateDisplay();
}

// Initial display update
updateDisplay();
