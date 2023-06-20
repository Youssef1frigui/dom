// Sample data
const items = [
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    { id: 3, name: 'Item 3', price: 20, quantity: 3 }
  ];
  
  // Function to update the cart UI
  function renderCart() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
  
    let totalPrice = 0;
  
    items.forEach(item => {
      const li = document.createElement('li');
      
      const itemName = document.createElement('span');
      itemName.classList.add('item-name');
      itemName.textContent = item.name;
      li.appendChild(itemName);
  
      const decrementBtn = document.createElement('button');
      decrementBtn.textContent = '-';
      decrementBtn.addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity--;
          renderCart();
        }
      });
      li.appendChild(decrementBtn);
  
      const quantity = document.createElement('span');
      quantity.classList.add('item-quantity');
      quantity.textContent = item.quantity;
      li.appendChild(quantity);
  
      const incrementBtn = document.createElement('button');
      incrementBtn.textContent = '+';
      incrementBtn.addEventListener('click', () => {
        item.quantity++;
        renderCart();
      });
      li.appendChild(incrementBtn);
  
      const likeBtn = document.createElement('button');
      likeBtn.innerHTML = '&#10084;';
      likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
      });
      li.appendChild(likeBtn);
  
      const itemPrice = document.createElement('span');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = '$' + (item.price * item.quantity);
      li.appendChild(itemPrice);
  
      itemList.appendChild(li);
  
      totalPrice += item.price * item.quantity;
    });
  
    const totalPriceElem = document.getElementById('total-price');
    totalPriceElem.textContent = 'Total: $' + totalPrice;
  }
  
  // Initialize the cart
  renderCart();
  