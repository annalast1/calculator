// Update display to show answer

// Basic calculator functions +,-,*,/
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
}

function divideIt(num1, num2) {
    return num1 / num2;
}

// Variables for calculator operations
let num1 = null, num2 = null, operator = null, displayValue = '';
let display = document.getElementById("display");
const regex = /[+|\-|x]/g;
const userIn = display.textContent;
const equal = document.getElementById("equal");
equal.addEventListener("click", calculation);

// Make buttons functional
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent === '0'){
            display.textContent = ''; 
            display.textContent += button.innerText;
            displayValue += button.innerText;
    } else {
        display.textContent += button.innerText;
        displayValue += button.innerText;
        console.log(...displayValue);
}})});

const opButton = document.querySelectorAll('.operator');
opButton.forEach(button => {
    button.addEventListener("click", () => {
        if (displayValue.match(regex) != null) {
            return;
        }
        else {
            num1 = Number(displayValue);
            console.log(typeof num1);
            display.textContent += button.innerText;            
            displayValue = button.innerText;

        }    
})});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = '0';
});

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return minus(num1, num2);
            break;
        case 'x':
            return times(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return "Operator Error";
        }
    }
       
    function calculation() {
    
    // Create an array of all operators 
    //let operator = [userIn.match(regex)];
    //console.log(operator);
    let op1 = userIn.search(regex);
    
    num2 = Number(displayValue);
    
    console.log(num2); 
    operate(num1, num2, op1);  
    
}  
   calculation();
   

