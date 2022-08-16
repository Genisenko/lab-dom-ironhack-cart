// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity  input').value;
  console.log(quantity);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;

  console.log(subtotal);
  return subtotal;
}

function calculateAll() {
 const product = document.querySelector('.product');
 updateSubtotal(product);
 const allProducts = document.getElementsByClassName('product');

 let totalPrice = 0;
 for( let i=0; i<allProducts.length; i++){
  totalPrice += updateSubtotal(allProducts[i]);
 }

 const finalPrice = document.querySelector('#total-value');
 finalPrice.querySelector('#total-value span').innerHTML = totalPrice;
 return finalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const children= target.parentNode.parentNode;
  const parent = children.parentNode;
  parent.removeChild (children);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.create-product');
  let inputName = newProduct.querySelector('input');
  let valueName = inputName.value;
  let priceInput = newProduct.querySelector("input[type='number']");
  let valuePrice = Number (priceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${valueName}</span>
    </td>
    <td class="price">$<span>${valuePrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;

  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newTableRow);
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteButton = document.getElementsByClassName('btn-remove');
  for( let i = 0; i> deleteButton.length; i++ ){
    deleteButton[i].addEventListener('click', removeProduct);
  };
  [...deleteButton].forEach(button => button.onclick = removeProduct)

  const createNewProductBtn = document.getElementById('create');
  if (createNewProductBtn) {
    createNewProductBtn.addEventListener('click', createProduct);
  }
});