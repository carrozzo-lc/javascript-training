// const h1 = document.getElementById('main-title');

// h1.textContent = 'A new title';
// h1.style.color = 'blue';
// h1.style.backgroundColor = 'green';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (changed!)'; 

// const listItemElements = document.querySelectorAll('li');

// for (const item of listItemElements) {
//   //console.log(item)
// }

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

//section.style.backgroundColor = 'green';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible'
  // } else {
  //   section.className = 'red-bg visible'
  // }
  section.classList.toggle('invisible')
})