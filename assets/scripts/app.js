const defaultValue = 0;
let changeValue = defaultValue;

let userInput = ()=>{
    return parseInt(userValue.value);
}

let createAndWriteOutput =(operator,resultBeforCal,calNum)=>{
    const calDescription = `${resultBeforCal} ${operator} ${calNum}`;
    outputResult(changeValue,calDescription);
}

let add = ()=>{
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue + userValue;
    createAndWriteOutput('+',initialVal,userValue);
}
let sub = () =>{
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue - userValue;
    createAndWriteOutput('-',initialVal,userValue);
}
let multi = () =>{
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue * userValue;
    createAndWriteOutput('*',initialVal,userValue);
}
let divide = () =>{
    let userValue = userInput();
    let initialVal = changeValue;
    changeValue = changeValue / userValue;
    createAndWriteOutput('/',initialVal,userValue);
}
addBtn.addEventListener('click',add);
divideBtn.addEventListener('click',divide);
multiplyBtn.addEventListener('click',multi);
subtractBtn.addEventListener('click',sub);
