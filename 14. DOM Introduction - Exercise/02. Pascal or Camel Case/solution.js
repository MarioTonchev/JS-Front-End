function solve() {
    const namingConvetions = ['Pascal Case', 'Camel Case'];

    const textEl = document.getElementById('text');
    const namingConvention = document.getElementById('naming-convention').value;
    const spanResultEl = document.getElementById('result');

    let wordsInPascal = textEl.value.toLowerCase().split(' ').map(w => w[0].toUpperCase().concat(w.slice(1))).join('');

    if (!namingConvetions.find((nc) => nc === namingConvention)) {
        spanResultEl.textContent = 'Error!';
    }
    else if (namingConvention === namingConvetions[0]) {
      spanResultEl.textContent = wordsInPascal;
    }
    else if (namingConvention === namingConvetions[1]) {
      spanResultEl.textContent = wordsInPascal[0].toLowerCase() + wordsInPascal.slice(1);
    }
}
