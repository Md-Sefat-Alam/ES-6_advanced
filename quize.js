let a = 9, b = 7;
if (++a == 9 || --b == 6);
if (--a == 9 && --b == 6);
if (a == 9 || --b == 6) { a++; }
console.log(a, b);

const cube = x => x * x * x; console.log(cube(2))

const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y)

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);

const name = 'Adam Sandler';
const greeting = `Hello ${name} welcome to the club`;
console.log(greeting)