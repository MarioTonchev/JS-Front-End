function solve() {
    const [inputArea, output] = document.querySelectorAll('textarea');    
    const tBodyEl = document.querySelector('table tbody');
    const generateButton = document.querySelector('button');
    const buyButton = document.querySelector('button:last-child');

    let furnitures = [];

    generateButton.addEventListener('click', () => {
      const input = JSON.parse(inputArea.value);

        input.forEach((f) => {
            const trEl = document.createElement('tr');

            const tdImg = document.createElement('td');
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', f.img);
            tdImg.append(imgEl);

            const tdName = document.createElement('td');
            const pNameEl = document.createElement('p');
            pNameEl.textContent = f.name;
            tdName.append(pNameEl);

            const tdPrice = document.createElement('td');
            const pPriceEl = document.createElement('p');
            pPriceEl.textContent = Number(f.price);
            tdPrice.append(pPriceEl);

            const tdDecFactor = document.createElement('td');
            const pDecFactorEl = document.createElement('p');
            pDecFactorEl.textContent = Number(f.decFactor);
            tdDecFactor.append(pDecFactorEl);

            const tdCheckbox = document.createElement('td');
            const inputCheckbox = document.createElement('input');
            inputCheckbox.setAttribute('type', 'checkbox');
            tdCheckbox.append(inputCheckbox);

            trEl.append(tdImg, tdName, tdPrice, tdDecFactor, tdCheckbox);
            tBodyEl.append(trEl);
        });
    });

    buyButton.addEventListener('click', () => {
        const trEls = document.querySelectorAll('tbody tr');
        let avgDecFactor = 0;

        [...trEls].forEach(tr => {
            const inputCheckboxEl = tr.querySelector('td input');

            if (inputCheckboxEl.checked) {
                let name = tr.querySelector('td:nth-child(2) p').textContent;
                let price = Number(tr.querySelector('td:nth-child(3) p').textContent);
                let decFactor = Number(tr.querySelector('td:nth-child(4) p').textContent);

                furnitures.push({
                  name,
                  price,
                  decFactor
                });

                avgDecFactor += decFactor;
            }
        });

        let names = furnitures.map(f => f.name);
        let totalPrice = furnitures.reduce((total, f) => total + f.price, 0)
        avgDecFactor /= furnitures.length;

        output.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
    });
}
