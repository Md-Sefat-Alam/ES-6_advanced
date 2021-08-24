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

const name = company.ceo?.another_name?.another_another_name
console.log(name);