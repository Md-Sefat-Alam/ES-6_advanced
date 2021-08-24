const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(f => f.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]

const productName = products.map(p => p.name);
// console.log(productName)
const produntPrice = products.map(p => p.price);
// console.log(produntPrice);

// products.map(x => console.log(x.color));    // just console.log all color names

//map er motoi kintu ekhane sudhu return jodi na lage tahole forEach() babohar korte hobe
// console.log(products.forEach(p => p.name))  //undefined because forEach don't return any value
products.forEach(p => console.log(p.name)) //water bottle, mobile phone, sticky note, water glass