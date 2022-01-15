const storeButton = document.getElementById('store-btn');
const retrButton = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Music', 'Girls']
}

storeButton.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrButton.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  if (extractedId) {
    console.log('Got the id ' + extractedId)
    console.log(extractedUser)
  } else {
    console.log('error');
  }
});

