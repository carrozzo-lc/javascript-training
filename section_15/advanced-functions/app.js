// Pure functions
/////////////////////////////////////////////

function add(num1, num2) { // pure function
  return num1 + num2;
}

console.log(add(1, 5)); //6
console.log(add(12, 15)); //27

function addRandom(num1) { // impure function
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) { // impure function
  const sum = num1 + num2;
  previousResult = sum; //side effect
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking', 'NEW HOBBY'];

function printHobbies() { // impure function
  hobbies.push('NEW HOBBY'); // side effect
  console.log(hobbies);
}

printHobbies(hobbies);


// Factory functions
/////////////////////////////////////////////

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

//multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));


// Closures
/////////////////////////////////////////////

let userName = 'Max';

function greetUser() {
  //let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser();


// Recursion
/////////////////////////////////////////////

function powerOf(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2


// Recursion advanced
/////////////////////////////////////////////

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));





