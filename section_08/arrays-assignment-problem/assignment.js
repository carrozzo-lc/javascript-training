// Task 1

const numbers = [2, 5, 1, 46, 8, 6, 11, 20];

// Filter for number grater than 5
const filteredArr = numbers.filter(number => number > 5);
console.log(filteredArr);

// Map every number to an object which holds the number on some property (e.g. "num")
const mapArr = numbers.map(number => ({ num: number }));
console.log(mapArr);

// Reduce the array to a single number (the multiplication of all numbers).
const reduceArr = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(reduceArr)


// Task 2

const findMax = (...arguments) => {
  //const max = arguments.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator = currentValue : accumulator = accumulator)
  let max = 0;
  arguments.forEach((argument) => {
    if (argument > max) {
      max = argument;
    }
  });

  return max;
}
console.log('task 2', findMax(...numbers));

// Task 3

const findMax02 = (...arguments) => {
  // const max = arguments.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator = currentValue : accumulator = accumulator);
  // const min = arguments.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator = currentValue : accumulator = accumulator)
  let max = arguments[0];
  let min = arguments[0];  
  arguments.forEach((argument) => {
    if (argument > max) {
      max = argument;
    }
    if (argument < min) {
      min = argument;
    }    
  });

  return [max, min];
}

const [max, min] = findMax02(...numbers);
console.log('task 3', max, min);

//Task 4

const set1 = new Set([...numbers]);

console.log(set1.has(55));
// expected output: true

console.log(set1);