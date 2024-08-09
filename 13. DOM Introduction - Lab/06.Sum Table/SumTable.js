function sumTable() {
    const tdElements = document.querySelectorAll('table tbody tr td + td:not(#sum)');
    const sumElement = document.getElementById('sum');

    let sum = 0;

    tdElements.forEach(td => sum += Number(td.textContent));

    sumElement.textContent = sum;
}