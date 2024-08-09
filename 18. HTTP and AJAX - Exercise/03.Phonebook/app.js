function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';

    const phonebook = document.getElementById('phonebook');

    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');

    const nameInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    function appendContacts(contacts) {
        phonebook.innerHTML = '';

        Object.keys(contacts).forEach((id) => {
            let { person, phone } = contacts[id];

            const li = document.createElement('li');
            li.textContent = `${person}: ${phone}`;

            const button = document.createElement('button');
            button.textContent = 'Delete';

            button.addEventListener('click', () => deleteButtonHandler(contacts[id]));

            li.appendChild(button);
            phonebook.appendChild(li);
        });
    }

    function deleteButtonHandler(contact) {
        fetch(`${BASE_URL}/${contact._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => loadPhonebookHandler())
        .catch(e => console.log(e));
            
    }

    function loadPhonebookHandler() {
        fetch(BASE_URL)
        .then((r) => r.json())
        .then((r) => appendContacts(r));
    }

    function createContactHandler() {
        let person = nameInput.value;
        let phone = phoneInput.value;

        nameInput.value = '';
        phoneInput.value = '';

        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                person,
                phone,
            }),
        }).then(() => loadPhonebookHandler());
    }

    loadButton.addEventListener('click', loadPhonebookHandler);
    createButton.addEventListener('click', createContactHandler);
}

attachEvents();
