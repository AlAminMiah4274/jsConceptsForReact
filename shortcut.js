// truthy: 'almas', 5, {}, [], true etc.
// falsy: 0, '', false, null, undefined.

let myVar = 105;
// you check positive or truthy anything.
if (myVar) {
    const trueValue = myVar * 100;
    // console.log(trueValue);
}
else {
    const falseValue = 0;
    // console.log(falseValue);
}

let myMoney = 0;
// you check negative or falsy anything
if (!myMoney) {
    // console.log('value is false');
}
else {
    // console.log('value is true');
}

const money = 150;
let food;
if (money > 100) {
    food = 'Biriyani';
    // console.log(food);
}
else {
    food = 'Chaa & Biscuit';
    // console.log(food);
}

// ternarry operator
let food1 = money > 100 ? 'Biriyani' : 'Chaa & Biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'Coke' : 'Biriyani';
// console.log(drink);

// number to string conversion:
const num1 = 56;
const numStr = num1 + '';
// console.log(numStr);

// String to number: 
const input = '420';
const inputNum = +input;
// console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('Display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed.
isActive && showUser();
// use || if the left side is false then right side will be executed.
isActive || hideUser();

// toggle boolean
isActive = !isActive;