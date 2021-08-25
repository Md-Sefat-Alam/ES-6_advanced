const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);

const lowestNumbers = numbers.filter(n => n > 30 && n < 45);
// console.log(lowestNumbers)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile', price: 15000, color: 'black' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]
const blackProducts = products.filter(p => p.color == 'black');
const largeProductPrice = products.filter(p => p.price > 40);
// console.log(largeProductPrice)
// console.log(blackProducts)

const whiteItem = products.find(p => p.color == "black");
console.log(whiteItem)

const find19 = numbers.find(n => n >= 19);
console.log(find19);