function encodeAndDecodeMessages() {
    const inputTextareaEl = document.querySelector('div textarea');
    const outputTextareaEl = document.querySelector('div + div textarea');
    const buttonEls = document.querySelectorAll('button');

    [...buttonEls].forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'Encode and send it') {
                let text = inputTextareaEl.value;                    
                text = text.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) + 1)).join('');

                inputTextareaEl.value = '';
                outputTextareaEl.value = text;
            }
            else {
                let text = outputTextareaEl.value;
                text = text.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) - 1)).join('');

                outputTextareaEl.value = text;
            }
        });
    });
}