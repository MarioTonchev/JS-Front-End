function create(words) {
   const divEl = document.getElementById('content');

   words.forEach(word => {
      const divChildEl = document.createElement('div');
      const pEl = document.createElement('p');

      pEl.style.display = 'none';
      pEl.textContent = word

      divChildEl.appendChild(pEl);

      divChildEl.addEventListener('click', (event) => {
         event.target.children[0].style.display = 'block';
      });

      divEl.appendChild(divChildEl);
   });
}