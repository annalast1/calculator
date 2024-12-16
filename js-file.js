// Basic calculator functions +,-,*,/
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
}

function divideIt(a, b) {
    return a / b;
}

// Variables for calculator operations
const num1 = 0, num2 = 0, operator = '';

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    display.textContent += '0';
})
const one = document.getElementById("one");
one.addEventListener("click", () => {
    display.textContent += '1';
});
const two = document.getElementById("two");
two.addEventListener("click", () => {
    display.textContent += '2';
});
const three = document.getElementById("three");
three.addEventListener("click", () => {
    display.textContent += '3';
});
const four = document.getElementById("four");
four.addEventListener("click", () => {
    display.textContent += '4';
});
const five = document.getElementById("five");
five.addEventListener("click", () => {
    display.textContent += '5';
});
const six = document.getElementById("six");
six.addEventListener("click", () => {
    display.textContent += '6';
});
const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    display.textContent += '7';
})
const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    display.textContent += '8';
});
const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    display.textContent += '9';
});
const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
    display.textContent += '+';
})
const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
    display.textContent += '-';
});
const times = document.getElementById("times");
times.addEventListener("click", () => {
    display.textContent += 'x';
});
const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
    display.textContent += '/';
});
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = '';
});
const display = document.getElementById("display");
