function getMin(numbers) { // [3, 1, 2]
  if (numbers.length === 0 ) { // 1 execution
    throw new Error('Should not be an empty array!');
  }
  let currentMinimum = numbers[0]; // 1 execution
  console.log('execution - INIT');

  for (let i = 1; i < numbers.length; i++) {  // 1 execution
    console.log('execution - FOR');
    if (numbers[i] < currentMinimum) {  // 2 executions
      currentMinimum = numbers[i]; // 0 - 2 executions
    }
  }
  console.log('execution - RETURN');
  return currentMinimum;  // 1 execution
}

// T = n ==> Linear Time Complexity => 0(n)

function getMin2(numbers) {
  if (numbers.length === 0 ) {
    throw new Error('Should not be an empty array!');
  }

  for(let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i]; // n times
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j]; // n times

      if (outerElement > innerElement) {
        // swap
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
}

// Time Complexity => n * n => 0(n^2)

const testNumbers = [3, 1, 2];

const min = getMin(testNumbers);

console.log(min);