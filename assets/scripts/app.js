const initialResult = 0;
let result = initialResult;

function add(){
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${result} + ${enteredNumber}`;    
    result += enteredNumber;
    outputResult(result, calcDescription);
}

addBtn.addEventListener('click', add);
