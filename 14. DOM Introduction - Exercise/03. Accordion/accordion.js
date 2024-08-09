function toggle() {
    const buttonEl = document.querySelector('div div span.button');
    const extraDivEl = document.getElementById('extra');

    if (extraDivEl.style.display === 'none') {
        buttonEl.textContent = 'Less';
        extraDivEl.style.display = 'block';
    }
    else {
        buttonEl.textContent = 'More';
        extraDivEl.style.display = 'none';
    }
}