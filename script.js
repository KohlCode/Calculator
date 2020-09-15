const display = document.querySelector('#display');
let displayVal = '';
let currentNum = '';
let firstNum = '';
let opChosen = '';





function add(...args){
let added = args.reduce((total, currentValue) => +total + +currentValue);
return added;
};

function subtract(...args){
    let subtracted = args.reduce((total, currentValue) => +total - +currentValue);
    return subtracted;
}

function multiply(...args){
    let multiplied = args.reduce((total, currentValue) => +total * +currentValue);
    return multiplied;
}

function divide(...args){
        let divided = args.reduce((total, currentValue) => +total / +currentValue);
        return divided;
    }
    
    


function operate(op, x, y){
    if (op == '+'){
        return add(x,y);
    } else if (op == '-'){
        return subtract(x,y);
    } else if (op == '*'){
        return multiply(x,y);
    } else if (op == '/'){
        return divide(x,y);
    } else {
        console.log('Not familiar with operator');
    };

}

function clear(){
    displayVal = '';
    firstNum = '';
    currentNum = '';
    opChosen = '';
    display.textContent = displayVal;
}


// Num button click listeners / display change
const numButtons = document.querySelectorAll('.num-btn');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function() {
        console.log('You have clicked num button ' + this.innerHTML);
        displayVal += this.innerHTML;
        display.textContent = displayVal;
        currentNum += +this.innerHTML
        
    });
    
    
}

const opButtons = document.querySelectorAll('.op-btn');
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', function() {
        displayVal += this.innerHTML;
        display.textContent = displayVal;
        console.log('You have clicked Operator ' + this.innerHTML);
        if (firstNum !== '' && currentNum !== ''){
            firstNum = operate(opChosen, firstNum, currentNum);
            currentNum = '';
            opChosen = this.innerHTML;
           
        } else {
            firstNum = currentNum;
            currentNum = '';
            opChosen = this.innerHTML;
            console.log('Waiting for 2nd number to operate');
        }
        
        
        console.log('firstNum is now: ' + firstNum);
        console.log('currentNum is now: ' + currentNum);
       
        
    });
    
}

const equals = document.getElementById('equals');
equals.addEventListener('click', function() {
    console.log(this.innerHTML + ' has been clicked');
    if (firstNum !== '' && currentNum !== ''){
        let equalsTo = Math.round(operate(opChosen, firstNum, currentNum) * 100) / 100;
        clear();
        if(equalsTo == Infinity){
            display.textContent = 'Cant divide by zero'
        } else {
            currentNum = equalsTo;
            displayVal = equalsTo;
            display.textContent = displayVal;
        }
        
    } else {
        display.textContent = 'Nothing to Calculate'
    }
    
    
    
})

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    console.log(this.innerHTML + ' has been clicked');
    clear();
})