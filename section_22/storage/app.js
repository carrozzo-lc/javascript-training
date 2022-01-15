const storeButton = document.getElementById('store-btn');
const retrButton = document.getElementById('retrieve-btn');

let db;
const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
}

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  const objStore = db.createObjectStore('products', {keyPath: 'id'});

  objStore.transaction.oncomplete = function() {
    const productStore = db.transaction('products', 'readwrite').objectStore('products');

    productStore.add({
      id: "p1",
      title: 'A first product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  }
}

dbRequest.onerror = function() {
  console.log('ERROR!');
}

storeButton.addEventListener('click', () => {
  if (!db) {
    return;
  }
  const productStore = db.transaction('products', 'readwrite').objectStore('products');

  productStore.add({
    id: "p2",
    title: 'A second product',
    price: 30.99,
    tags: ['Expensive', 'Luxury']
  });
});

retrButton.addEventListener('click', () => {
  const productStore = db.transaction('products', 'readwrite').objectStore('products');
  const request = productStore.get('p2');
  request.onsuccess = function() {
    console.log(request.result);
  }
});