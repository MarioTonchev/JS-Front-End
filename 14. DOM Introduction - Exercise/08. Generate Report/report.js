function generateReport() {
    const outputEl = document.getElementById('output');
    const inputEl = document.querySelectorAll('thead tr th');
    const trEl = document.querySelectorAll('tbody tr');

    let result = [];
    let checkedIndexes = {};

    debugger;
    Array.from(inputEl).forEach((x, i) => {
        if (x.children[0].checked) {
            checkedIndexes[i] = x.textContent.toLowerCase().trim();
        }
    });

    Array.from(trEl).forEach(tr => {
        let row = {};

        Array.from(tr.children).forEach((td, i) => {
            if (checkedIndexes[i]) {
                let tHeader = checkedIndexes[i];

                row[tHeader] = td.textContent;
            }
        });

        result.push(row);
    });

    outputEl.value = JSON.stringify(result, null, 2);
}
