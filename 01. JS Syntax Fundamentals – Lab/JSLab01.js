//1

function solve(num) {
    let result = num * 2;

    console.log(result);
}

solve(2);

//2

function grade(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

grade('John', 15, 5.546786);

//3

function check(grade) {
    if (grade >= 5.5) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

check(5.5);

//4

function month(month) {
    switch (month) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
        default:
            console.log('Error!');
            break;
    }
}

month(12);
month(13);

//5

function math(num1, num2, operation) {
    let result = eval(`${num1} ${operation} ${num2}`);

    console.log(result);
}

math(5, 6, '+');

//6

function max(num1, num2, num3) {
    let result = Math.max(num1, num2, num3);

    console.log(`The largest number is ${result}.`);
}

max(5, -3, 16);

//7

function price(day, age) {
    let price;

    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            } else if (age > 64 && age <= 122) {
                price = 12;
            } else {
                price = 'Error!';
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            } else if (age > 64 && age <= 122) {
                price = 15;
            } else {
                price = 'Error!';
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            } else {
                price = 'Error!';
            }

            break;
        default:
            break;
    }

    console.log(price == 'Error!' ? 'Error!' : price + '$');
}

price('Holiday', -15);

//8

function area(arg) {
    if (typeof arg == 'number') {
        let area = Math.PI * arg ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(
            `We can not calculate the circle area, because we receive a ${typeof arg}.`
        );
    }
}

area(5);

//9

function loop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

loop();

//10

function loopReverse(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

loopReverse(6, 2);
