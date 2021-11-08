// const numbers = [1, 2, 3];

// console.log(numbers);

// const moreNumbers = Array(1, 2);
// console.log(moreNumbers);

// const nameData = ['Luca', 'Carrozzo', 'Miriam', 'ttt', 3, 5, 6, 9];

// const [name, surname, ...other] = nameData;

// console.log('other', other)

const person1 = { name: 'Max', surename: 'Rossi' };
const person2 = { name: 'Maria' };

const personData = new Map([[person1, [{ date:'yesterday', price: 10 }] ]]);
console.log(personData);
console.log(personData.get(person1));