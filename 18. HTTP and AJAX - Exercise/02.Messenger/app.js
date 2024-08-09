function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    const [inputAuthor, inputMessage] = document.querySelectorAll('input[type="text"]');
    const textareaEl = document.getElementById('messages');

    function displayMessages(messages) {
        textareaEl.value = messages.map(m => `${m.author}: ${m.content}`).join('\n');   
    }

    function submitCommentHandler() {
        debugger;
        let author = inputAuthor.value;
        let content = inputMessage.value;     

        inputAuthor.value = '';
        inputMessage.value = '';

        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                author,
                content
            })
        });
    }

    function refreshCommentsHandler() {
        fetch(BASE_URL)
        .then(r => r.json())
        .then(r => {    
            displayMessages(Object.values(r));
        });
    }

    submitButton.addEventListener('click', submitCommentHandler);
    refreshButton.addEventListener('click', refreshCommentsHandler);
}

attachEvents();