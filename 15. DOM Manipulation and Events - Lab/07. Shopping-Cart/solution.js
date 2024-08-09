function solve() {
   const textareaEl = document.querySelector('textarea');
   const addButtonsEl = document.querySelectorAll('button.add-product');
   const checkoutButtonEl = document.querySelector('button.checkout');

   let cart = [];

   [...addButtonsEl].forEach(b => {
      b.addEventListener('click', (e) => {
         const productDiv = e.currentTarget.parentElement.parentElement;
         const name = productDiv.querySelector('div.product-title').textContent;
         const price = Number(productDiv.querySelector('div.product-line-price').textContent);

         textareaEl.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`; 
         cart.push({name, price});
      });
   });

   checkoutButtonEl.addEventListener('click', (e) => {
      let uniqueProducts = Array.from(new Set(cart.map(p => p.name)));
      let totalPrice = cart.reduce((total, product) => total + product.price, 0);

      textareaEl.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      const buttons = document.querySelectorAll('button');
      [...buttons].forEach(b => b.disabled = true);
   });
}