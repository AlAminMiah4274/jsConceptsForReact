const products = [
    { name: 'laptop', price: 32000, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'samsung', color: 'black' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 10000, brand: 'canon', color: 'gray' }
];

const brand = products.map(product => product.brand);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.brand));

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('b'));
console.log(specificName);

const special = products.find(product => product.name.includes('n'));
// console.log(special);

// return array: map() & filter()  // doesn't return array: forEach() & find()

// let person = null;
// console.log(person ? person : "person is null");

const obj = { a: 1 };
// console.log(Object.keys(obj).length === 0);