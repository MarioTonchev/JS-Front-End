function focused() {
    const inputEls = document.querySelectorAll('input');
    
    [...inputEls].forEach(i => {
        i.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add('focused');
        });
        i.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove('focused');
        });
    });
}