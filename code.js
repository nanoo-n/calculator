console.log("hello world");

//let userInput = prompt("What's your calculation?");
let inputArray;
let firstNumber = 0;
let secondNumber = 0;
let operator;
let result = 0;

function stripInput(userInput) {
    inputArray = userInput.split(/([^\d.])/);
    firstNumber = parseInt(inputArray[0]);
    secondNumber = parseInt(inputArray[2]);
    operator = inputArray[1];
};

//stripInput(userInput);

function add() {
    result = firstNumber + secondNumber;
};

function subtract() {
    result = firstNumber - secondNumber;
}

function multiply() {
    result = firstNumber * secondNumber;
}

function divide() {
    result = firstNumber / secondNumber;
}

//console.log(`Operator: ${operator}`);
//console.log(`Initial result: ${result}`);

if (operator == "+") {
    add();
} else if (operator == "-") {
    subtract();
} else if (operator == "*") {
    multiply();
} else if (operator == "/") {
    divide();
}

console.log(`After: ${inputArray}`);
console.log(`Result: ${result}`);