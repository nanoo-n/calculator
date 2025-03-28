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
let placeholderNumber = "";
let operator;
display.disabled = true;
display.value = "0";

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
            if (firstNumber == "" && placeholderNumber == result) {
                firstNumber = placeholderNumber;
            }
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
    if (!isFinite(result) || secondNumber == "") {
        display.value = "Sytx Err";
        result = 0;
    } else {
        (result % 1) !== 0 ? display.value = result.toFixed(2) : display.value = result;
    }
    equalsFunction();
    placeholderNumber = result;
    console.log(`AFTER: fn ${firstNumber}, op ${operator}, sn ${secondNumber}, res ${result}, phN ${placeholderNumber}`);
})

clear.addEventListener("click", () => {
    clearNumbers();
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
function equalsFunction() {
    // firstNumber = display.value;
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
}

function clearNumbers() {
    result = 0;
    firstNumber = "";
    secondNumber = "";
    placeholderNumber = 0;
    operator = undefined;
    display.value = "0";
}

    //!Additional TODOs:
// Add decimal to calculator
// Add backspace button to delete
// Add keyboard support