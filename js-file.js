// Variables for each part of sum
let num1 = null, num2 = null, operator = [], result = 0;
// Basic calculator functions +,-,*,/
function add(num1, num2) {
    return num1 + num2;
    
};
function subtract(num1, num2) {
    return num1 - num2;
   
};
function multiply(num1, num2) {
    return num1 * num2;
    
};
function divide(num1, num2) {
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

// Make operator buttons functional
const opButton = document.querySelectorAll('.operator');
opButton.forEach(button => {
    button.addEventListener("click", () => {  
        // Stops repeated input of operators 
        if (['+','-','x','/'].includes(prev)) {
            return alert("too many operators");
        } else {  
            num1 = Number(displayValue);
            displayValue = '';
            display.textContent += button.innerText; 
            userIn += button.innerText;  
            prev = userIn.slice(-1);
            operator += button.innerText;
        } 
})});

// Make clear button functional
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = '0';
    displayValue = '';
    userIn = '';
    operator = '';
    num1 = null;
    num2 = null;
});

//Make equal button functional
const equal = document.getElementById("equal");
equal.addEventListener("click", calculation);

// Carry out sum
function calculation() {
    // Get digits input after operator 
    num2 = Number(displayValue);
    
    console.log(operate(num1, num2, operator[0]));  
} 
