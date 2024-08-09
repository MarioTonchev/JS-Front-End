function solve() {
    document.querySelector('div button').addEventListener('click', onClick);

    const selectMenuToEl = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');

    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectMenuToEl.appendChild(binaryOption);
    selectMenuToEl.appendChild(hexadecimalOption);

    function onClick() {
        debugger;
        let number = Number(document.getElementById('input').value);
        let output = document.getElementById('result');        
        let optionChosen = selectMenuToEl.value;

        if (optionChosen === 'binary') {
            output.value = number.toString(2);
        }
        else if (optionChosen === 'hexadecimal') {
            output.value = number.toString(16).toUpperCase();
        }

    }
}