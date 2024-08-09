function solve() {
    const tableEl = document.querySelector('table');
    const [checkButton, clearButton] = document.querySelectorAll('button');
    const trEls = document.querySelectorAll('tbody tr');
    const output = document.querySelector('#check p');

    checkButton.addEventListener('click', () => {       
        let firstRow = [];
        let secondRow = [];
        let thirdRow = [];

        [...trEls].forEach((tr, i) => {
            [...tr.children].forEach(td => {
                if (i === 0) {
                    firstRow.push(td.children[0].value)
                }
                else if (i === 1) {
                    secondRow.push(td.children[0].value)
                }
                else if (i === 2) {
                    thirdRow.push(td.children[0].value)
                }
            });
        });

        let firstCol = [];
        let secondCol = [];
        let thirdCol = [];

        [...trEls].forEach(tr => {
            [...tr.children].forEach((td, i) => {
                if (i === 0) {
                    firstCol.push(td.children[0].value)
                }
                else if (i === 1) {
                    secondCol.push(td.children[0].value)
                }
                else if (i === 2) {
                    thirdCol.push(td.children[0].value)
                }
            });
        });

        let firstRowSet = new Set(firstRow);
        let secondRowSet = new Set(secondRow);
        let thirdRowSet = new Set(thirdRow);

        let firstColSet = new Set(firstCol);
        let secondColSet = new Set(secondCol);
        let thirdColSet = new Set(thirdCol);

        if (firstRowSet.size === firstRow.length && secondRowSet.size === secondRow.length
            && thirdRowSet.size === thirdRow.length && firstColSet.size === firstCol.length
            && secondColSet.size === secondCol.length && thirdColSet.size === thirdCol.length) {
            tableEl.style.border = '2px solid green';    
            output.style.color = 'green';
            output.textContent = 'You solve it! Congratulations!';
        }
        else {
            tableEl.style.border = '2px solid red';    
            output.style.color = 'red';
            output.textContent = 'NOP! You are not done yet...';
        }
    });

    clearButton.addEventListener('click', () => {
        tableEl.style.border = '';
        output.textContent = '';

        [...trEls].forEach(tr => {
            [...tr.children].forEach(td => {
                td.children[0].value = '';
            });
        });
    });
}