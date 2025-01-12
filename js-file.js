//Just keyboard support to go
// Variables for each part of sum
let num1 = null, num2 = null, operator = [], result = 0;

// Basic calculator functions +,-,*,/
function add(num1, num2) {
    result = num1 + num2;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return Number(result.toFixed(6));
    }    
};
function subtract(num1, num2) {
    result = num1 - num2;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return Number(result.toFixed(6));
    }
   
};
function multiply(num1, num2) {
    result = num1 * num2;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return Number(result.toFixed(6));
    }    
};
function divide(num1, num2) {
    if (num1 <= 0) {
        clearAll();
    }
    if (num2 === 0) {
        clearAll();
        return ("LMAO");
    }
    result = (num1 / num2)
    if (Number.isInteger(result)) {
        return result;
    } else {
        return Number(result.toFixed(6));
    }
};

// Call the appropriate calculator function
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return "Operator Error";
        }
};

// DOM manipulation
let display = document.getElementById("display");
// Store input as string
let userIn = '';
// Store current value
let displayValue = '';
// Store last char
let prev = '';

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        // At the beginning of the sum overwrite the display of 0
        if (display.textContent === '0'){
            display.textContent = ''; 
            display.textContent = button.innerText;
            displayValue = button.innerText;
            userIn = display.textContent;
            prev = userIn.slice(-1);
        } // if not first input just add the value to existing  
            else {
            display.textContent += button.innerText;
            displayValue += button.innerText;
            userIn = display.textContent;
            prev = userIn.slice(-1);
}})});

// Make keyboard numbers only functional
document.body.addEventListener("keydown", (ev) => {
    const regex = /[0-9]/;
    if (regex.test(ev.key)) {
        if (display.textContent === '0'){
            display.textContent = ''; 
            display.textContent = ev.key;
            displayValue = ev.key
            userIn = display.textContent;
            prev = userIn.slice(-1);
        } else {
            display.innerText += ev.key;
            displayValue += ev.key;
            userIn = display.textContent;
            prev = userIn.slice(-1);
         
        }
    } else {
        return;
    }});

// Make operator buttons functional
const opButton = document.querySelectorAll('.operator');
opButton.forEach(button => {
    button.addEventListener("click", () => {  
        // Stops repeated input of operators 
        if (['+','-','x','/'].includes(prev)) {
            return alert("too many operators");
        } 
        
        if (operator.length > 0) {
            num2 = parseFloat(displayValue);
            num1 = operate(num1, num2, operator);
            display.innerText = num1 + button.innerText; 
            operator = button.innerText;
            displayValue = '';
        }
        else {  
            num1 = parseFloat(displayValue);
            displayValue = '';
            display.textContent += button.innerText; 
            userIn += button.innerText;  
            prev = userIn.slice(-1);
            operator += button.innerText;
        } 
})});

// Make decimal point functional
const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    if (prev =='.'|| displayValue.includes('.')) {
       return
    } else
    display.textContent += decimal.innerText;
    displayValue += decimal.innerText;
    userIn += decimal.innerText;  
    prev = userIn.slice(-1);
    
})

// Make clear button functional
const clear = document.getElementById("clear");
clear.addEventListener("click", clearAll);

function clearAll() {
    display.textContent = '';
        display.textContent = '0';
        displayValue = '';
        userIn = '';
        operator = '';
        num1 = null;
        num2 = null;
        prev = '';
    };

//Make equal button functional
const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    // if last input was operator - clearAll
    if (displayValue == '' || operator == '') {
        clearAll();
    } else {
        calculation();
}});

// Make backspace functional
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.replace(prev, '');
    userIn = display.textContent;
    prev = userIn.slice(-1);

    if (display.textContent.length < 1) {
        display.textContent = 0;
    }
})

// Carry out sum
function calculation() {
    // Get digits input after operator 
    num2 = parseFloat(displayValue);
    if (num2 == null || operator == '') {
        clearAll();
    } else {
        display.innerText = operate(num1, num2, operator);
    }  
};
