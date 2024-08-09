function validate() {
    const inputEl = document.querySelector('input');

    inputEl.addEventListener('change', (e) => {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if (!pattern.test(e.currentTarget.value)) {
            e.currentTarget.classList.add('error');
        }
        else {
            e.currentTarget.classList.remove('error');
        }
    });
}