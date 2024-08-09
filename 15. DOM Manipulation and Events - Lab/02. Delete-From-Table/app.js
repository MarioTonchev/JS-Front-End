function deleteByEmail() {
    debugger;
    const tdEls = document.querySelectorAll('tbody tr td:last-child');
    const inputEmail = document.querySelector('input[name=email]').value;
    const resultEl = document.getElementById('result');
    let isDeleted = false;

    [...tdEls].forEach((td) => {
        if (td.textContent === inputEmail) {
            td.parentElement.remove();
            isDeleted = true;
        }
    });

    if (isDeleted) {
        resultEl.textContent = 'Deleted.';
    } else {
        resultEl.textContent = 'Not found.';
    }
}
