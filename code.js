//Initial declarations
//let userInput = prompt("What's your calculation?");
let inputArray;
let firstNumber = 0;
let secondNumber = 0;
let operation;
let result = 0;

//querySelectors
const display = document.querySelector("#textbox");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one")
const two = document.querySelector("#two")

function stripInput(userInput) {
    inputArray = userInput.split(/([^\d.])/);
    firstNumber = parseInt(inputArray[0]);
    secondNumber = parseInt(inputArray[2]);
    operation = inputArray[1];
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

function operator(sign) {
    if (sign == "+") {
        add();
    } else if (sign == "-") {
        subtract();
    } else if (sign == "*") {
        multiply();
    } else if (sign == "/") {
        divide();
    }
}

operator(operation);

//DOM Manipulation
zero.addEventListener("click", () => {
    display.value = "ZERO";
})

one.addEventListener("click", ()=>{
    display.value = "ONE"
})

two.addEventListener("click", ()=>{
    display.value = "TWO"
})

console.log(`After: ${inputArray}`);
console.log(`Result: ${result}`);