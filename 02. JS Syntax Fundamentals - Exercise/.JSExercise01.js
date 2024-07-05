//1

function age(age) {
    if (age >= 0 && age <= 2) {
        console.log('baby');
    } else if (age >= 3 && age <= 13) {
        console.log('child');
    } else if (age >= 14 && age <= 19) {
        console.log('teenager');
    } else if (age >= 20 && age <= 65) {
        console.log('adult');
    } else if (age >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}

age(-1);

//2

function vacation(group, type, day) {
    let price;

    if (type == 'Students') {
        if (day == 'Friday') {
            price = group * 8.45;
        } else if (day == 'Saturday') {
            price = group * 9.8;
        } else if (day == 'Sunday') {
            price = group * 10.46;
        }

        if (group >= 30) {
            price -= price * 0.15;
        }
    } else if (type == 'Business') {
        let discount;

        if (day == 'Friday') {
            price = group * 10.9;
            discount = 10 * 10.9;
        } else if (day == 'Saturday') {
            price = group * 15.6;
            discount = 10 * 15.6;
        } else if (day == 'Sunday') {
            price = group * 16;
            discount = 10 * 16;
        }

        if (group >= 100) {
            price -= discount;
        }
    } else if (type == 'Regular') {
        if (day == 'Friday') {
            price = group * 15;
        } else if (day == 'Saturday') {
            price = group * 20;
        } else if (day == 'Sunday') {
            price = group * 22.5;
        }

        if (group >= 10 && group <= 20) {
            price -= price * 0.05;
        }
    }

    console.log('Total price: ' + price.toFixed(2));
}

vacation(100, 'Business', 'Sunday');

//3

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log('yes');
    } else if (year % 400 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

leapYear(4);

//4

function loopSum(n, m) {
    let sum = 0;
    let nums = '';
    for (let i = n; i <= m; i++) {
        sum += i;
        nums += `${i} `;
    }
    console.log(nums);
    console.log('Sum: ' + sum);
}

loopSum(5, 10);

//5

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

multiplicationTable(5);

//6

function sum(num) {
    let sum = 0;
    var digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    console.log(sum);
}

sum(543);

//7

function convert(ch1, ch2, ch3) {
    let string = ch1 + ch2 + ch3;

    console.log(string);
}

convert('a', 'b', 'c');

//8

function reverse(ch1, ch2, ch3) {
    let string = `${ch3} ${ch2} ${ch1}`;

    console.log(string);
}

reverse('A', 'B', 'C');

//9

function fruit(fruit, weight, pricePerKg) {
    weight /= 1000;

    let totalPrice = weight * pricePerKg;

    console.log(
        `I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(
            2
        )} kilograms ${fruit}.`
    );
}

fruit('orange', 2500, 1.8);

//10

function sameNumbers(num) {
    let isSame = true;
    let numString = num.toString().split('');
    let sum = 0;

    for (let i = 1; i < numString.length; i++) {
        if (Number(numString[i]) != Number(numString[i - 1])) {
            isSame = false;
        }
        sum += Number(numString[i]);
    }

    sum += Number(numString[0]);

    if (isSame) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}

sameNumbers(2222222);

//11

function roadRadar(speed, area) {
    if (area == 'city') {
        if (speed > 50) {
            let difference = speed - 50;
            if (difference <= 20) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 50 - speeding`
                );
            } else if (difference <= 40) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 50 - excessive speeding`
                );
            } else {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 50 - reckless driving`
                );
            }
        } else {
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }
    } else if (area == 'residential') {
        if (speed > 20) {
            let difference = speed - 20;
            if (difference <= 20) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 20 - speeding`
                );
            } else if (difference <= 40) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 20 - excessive speeding`
                );
            } else {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 20 - reckless driving`
                );
            }
        } else {
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }
    } else if (area == 'interstate') {
        if (speed > 90) {
            let difference = speed - 90;
            if (difference <= 20) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 90 - speeding`
                );
            } else if (difference <= 40) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 90 - excessive speeding`
                );
            } else {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 90 - reckless driving`
                );
            }
        } else {
            console.log(`Driving ${speed} km/h in a 90 zone`);
        }
    } else if (area == 'motorway') {
        if (speed > 130) {
            let difference = speed - 130;
            if (difference <= 20) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 130 - speeding`
                );
            } else if (difference <= 40) {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 130 - excessive speeding`
                );
            } else {
                console.log(
                    `The speed is ${difference} km/h faster than the allowed speed of 130 - reckless driving`
                );
            }
        } else {
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }
    }
}

roadRadar(120, 'interstate');

//12

function cooking(num, op1, op2, op3, op4, op5) {
    let arr = [op1, op2, op3, op4, op5];
    let number = Number(num);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'chop') {
            number /= 2;
            console.log(number);
        } else if (arr[i] == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (arr[i] == 'spice') {
            number++;
            console.log(number);
        } else if (arr[i] == 'bake') {
            number *= 3;
            console.log(number);
        } else if (arr[i] == 'fillet') {
            number -= 0.2 * number;
            console.log(number);
        }
    }
}

cooking(9, 'dice', 'spice', 'chop', 'bake', 'fillet');
