function colorize() {
    let trElement = document.querySelectorAll('table tr:nth-child(even)');

    for (const tr of trElement) {
        tr.style.backgroundColor = 'teal';
    }
}
