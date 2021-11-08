const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const secondNumber = Math.random();

console.log('randomNumber', randomNumber)
console.log('secondNumber', secondNumber)

// Task 01
function showAlert(value) {
    if (value > 0.7) {
        alert("The number is greater than 0.7")
    }
}
showAlert(randomNumber);

// Task 02
const numbers = [1, 3, 6, 9, 10, 12, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
console.log('-------')
for (const number of numbers) {
    console.log(number)
}

// Task 03
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}

// Task 04
function showSecondAlert(number01, number02) {
    if ((number01 > 0.7 && number02 > 0.7) || number01 < 0.2 || number02 < 0.2) {
        alert("The number is greater than 0.7 or smaller than 0.2");
    }
}
showSecondAlert(randomNumber, secondNumber);
