// 1. JSON
const student = {
    name: 'Al Amin Miah',
    age: 22,
    subjects: ['Descrete Mathmatics', 'OOP']
};

const studentJson = JSON.stringify(student);
// console.log(student);
// console.log(studentJson);

const studentObj = JSON.parse(studentJson);
// console.log(studentJson);
// console.log(studentObj);

// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))


// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys);

// for 
const numbers = [15, 78, 5489, 15, 45];
numbers.forEach(n => n);
const add = numbers.map(n => n * 2);
// console.log(add);

// for of on array like object
// loop on an object for in

// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'samsung', color: 'black' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 10000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'Webcame', price: 700, brand: 'Lal' };
// copy products array and then add new product.
const newProducts = [...products, newProduct];
// create a new array without one specific item
const remaining = products.filter(product => product.name !== 'sunglass');
console.log(remaining);