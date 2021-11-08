// Task 01

//const task01 = document.getElementById('task-1');
const task01 = document.querySelector('#task-1');

task01.style.backgroundColor = 'black';
task01.style.color = 'white';

// Task 02

// const pageTitle = document.head.children[3];
// const pageTitle = document.querySelector('title');
const pageTitle = document.head.querySelector('title');
//console.dir(pageTitle)

pageTitle.innerText = 'Assignment - Solved!';

// Task 03

const h1 = document.querySelector('h1');
//const h1 = document.getElementsByTagName('h1')[0];

h1.textContent = 'Assignment - Solved!';