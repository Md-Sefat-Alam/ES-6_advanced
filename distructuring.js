const company = {
    name: 'GP',
    ceo: {
        id: 1,
        nameCEO: 'Ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        frameWrod: 'react'
    }
};


// console.log(company.name)
// console.log(company.ceo.food)
// console.log(company.ceo.name)
// console.log(company.ceo.food)
// console.log(company.web.employee)

const { name } = company;
const { food, nameCEO } = company.ceo;
const { work, frameWrod, employee } = company.web;

console.log(name)
console.log(food)
console.log(nameCEO)
console.log(food)
console.log(employee)