//1

function printSmallestNumber(num1, num2, num3) {
    console.log(Math.min(num1, num2, num3));
}

printSmallestNumber(2, 5, 3);

//2

function addAndSubract(num1, num2, num3) {
    const sum = (a, b) => a + b;
    const subract = (a, b) => a - b;

    console.log(subract(sum(num1, num2), num3));
}

addAndSubract(23, 6, 10);

//3

function printCharactersInRange(char1 = '', char2 = '') {
    let output = [];

    for (
        let i = Math.min(char1.charCodeAt(0), char2.charCodeAt(0)) + 1;
        i < Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
        i++
    ) {
        output.push(String.fromCharCode(i));
    }

    console.log(output.join(' '));
}

printCharactersInRange('a', 'd');

//4

function findOddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    while (number > 0) {
        let digit = number % 10;

        digit % 2 === 0 ? (evenSum += digit) : (oddSum += digit);

        number = parseInt(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

findOddAndEvenSum(1000435);

//5

function areNumbersPalindrome(numbers = []) {
    const isPalindrome = (num = 0) => {
        let reversedNum = num.toString().split('').reverse().join('');

        return Number(reversedNum) === num;
    };

    numbers.forEach((number) => {
        isPalindrome(number) ? console.log('true') : console.log('false');
    });
}

areNumbersPalindrome([123, 323, 421, 121]);

//6

function passwordValidator(password) {
    const lengthValidator = (password) =>
        password.length >= 6 && password.length <= 10;
    const charactersValidator = (password) => {
        const pattern = new RegExp('^[A-Za-z0-9]+$', 'g');
        return pattern.test(password);
    };
    const digitCountValidator = (password) => {
        const pattern = new RegExp('[0-9]', 'g');
        return password.match(pattern)?.length >= 2;
    };

    let isValid = true;

    if (!lengthValidator(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (!charactersValidator(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (!digitCountValidator(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');

//7

function printNxNMatrix(number) {
    for (let i = 0; i < number; i++) {
        console.log(`${number} `.repeat(number));
    }
}

printNxNMatrix(3);

//8

function isNumberPerferct(number) {
    if (number < 0) {
        console.log("It's not so perfect.");
        return;
    }

    const half = number / 2;
    let sum = 0;

    for (let i = 1; i <= half; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (number === sum) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

isNumberPerferct(6);
isNumberPerferct(28);
isNumberPerferct(1236498);

//9

function printLoadingBar(number) {
    if (number === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    let percentSymbolCount = number / 10;

    console.log(
        `${number}% [${'%'.repeat(percentSymbolCount)}${'.'.repeat(
            10 - percentSymbolCount
        )}]`
    );
    console.log('Still loading...');
}

printLoadingBar(30);
printLoadingBar(50);
printLoadingBar(100);

//10

function factorialDivision(num1, num2) {
    const findFactorial = (number) => {
        if (number === 1) {
            return 1;
        }

        return number * findFactorial(number - 1);
    };

    let firstFactorial = findFactorial(num1);
    let secondFactorial = findFactorial(num2);

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
