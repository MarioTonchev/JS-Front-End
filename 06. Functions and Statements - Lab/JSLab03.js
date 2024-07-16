//1

function formatGrade(grade) {
    let result = '';

    if (grade < 3) {
        result = 'Fail';
    } else if (grade < 3.5) {
        result = 'Poor';
    } else if (grade < 4.5) {
        result = 'Good';
    } else if (grade < 5.5) {
        result = 'Very good';
    } else if (grade <= 6) {
        result = 'Excellent';
    }

    console.log(
        grade < 3 ? `${result} (2)` : `${result} (${grade.toFixed(2)})`
    );
}

//2

function pow(base, radix) {
    if (radix === 1) {
        return base;
    }

    return base * pow(base, radix - 1);
}

console.log(pow(3, 4));

//3

function repeatString(text, count) {
    if (count === 1) {
        return text;
    }

    return text + repeatString(text, count - 1);
}

console.log(repeatString('abc', 3));

//4

function ordersPrice(type, count) {
    const map = new Map();
    map.set('coffee', 1.5);
    map.set('water', 1);
    map.set('coke', 1.4);
    map.set('snacks', 2);

    return (map.get(type) * count).toFixed(2);
}

console.log(ordersPrice('water', 5));

//5

function simpleCalculator(num1, num2, operation) {
    const map = new Map();
    map.set('multiply', '*');
    map.set('divide', '/');
    map.set('add', '+');
    map.set('subtract', '-');

    return eval(`${num1} ${map.get(operation)} ${num2}`);
}

console.log(simpleCalculator(5, 5, 'multiply'));

//6

function signCheck(num1, num2, num3) {
    return num1 * num2 * num3 > 0 ? 'Positive' : 'Negative';
}

console.log(signCheck(5, 12, -15));
