function addItem() {
    const itemsEl = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');

    const liToAdd = document.createElement('li');
    liToAdd.textContent = inputEl.value;   

    itemsEl.append(liToAdd);

    inputEl.value = '';
}