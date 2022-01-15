const storeButton = document.getElementById('store-btn');
const retrButton = document.getElementById('retrieve-btn');

storeButton.addEventListener('click', () => {
  const userId = 'u123';
  const user = {
    name: 'Max',
    age: 30
  }
  document.cookie = `uid=${userId}; expire=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrButton.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log('data', data[1].split('=')[1]);
});