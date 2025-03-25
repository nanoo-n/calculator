        //*querySelectors
const display = document.querySelector("#textbox");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".operator");

        //*initial declarations
let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator;

        //*event listeners

buttons.forEach((btn) => btn.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        if (operator == undefined) {
            firstNumber = firstNumber.concat("", target.textContent);
            display.value = firstNumber;
        }
        if (operator !== undefined) {
            secondNumber = secondNumber.concat("", target.textContent);
            display.value = secondNumber;
        }
    }
}));

operators.forEach((op) => op.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        operator = target.textContent;
        display.value = operator;
    }
}));

equals.addEventListener("click", () => {
    operation(operator);
    display.value = result.toFixed(2);
    console.log(`${result}`);
    clearNumbers();
})

clear.addEventListener("click", () => {
    result = 0;
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
    display.value = "0";
})

        //*operation functions
function add() {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
};

function subtract() {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
}

function multiply() {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
}

function divide() {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
}

function operation(sign) {
    console.log(`firstNumber ${firstNumber} ${operator} secondNumber ${secondNumber}`);
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
    firstNumber = result;
    secondNumber = "";
    operator = undefined;
}