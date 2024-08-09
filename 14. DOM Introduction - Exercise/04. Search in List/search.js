function search() {
    function clearStyles() {
        [...towns].forEach((t) => {
            t.style.fontWeight = '';
            t.style.textDecoration = '';
        });
    }

    const towns = document.querySelectorAll('ul#towns li');

    clearStyles();

    const searchTerm = document.getElementById('searchText').value;
    const resultEl = document.getElementById('result');
    let count = 0;

    [...towns].forEach((t) => {
        if (t.textContent.includes(searchTerm)) {
            t.style.fontWeight = 'bold';
            t.style.textDecoration = 'underline';
            count++;
        }
    });

    resultEl.textContent = `${count} matches found`;
}
