//1

function sumFirstAndLastElements(numbers) {
    console.log(numbers[0] + numbers[numbers.length - 1]);
}

sumFirstAndLastElements([20, 30, 40]);

//2

function reverseArr(count, numbers = []) {
    console.log(numbers.slice(0, count).reverse().join(' '));
}

reverseArr(3, [10, 20, 30, 40, 50]);

//3

function evenAndOddSum(numbers) {
    let difference = 0;

    numbers.forEach((element) => {
        element % 2 === 0 ? (difference += element) : (difference -= element);
    });

    console.log(difference);
}

evenAndOddSum([3, 5, 7, 9]);

//4

function substring(sentence, start, count) {
    console.log(sentence.substring(start, start + count));
}

substring('SkipWord', 4, 7);

//5

function censoredWords(text, word) {
    console.log(text.replaceAll(word, '*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');

//6

function countStringOccurences(text, word) {
    const pattern = new RegExp(`\\b${word}\\b`, 'g');

    let result = text.match(pattern) || [];

    console.log(result.length);
}

countStringOccurences('This is a word and it also is a sentence', 'is');
