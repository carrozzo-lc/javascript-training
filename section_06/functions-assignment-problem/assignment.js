// Task 1
const sayHello = name => console.log('Hi ' + name);

sayHello('Luca');

//Task 2

const sayHello1 = (greet, name) => {
  console.log(greet + name);
}

const sayHello2 = () => {
  const greet = 'Hi ';
  const name = 'Luca'
  console.log(greet + name);
}

const sayHello3 = name => console.log('Hi ' + name);

sayHello1('Hi ', 'Luca');
sayHello2();
sayHello3('Luca');

//Task 3
const sayHello4 = (name, greet = 'Ciao ') => {
  console.log(greet + name);
}

sayHello4('Luca', 'Hi ');
sayHello4('Luca');

//Task 4
const checkInput = (cb, ...strings) => {
  let validStrings = true;

  for (string of strings) {
    if(string === '') {
      validStrings = false;
      break;
    }
  }

  return validStrings === true ? cb(strings) : alert('No valid string!!');
}

checkInput((result) => {
  alert('All valid strings: ' + result);
}, 'Luca', 'Matteo', 'Marco', 'test', 'Maria', 'Test');