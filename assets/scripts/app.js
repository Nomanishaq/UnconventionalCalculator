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

let add = () => {
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue + userValue;
    createAndWriteOutput('+', initialVal, userValue);
    writeLog('add',initialVal,userValue,changeValue);
}
let sub = () => {
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue - userValue;
    createAndWriteOutput('-', initialVal, userValue);
    writeLog('Subtract',initialVal,userValue,changeValue);

}
let multi = () => {
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue * userValue;
    createAndWriteOutput('*', initialVal, userValue);
    writeLog('Multiply',initialVal,userValue,changeValue);
}
let divide = () => {
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue / userValue;
    createAndWriteOutput('/', initialVal, userValue);
    writeLog('Divide',initialVal,userValue,changeValue);
}
addBtn.addEventListener('click', add);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multi);
subtractBtn.addEventListener('click', sub);
