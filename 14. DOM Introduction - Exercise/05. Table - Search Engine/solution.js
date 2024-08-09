function solve() {
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      function clearStyles() {
         Array.from(trElements).forEach(tr => {
            tr.classList.remove('select');
         })
      }

      const searchTerm = document.getElementById('searchField').value;
      const trElements = document.querySelectorAll('table tbody tr');

      clearStyles();

      Array.from(trElements).forEach(tr => {
         if (tr.textContent.includes(searchTerm)) {
            tr.classList.add('select');
         }
      });
   }
}