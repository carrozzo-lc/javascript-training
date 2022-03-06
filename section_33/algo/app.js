const age = [30, 26, 54];

age.push(60); // => Constant Time Complexity: 0(1)

age.unshift(10); // => Linear Time Complexity: 0(n)

const myAge = age[1]; // => Constant Time Complexity: 0(1)

// -----

const namePopularity = [
  {userName: 'max', usages: 5},
  {userName: 'manu', usages: 6},
];

const manuUsages = namePopularity.find(pers => pers.userName === 'manu').usages;
// BEST CASE: Constant Time Complexity => 0(1)
// WORST CASE: Linear Time Complexity => 0(n)
// AVERAGE CASE: Linear Time Complexity => 0(n)

const nameMap = {
  'max': 5,
  'manu': 6
}

const manuUsages2 = nameMap['manu']; // => Constant Time Complexity: 0(1)

//const nameRealMap = new Map();