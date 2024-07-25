//1

function carWash(operations = []) {
    let result = 0;

    for (const operation of operations) {
        if (operation === 'soap') {
            result += 10;
        } else if (operation === 'water') {
            result += 0.2 * result;
        } else if (operation === 'vacuum cleaner') {
            result += 0.25 * result;
        } else if (operation === 'mud') {
            result -= 0.1 * result;
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

//2

function modifyNumber(number) {
    let numberCopy = number;
    let sum = 0;

    while (true) {
        let digit = numberCopy % 10;
        numberCopy = parseInt(numberCopy / 10);

        sum += digit;

        if (sum / number.toString().length > 5) {
            console.log(number);
            return;
        } else if (numberCopy <= 0) {
            number = Number(number.toString() + '9');
            numberCopy = number;
            sum = 0;
        }
    }
}

modifyNumber(101);
modifyNumber(5835);

//3

function pointValidation(points = []) {
    let [x1, y1, x2, y2] = points;

    let firstToZero = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let secondToZero = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
    let firstToSecond = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    Number.isInteger(firstToZero)
        ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
        : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    Number.isInteger(secondToZero)
        ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
        : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    Number.isInteger(firstToSecond)
        ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

pointValidation([3, 0, 0, 4]);
pointValidation([2, 1, 1, 1]);

//5

function printDNA(lenght) {
    let letters = 'ATCGTTAGGG'.split('');

    while (lenght > 0) {
        console.log(`**${letters.splice(0, 1)}${letters.splice(0, 1)}**`);
        lenght--;

        if (lenght === 0) {
            break;
        }

        if (letters.length === 0) {
            letters = 'ATCGTTAGGG'.split('');
        }

        console.log(`*${letters.splice(0, 1)}--${letters.splice(0, 1)}*`);
        lenght--;

        if (lenght === 0) {
            break;
        }

        if (letters.length === 0) {
            letters = 'ATCGTTAGGG'.split('');
        }

        console.log(`${letters.splice(0, 1)}----${letters.splice(0, 1)}`);
        lenght--;

        if (lenght === 0) {
            break;
        }

        if (letters.length === 0) {
            letters = 'ATCGTTAGGG'.split('');
        }

        console.log(`*${letters.splice(0, 1)}--${letters.splice(0, 1)}*`);
        lenght--;

        if (lenght === 0) {
            break;
        }

        if (letters.length === 0) {
            letters = 'ATCGTTAGGG'.split('');
        }
    }
}

printDNA(10);

//4

function processCrystals(input) {
    const targetThickness = input[0];
    const crystals = input.slice(1);

    crystals.forEach(crystal => {
        console.log(`Processing chunk ${crystal} microns`);

        crystal = performOperation(crystal, 'Cut', targetThickness, (x) => x / 4);
        crystal = performOperation(crystal, 'Lap', targetThickness, (x) => x * 0.8);
        crystal = performOperation(crystal, 'Grind', targetThickness, (x) => x - 20);
        crystal = performOperation(crystal, 'Etch', targetThickness, (x) => x - 2);

        if (crystal + 1 === targetThickness) {
            console.log('X-ray x1');
            crystal += 1;
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    });

    function performOperation(crystal, operationName, target, operationFn) {
        let count = 0;
        let newCrystal = operationFn(crystal);
        while (newCrystal >= target || Math.abs(newCrystal - target) < 1) {
            crystal = newCrystal;
            count++;
            newCrystal = operationFn(crystal);
        }
        if (count > 0) {
            console.log(`${operationName} x${count}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }
        return crystal;
    }
}
processCrystals([1375, 50000]);
