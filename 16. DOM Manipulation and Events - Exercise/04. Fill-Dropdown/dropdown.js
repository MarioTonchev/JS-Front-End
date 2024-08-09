function addItem() {
    const selectEl = document.getElementById('menu');
    const inputTextEl = document.getElementById('newItemText');
    const inputValueEl = document.getElementById('newItemValue');

    const optionEl = document.createElement('option');

    optionEl.textContent = inputTextEl.value;
    optionEl.setAttribute('value', inputValueEl.value);

    selectEl.appendChild(optionEl);

    inputTextEl.value = '';
    inputValueEl.value = '';
}