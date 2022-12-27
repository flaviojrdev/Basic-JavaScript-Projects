const initialResult = 0;
let currentResult = initialResult;
let logEntries = [];

// Gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;

  switch (calculationType) {
    case 'ADD':
      currentResult += enteredNumber;
      mathOperator = '+'
      break;
    case 'SUBTRACT':
      currentResult -= enteredNumber;
      mathOperator = '-'
      break;    
    case 'MULTIPLY':
      currentResult *= enteredNumber;
      mathOperator = '*'
      break;    
    case 'DIVIDE':
      currentResult /= enteredNumber;
      mathOperator = '/'
      break;
    default:
      break;
  }
  
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
