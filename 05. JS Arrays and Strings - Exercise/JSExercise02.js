//1

function arrayRotation(array = [], count) {
    for (let i = 0; i < count; i++) {
        array.push(array.shift());
    }

    console.log(array.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);

//2

function printEveryNthElement(array = [], step) {
    let elToPrint = [];

    for (let i = 0; i < array.length; i += step) {
        elToPrint.push(array[i]);
    }

    return elToPrint;
}

printEveryNthElement(['5', '20', '31', '4', '20'], 2);

//3

function listOfNames(array = []) {
    array.sort((a, b) => a.localeCompare(b));
    let cnt = 1;
    for (const name of array) {
        console.log(`${cnt++}.${name}`);
    }
}

listOfNames(['John', 'Bob', 'Christina', 'Ema']);

//4

function sortingNumbers(numbers = []) {
    const arrLength = numbers.length;

    let biggestNum = Number.MIN_SAFE_INTEGER;
    let smallestNum = Number.MAX_SAFE_INTEGER;

    let result = [];

    while (result.length < arrLength) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > biggestNum) {
                biggestNum = numbers[i];
            }
            if (numbers[i] < smallestNum) {
                smallestNum = numbers[i];
            }
        }

        numbers.splice(numbers.indexOf(smallestNum), 1);
        numbers.splice(numbers.indexOf(biggestNum), 1);

        result.push(smallestNum);
        result.push(biggestNum);

        biggestNum = Number.MIN_SAFE_INTEGER;
        smallestNum = Number.MAX_SAFE_INTEGER;
    }

    if (arrLength % 2 !== 0) {
        result.pop();
    }

    return result;
}

console.log(sortingNumbers([1, 2, 3, 4, 5, 6, 7]));

//5

function revealWords(words, sentence = '') {
    const wordsArr = words.split(', ');

    wordsArr.forEach((word) => {
        sentence = sentence.replace('*'.repeat(word.length), word);
    });

    console.log(sentence);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);

//6

function modernTimes(sentence) {
    const pattern = /#[A-Za-z]+/g;

    let result = sentence.match(pattern);

    for (const word of result) {
        console.log(word.replace('#', ''));
    }
}

modernTimes(
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
);

//7

function stringSubstring(word, text) {
    let match = text
        .split(' ')
        .find((x) => x.toLowerCase() === word.toLowerCase());
    console.log(match ? word : `${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language');

//8

function pascalCaseSplitter(text) {
    const pattern = /[A-Z][a-z]*/g;

    let result = [];

    let matches = text.match(pattern);

    for (const match of matches) {
        result.push(match);
    }

    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
