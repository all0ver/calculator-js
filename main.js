const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.display-p');
const actions = document.querySelectorAll('.action');
const equal = document.querySelector('.equal');
const del = document.querySelector('.del');
const ac = document.querySelector('.ac');
const decimal = document.querySelector('.decimal');

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
            return (firstNum/secondNum);
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
        } else if (amount === 0) {
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
        console.log("firstNumber = "+firstNumber+", second number = "+secondNumber);
        amount = 0;
    })
})
let result = 0;
equal.addEventListener('click', ()=> {
    (firstNumber == undefined) ? firstNumber = parseFloat(amount) : secondNumber = parseFloat(amount);
    console.log("firstNumber = "+firstNumber+", second number = "+secondNumber);
    amount = 0;
    result = operate(firstNumber, secondNumber, operation);
    if (!(result % 1 == 0)) {
        result = result.toFixed(3);
    } else {
        // result = parseInt(result);
    }
    display.innerHTML = result;
    firstNumber = result;
})

del.addEventListener('click', ()=> {
    if (amount.length > 1) {
        amount = amount.slice(0, -1);
        display.innerHTML = amount;
    } else {
        amount = 0;
        display.innerHTML = amount;
    }
})

ac.addEventListener('click', ()=> {
    firstNumber = undefined;
    secondNumber = undefined;
    amount = 0;
    display.innerHTML = amount;
})

decimal.addEventListener('click',()=> {
    amount+=".";
    console.log(amount);
    display.innerHTML = amount;
})