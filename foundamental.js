// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'Rainy';
season = 'Winter';

// 2. conditions
// 6 basic conditions: <, >, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'winter') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array declare
// index, length, push, pop

const numbers = [45, 78, 94, 59, 22];
numbers[1] = 58;
// console.log(numbers);

// 4. loop
// for:
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}

// while:
let i = 0;
while (numbers.length > i) {
    // console.log(numbers[i]);
    i++;
}

// 5. function
function multiply(a, b) {
    return a * b;
}

// console.log(multiply(5, 8));

// 6. object
// 3 ways to access property by name
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable