const numbers = [45, 78, 51, 21, 56, 80];
const student = {
    name: 'Al Amin Miah',
    age: 22,
    subjects: ['Descrete Mathmatics', 'Basic Programming', 'Computer Fundamental']
};

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also like to read ${student.subjects[0]}`;
// console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
// console.log(getFiftyFive());

const addSixtyFive = a => a + 65;
// console.log(addSixtyFive(35));

const isEven = x => {
    if (x % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// const isEven = x => x % 2 === 0;
// console.log(isEven(9));

// 3. spread operator
const newNumbers = [...numbers];

const addNumbers = [...numbers, 55, 66, 21];
numbers.push(99, 88);

// console.log(numbers);
// console.log(newNumbers);
// console.log(addNumbers);