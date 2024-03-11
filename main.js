const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.display-p');
const actions = document.querySelectorAll('.action');
const equal = document.querySelector('.equal');
// const 

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

let amount = "";


numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        if (amount.length >= 10) {
            alert('więcej nie można');
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
        (firstNumber == undefined) ? firstNumber = parseInt(amount) : secondNumber = parseInt(amount);
        operation = action.value;
        console.log("firstNumber = "+firstNumber+", second number = "+secondNumber);
        amount = 0;
    })
})
let result = 0;
equal.addEventListener('click', ()=> {
    (firstNumber == undefined) ? firstNumber = parseInt(amount) : secondNumber = parseInt(amount);
    console.log("firstNumber = "+firstNumber+", second number = "+secondNumber);
    amount = 0;
    result = operate(firstNumber, secondNumber, operation);
    result = result.toFixed(3);
    display.innerHTML = result;
    firstNumber = result;
})

