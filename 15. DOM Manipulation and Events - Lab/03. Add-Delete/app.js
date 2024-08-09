function addItem() {
    const itemsEl = document.getElementById('items');
    const addedItemEl = document.getElementById('newItemText')

    const liToAdd = document.createElement('li');
    liToAdd.textContent = addedItemEl.value;

    const buttonEl = document.createElement('a');
    buttonEl.setAttribute('href', '#');
    buttonEl.textContent = '[Delete]';

    buttonEl.addEventListener('click', function (evt) {
        evt.currentTarget.parentElement.remove();
    })

    liToAdd.appendChild(buttonEl);
    itemsEl.append(liToAdd);

    addedItemEl.value = '';
}