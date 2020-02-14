const defultResult = 0;
let changeResult = defultResult;

let getUserInput = ()=>{
   return parseInt(userValue.value);
}
let createAndWriteOutput = (operator, resultBeforeCal, calNum)=>{
    const calDescription = `${resultBeforeCal} ${operator} ${calNum}`;
    outputResult(changeResult,calDescription);
}


let add =()=>{
    const userInput = getUserInput();
    const initialResult = changeResult;
    changeResult = changeResult + userInput;
    createAndWriteOutput('+',initialResult,userInput);
}
let sub = ()=>{
const userInput = getUserInput();
const initialResult = changeResult;
changeResult = changeResult - userInput;
createAndWriteOutput('-',initialResult,userInput);
}
let multiply = ()=>{
    const userInput = getUserInput();
    const initialResult = changeResult;
    changeResult = changeResult * userInput;
    createAndWriteOutput('*',initialResult,userInput);
}
let divide = ()=>{
    const userInput = getUserInput();
    const initialResult = changeResult;
    changeResult = changeResult / userInput;
    createAndWriteOutput('/',initialResult,userInput);
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
