const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.display-p');
const actions = document.querySelectorAll('.action');
const equal = document.querySelector('.equal');
const del = document.querySelector('.del');
const ac = document.querySelector('.ac');
const decimal = document.querySelector('.decimal');
const prctg = document.querySelector('.prctg');

let firstNumber;
let secondNumber;
let operation;

function operate(firstNum, secondNum, operator) {

    switch (operator) {
        case "+":
            return (firstNum+secondNum);
            break;
        case "-":
            return (firstNum-secondNum);
            break;
        case "/":
            if (secondNum == 0) {
                display.innerHTML = "You can't do this";
            } else {
                return (firstNum/secondNum);
            }
            break;
        case "x":
            return (firstNum*secondNum);
            break;
        default:
            break;
    }
}

let amount = "0";


numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        if (amount.length >= 10) {
            alert('więcej nie można');
        } else if (amount == "0.") {
            amount += number.value;
            display.innerHTML = amount;
        } else if (amount == 0) {
            amount = number.value;
            display.innerHTML = amount;
        } else {
            amount += number.value;
            display.innerHTML = amount;
        }
    })
});



actions.forEach(action => {
    action.addEventListener('click', ()=> {
        (firstNumber == undefined || firstNumber == NaN) ? firstNumber = parseFloat(amount) : secondNumber = parseFloat(amount);
        operation = action.value;
        amount = "";
    })
})
let result = 0;
equal.addEventListener('click', ()=> {
    (firstNumber == undefined) ? firstNumber = parseFloat(amount) : secondNumber = parseFloat(amount);
    amount = "";
    result = operate(firstNumber, secondNumber, operation);
    if (!(result % 0.01 == 0 || result % 0.1 == 0)) {
        result = result.toFixed(3);
    }
    display.innerHTML = result;
    firstNumber = result;
})

del.addEventListener('click', ()=> {
    if (amount.length > 1) {
        amount = amount.slice(0, -1);
        display.innerHTML = amount;
    } else {
        amount = "0";
        display.innerHTML = amount;
    }
})

ac.addEventListener('click', ()=> {
    firstNumber = undefined;
    secondNumber = undefined;
    amount = "0";
    display.innerHTML = amount;
})

decimal.addEventListener('click',()=> {
    amount+=".";
    display.innerHTML = amount;
})

prctg.addEventListener('click', ()=> {
    amount = amount/100;
    display.innerHTML = amount;
})