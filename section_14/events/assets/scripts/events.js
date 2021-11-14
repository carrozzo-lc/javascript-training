const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  //event.target.disabled = true;
  console.log('event', event);
};

const anotherButtonClickHandler = () => {
  console.log('this was clicked!');
};

// button.onclick = buttonClickHandler;

//button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', buttonClickHandler);
})