const initialResult = 0;
let currentResult = initialResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${currentResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;    
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;    
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;    
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;    
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
