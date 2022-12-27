const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;
// console.log(x, y);

function boxify(n1, n2) {
    const sums = [n1, n2];
    return sums;
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));

const student = {
    name: 'Al Amin Miah',
    age: 22,
    subjects: ['Descrete Mathmatics', 'OOP']
};

const [firstSubject, secondSubjects] = student.subjects;
// console.log(firstSubject, secondSubjects);

// Object destructuring 
const { age, name } = { name: 'Alu', age: 14 };
const { id, salary } = { id: 1, name: 'alu', salary: 34000, age: 14 };
// console.log(salary);

const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'Mac',
    languages: ['C', 'JS', 'Java', 'Python'],
    specification: {
        heigth: '66 inch',
        weight: '75 kg',
        address: 'Kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }


}

const { ide, machine } = employee;
const { address, weight } = employee.specification;
const [expert] = employee.languages[0];
const { brand } = employee.specification.watch;
// console.log(brand);

// optional chaining: ?