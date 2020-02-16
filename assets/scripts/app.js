const defaultValue = 0;
let changeValue = defaultValue;
let logEntry = [];

let userInput = () => {
    return parseInt(userValue.value);
}

let createAndWriteOutput = (operator, resultBeforCal, calNum) => {
    const calDescription = `${resultBeforCal} ${operator} ${calNum}`;
    outputResult(changeValue, calDescription);
}
let writeLog = (operationIdentifier,prevResult,operationNumber,newReslt) =>{
    let val = {
        operationI: operationIdentifier,
        prevRes: prevResult,
        operationNum: operationNumber,
        newRes: newReslt
    }
    logEntry.push(val);
    console.log(val);
    
}
let calculateResult = (operator)=>{
    let mathOperator;
    let userValue = userInput();
    let initialVal = changeValue;
    if (operator === "ADD") {
    changeValue += userValue;
    mathOperator = '+';          
    } else if(operator === 'SUBTRACT'){
        changeValue -= userValue;
        mathOperator = '-';
    } else if (operator === 'MULTIPLY') {
        changeValue *= userValue;
        mathOperator = '*';
    } else if (operator === 'DIVIDE') {
        changeValue /= userValue;
        mathOperator = '/';
    }
createAndWriteOutput(mathOperator, initialVal, userValue);
writeLog(operator,initialVal,userValue,changeValue);
}

let add = () => {
    calculateResult('ADD');
}
let sub = () => {
    calculateResult('SUBTRACT');
}
let multi = () => {
    calculateResult('MULTIPLY')
}
let divide = () => {
    calculateResult('DIVIDE');
}
addBtn.addEventListener('click', add);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multi);
subtractBtn.addEventListener('click', sub);
    