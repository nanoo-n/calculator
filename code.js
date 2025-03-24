//Initial declarations
//let userInput = prompt("What's your calculation?");
let inputString = "";
let operationArray = [];
let firstNumber = 0;
let secondNumber = 0;
let operation;
let result = 0;

//querySelectors
const display = document.querySelector("#textbox");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const buttons = document.querySelector("#buttons");

//DOM Manipulation
buttons.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        //inputString = target.textContent;
        inputString = inputString.concat("", target.textContent);
        //console.log(inputString);
        display.value = inputString;
    }
});

equals.addEventListener("click", () => {
    stripInput(inputString);
    operator(operation);
    display.value = result.toFixed(2);
    console.log(operationArray);
    //console.log(result);
    clearNumbers();
})

clear.addEventListener("click", () => {
    clearNumbers();
    display.value = "0";
})

function stripInput(string) {
    operationArray = string.split(/([^\d.])/);
    if (operationArray[0] == "") {
        firstNumber = parseInt(result);
    } else {
        firstNumber = parseInt(operationArray[0]);
    }
    secondNumber = parseInt(operationArray[2]);
    operation = operationArray[1];
};


function add() {
    result = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber} = ${result}`);
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

function clearNumbers() {
    inputString = "";
    operationArray = [];
}