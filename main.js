const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.display-p');

let firstNumber;
let secondNumber;
let operation;

function operate(firstNum, secondNum, operator) {
    
}

let amount = ""
numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        if (amount.length >= 10) {
            alert('więcej nie można');
        } else {
            amount += number.value;
            display.innerHTML = amount;
        }
    })
});