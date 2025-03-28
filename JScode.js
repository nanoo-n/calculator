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
display.disabled = true;

        //*event listeners

buttons.forEach((btn) => btn.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        if (operator == undefined) {
            if (firstNumber.length < 4) {
                firstNumber = firstNumber.concat("", target.textContent);
            }
            display.value = firstNumber;
        }
        if (operator !== undefined) {
            if (secondNumber.length < 4) {
                secondNumber = secondNumber.concat("", target.textContent);
            }
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
    if (isFinite(result)) {
        (result % 1) !== 0 ? display.value = result.toFixed(2) : display.value = result;
    } else {
        display.style.fontSize = "20px";
        display.value = "Syntax Error";
        result = 0;
    }
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


        //*General functions & info
function clearNumbers() {
    firstNumber = result;
    secondNumber = "";
    operator = undefined;
    display.style.fontSize = "50px";
}

//*TODOs:
//! Avoid error when pressing = before entering all numbers
//! Add way of restarting calculation if numbers are pressed after result
//! Add decimal to calculator