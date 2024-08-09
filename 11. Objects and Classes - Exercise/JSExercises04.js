//1

function employees(names) {
    names
        .map((name) => {
            return { name, number: name.length };
        })
        .forEach((employee) => {
            console.log(
                `Name: ${employee.name} -- Personal Number: ${employee.number}`
            );
        });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);

//2

function towns(input) {
    let towns = [];

    input.forEach((x) => {
        let [town, latitude, longitude] = x.split(' | ');

        towns.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        });
    });

    towns.forEach((t) => {
        console.log(t);
    });
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);

//3

function storeProvision(stock, orderdStock) {
    let result = {};

    stock.forEach((_, i) => {
        if (i % 2 === 0) {
            if (!result.hasOwnProperty(stock[i])) {
                result[stock[i]] = 0;
            }
            result[stock[i]] += Number(stock[i + 1]);
        }
    });

    orderdStock.forEach((_, i) => {
        if (i % 2 === 0) {
            if (!result.hasOwnProperty(orderdStock[i])) {
                result[orderdStock[i]] = 0;
            }
            result[orderdStock[i]] += Number(orderdStock[i + 1]);
        }
    });

    Object.keys(result).forEach((r) => {
        console.log(`${r} -> ${result[r]}`);
    });
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30',
    ]
);

//4

function movies(input) {
    let result = [];
    input.forEach((m) => {
        if (m.startsWith('addMovie')) {
            [, movie] = m.split('addMovie ');

            result.push({ name: movie });
        } else if (m.includes('directedBy')) {
            [movie, director] = m.split(' directedBy ');

            let movieToEdit = result.find((m) => m.name === movie);
            if (movieToEdit) {
                movieToEdit.director = director;
            }
        } else if (m.includes('onDate')) {
            [movie, date] = m.split(' onDate ');

            let movieToEdit = result.find((m) => m.name === movie);
            if (movieToEdit) {
                movieToEdit.date = date;
            }
        }
    });

    for (const m of result) {
        if (m.name && m.date && m.director) {
            console.log(JSON.stringify(m));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);

//5

function inventory(input) {
    input
        .map((i) => {
            [heroName, level, items] = i.split(' / ');
            return { heroName, level, items };
        })
        .sort((a, b) => a.level - b.level)
        .forEach((h) => {
            console.log(`Hero: ${h.heroName}`);
            console.log(`level => ${h.level}`);
            console.log(`items => ${h.items}`);
        });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);

//6

function wordTracker(input) {
    let specialWords = input[0].split(' ').reduce((acc, word) => {
        acc[word] = 0;

        return acc;
    }, {});

    for (let i = 1; i < input.length; i++) {
        if (specialWords.hasOwnProperty(input[i])) {
            specialWords[input[i]]++;
        }
    }

    Object.keys(specialWords)
        .sort((a, b) => specialWords[b] - specialWords[a])
        .forEach((x) => {
            console.log(`${x} - ${specialWords[x]}`);
        });
}

wordTracker([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurrences',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task',
]);

wordTracker([
    'is the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'the',
    'And',
    'finally',
    'the',
    'the',
    'sentence',
]);

//7

function oddOccurrences(input) {
    let words = input.split(' ').reduce((acc, currWord) => {
        let wordToLower = currWord.toLowerCase();
        if (!acc.hasOwnProperty(wordToLower)) {
            acc[wordToLower] = 0;
        }

        acc[wordToLower]++;

        return acc;
    }, {});

    let output = '';

    Object.keys(words)
        .sort((a, b) => words[b] - words[a])
        .forEach((w) => {
            if (words[w] % 2 !== 0) {
                output += `${w} `;
            }
        });

    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

//8

function piccolo(input) {
    let parkingLot = {};

    for (const i of input) {
        let [direction, plate] = i.split(', ');

        if (direction === 'IN') {
            if (!parkingLot.hasOwnProperty(plate)) {
                parkingLot[plate] = true;
            }

            parkingLot[plate] = true;
        } else {
            parkingLot[plate] = false;
        }
    }

    if (!Object.values(parkingLot).find((x) => x === true)) {
        console.log('Parking Lot is Empty');
    } else {
        Object.keys(parkingLot)
            .sort((a, b) => a.localeCompare(b))
            .forEach((p) => {
                if (parkingLot[p]) {
                    console.log(p);
                }
            });
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
]);

//9

function dictionary(input) {
    let dict = {};

    input.forEach((item) => {
        let parsedItem = JSON.parse(item);
        Object.assign(dict, parsedItem);
    });

    Object.keys(dict)
        .sort((a, b) => a.localeCompare(b))
        .forEach((term) => {
            console.log(`Term: ${term} => Definition: ${dict[term]}`);
        });
}

dictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);

//10

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
