//1

class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        let output = '';

        this.storage.forEach((product) => {
            output += JSON.stringify(product) + '\n';
        });

        return output.trimEnd();
    }
}

let productOne = { name: 'Cucamber', price: 1.5, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.9, quantity: 25 };
let productThree = { name: 'Bread', price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

//2

function catalogue(input) {
    let result = {};

    input.forEach((x) => {
        let [product, price] = x.split(' : ');
        let letter = product.substring(0, 1);

        if (!result.hasOwnProperty(letter)) {
            result[letter] = [];
        }

        result[letter].push({ product, price });
    });

    for (const letter of Object.keys(result).sort((a, b) =>
        a.localeCompare(b)
    )) {
        console.log(letter);
        for (const p of result[letter].sort((a, b) =>
            a.product.localeCompare(b.product)
        )) {
            console.log(`  ${p.product}: ${p.price}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);

//3

class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return 800 - this.info.age * 2 + this.quality * 0.5;
    }
}

let info = { producer: 'Dell', age: 2, brand: 'XPS' };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

//4

function flightSchedule(input) {
    let flights = input[0].reduce((acc, f) => {
        let numberMatch = f.match(/[A-Z]+\d+/);
        let number = numberMatch ? numberMatch[0] : '';

        let destination = f.replace(number, '').trim();

        acc[destination] = number;

        return acc;
    }, {});

    input[1].forEach((x) => {
        let [number, status] = x.split(' ');

        Object.keys(flights).forEach((f) => {
            if (flights[f] === number) {
                flights[f] = status;
            }
        });
    });

    Object.keys(flights).forEach((f) => {
        if (flights[f] !== 'Cancelled') {
            flights[f] = 'Ready to fly';
        }
    });

    let flightsToCheck = input[2][0];

    Object.keys(flights).forEach((f) => {
        if (flights[f] === flightsToCheck) {
            console.log(`{ Destination: '${f}', Status: '${flights[f]}' }`);
        }
    });
}

flightSchedule([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania',
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled',
    ],
    ['Ready to fly'],
]);

//5

function schoolRegister(input) {
    let register = {};

    for (const student of input) {
        const nameMatch = student.match(/Student name: ([^,]+)/);
        const name = nameMatch ? nameMatch[1].trim() : null;

        const gradeMatch = student.match(/Grade: (\d+)/);
        const grade = gradeMatch ? Number(gradeMatch[1].trim()) : null;

        const avgScoreMatch = student.match(
            /Graduated with an average score: ([\d.]+)/
        );
        const avgGrade = avgScoreMatch ? Number(avgScoreMatch[1].trim()) : null;

        if (avgGrade < 3) {
            continue;
        }

        if (!register.hasOwnProperty(grade)) {
            register[grade] = [];
        }

        register[grade].push({ name, avgGrade });
    }

    for (const grade of Object.keys(register).sort((a, b) => a - b)) {
        let gradeNextYear = Number(grade) + 1;
        console.log(`${gradeNextYear} Grade`);
        let names = [];
        let averageGrade = 0;

        for (const student of register[grade]) {
            names.push(student.name);
            averageGrade += Number(student.avgGrade);
        }

        console.log(`List of students: ${names.join(', ')}`);
        console.log(
            `Average annual score from last year: ${(
                averageGrade / names.length
            ).toFixed(2)}`
        );
        console.log();
    }
}

schoolRegister([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);

//6

function browserHistory(object, arr) {
    let browserName = object['Browser Name'];
    let openTabs = object['Open Tabs'];
    let recentlyClosed = object['Recently Closed'];
    let browserLogs = object['Browser Logs'];

    let browser = { browserName, openTabs, recentlyClosed, browserLogs };

    for (const log of arr) {
        if (log === 'Clear History and Cache') {
            browser.openTabs = [];
            browser.recentlyClosed = [];
            browser.browserLogs = [];
            continue;
        }

        if (log.startsWith('Open')) {
            let site = log.split('Open ').filter(Boolean)[0];
            browser.openTabs.push(site);
            browser.browserLogs.push(log);
        } else if (log.startsWith('Close')) {
            let site = log.split('Close ').filter(Boolean)[0];

            if (browser.openTabs.find((o) => o === site)) {
                browser.recentlyClosed.push(site);
                browser.browserLogs.push(log);

                let siteToRemove = browser.openTabs.find((o) => o === site);
                browser.openTabs = browser.openTabs.filter(
                    (ot) => ot !== siteToRemove
                );
            }
        }
    }

    console.log(browser.browserName);
    console.log(`Open Tabs: ${browser.openTabs.join(', ')}`);
    console.log(`Recently Closed: ${browser.recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browser.browserLogs.join(', ')}`);
}

browserHistory(
    {
        'Browser Name': 'Mozilla Firefox',
        'Open Tabs': ['YouTube'],
        'Recently Closed': ['Gmail', 'Dropbox'],
        'Browser Logs': [
            'Open Gmail',
            'Close Gmail',
            'Open Dropbox',
            'Open YouTube',
            'Close Dropbox',
        ],
    },
    ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);

//7

function sequences(input) {
    let result = {};

    for (const arr of input) {
        let parsedArr = JSON.parse(arr);
        let sortedArr = parsedArr.sort((a, b) => b - a);

        if (!result.hasOwnProperty(sortedArr.toString())) {
            result[sortedArr.toString()] = sortedArr;
        }
    }

    for (const arr of Object.values(result).sort(
        (a, b) => a.length - b.length
    )) {
        console.log(`[${arr.join(', ')}]`);
    }
}

sequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]',
]);

//8

function garage(input) {
    let garage = {};

    for (const token of input) {
        let [garageNumber, carInfo] = token.split(' - ');

        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [];
        }

        let carInfoArr = carInfo.split(', ');
        let arrToCreateCarFrom = [];

        for (const info of carInfoArr) {
            let [key, value] = info.split(': ');

            let arr = [];
            arr.push(key);
            arr.push(value);

            arrToCreateCarFrom.push(arr);
        }

        garage[garageNumber].push(Object.fromEntries(arrToCreateCarFrom));
    }

    for (const number of Object.keys(garage).sort((a, b) => a - b)) {
        console.log(`Garage № ${number}`);

        for (const car of garage[number]) {
            let entries = Object.entries(car);
            let output = [];

            for (const entry of entries) {
                let [key, value] = entry;
                output.push(`${key} - ${value}`);
            }
            console.log(`--- ${output.join(', ')}`);
        }
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);

//9

function armies(input) {
    let armies = input.reduce((acc, currInput) => {
        if (currInput.includes('arrives')) {
            let [leader] = currInput.split(' arrives').filter(Boolean);
            acc[leader] = {};
        } else if (currInput.includes('defeated')) {
            let [leader] = currInput.split(' defeated').filter(Boolean);

            if (acc.hasOwnProperty(leader)) {
                delete acc[leader];
            }
        } else if (currInput.includes(':')) {
            let [leader, armyInfo] = currInput.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');

            if (acc.hasOwnProperty(leader)) {
                acc[leader][armyName] = Number(armyCount);
            }
        } else if (currInput.includes('+')) {
            let [armyName, armyCount] = currInput.split(' + ');

            Object.keys(acc).forEach((leader) => {
                if (acc[leader].hasOwnProperty(armyName)) {
                    acc[leader][armyName] += Number(armyCount);
                }
            });
        }

        return acc;
    }, {});

    let sortedLeaders = Object.entries(armies).sort((a, b) => {
        let aTotal = Object.values(a[1]).reduce((sum, count) => sum + count, 0);
        let bTotal = Object.values(b[1]).reduce((sum, count) => sum + count, 0);
        return bTotal - aTotal;
    });

    sortedLeaders.forEach(([leader, armies]) => {
        let totalArmyCount = Object.values(armies).reduce(
            (sum, count) => sum + count,
            0
        );
        console.log(`${leader}: ${totalArmyCount}`);
        let sortedArmies = Object.entries(armies).sort((a, b) => b[1] - a[1]);
        sortedArmies.forEach(([armyName, armyCount]) => {
            console.log(`>>> ${armyName} - ${armyCount}`);
        });
    });
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205',
]);

//10

function comments(input) {
    let users = {};
    let articles = {};

    input.forEach((x) => {
        if (x.startsWith('user')) {
            let [_, name] = x.split(' ');
            users[name] = name;
        } else if (x.startsWith('article')) {
            let [_, name] = x.split(' ');
            articles[name] = [];
        } else {
            let [username, info] = x.split(' posts on ');
            let [articleName, commentInfo] = info.split(': ');
            let [commentTitle, commentContent] = commentInfo.split(', ');

            if (users[username] && articles[articleName]) {
                let comment = {
                    commentTitle,
                    commentContent,
                    username,
                };

                articles[articleName].push(comment);
            }
        }
    });

    let sortedArticles = Object.keys(articles).sort(
        (a, b) => articles[b].length - articles[a].length
    );

    for (const article of sortedArticles) {
        console.log(`Comments on ${article}`);

        for (const comment of articles[article].sort((a, b) =>
            a.username.localeCompare(b.username)
        )) {
            console.log(
                `--- From user ${comment.username}: ${comment.commentTitle} - ${comment.commentContent}`
            );
        }
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much',
]);

//11

function bookShelf(input) {
    let shelfIds = {};
    let shelves = {};

    input.forEach((x) => {
        if (x.includes('->')) {
            let [shelfId, shelfGenre] = x.split(' -> ');

            if (!Object.values(shelfIds).find((sId) => sId === shelfId)) {
                shelfIds[shelfGenre] = shelfId;
                shelves[shelfGenre] = [];
            }
        } else {
            let [bookTitle, otherInfo] = x.split(': ');
            let [bookAuthor, bookGenre] = otherInfo.split(', ');

            if (shelves[bookGenre]) {
                let bookToAdd = {
                    bookTitle,
                    bookAuthor,
                };

                shelves[bookGenre].push(bookToAdd);
            }
        }
    });

    let sortedShelves = Object.keys(shelves).sort(
        (a, b) => shelves[b].length - shelves[a].length
    );

    for (const shelfGenre of sortedShelves) {
        console.log(
            `${shelfIds[shelfGenre]} ${shelfGenre}: ${shelves[shelfGenre].length}`
        );

        for (const book of shelves[shelfGenre].sort((a, b) =>
            a.bookTitle.localeCompare(b.bookTitle)
        )) {
            console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
        }
    }
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history',
]);

//12

function softUniStudents(input) {
    let courseCapacities = {};
    let courses = {};

    input.forEach((x) => {
        if (x.includes(':')) {
            let [courseName, courseCapacity] = x.split(': ');

            if (courses.hasOwnProperty(courseName)) {
                courseCapacities[courseName] += Number(courseCapacity);
            } else {
                courseCapacities[courseName] = Number(courseCapacity);
                courses[courseName] = [];
            }
        } else {
            let firstSquareBracketIndex = x.indexOf('[');
            let secondSquareBracketIndex = x.indexOf(']');

            const username = x.substring(0, firstSquareBracketIndex);
            const creditsCount = Number(
                x.substring(
                    firstSquareBracketIndex + 1,
                    secondSquareBracketIndex
                )
            );

            let emailWordIndex = x.indexOf('email') + 'email'.length + 1;
            let joinWordIndex = x.indexOf('joins');

            const email = x.substring(emailWordIndex, joinWordIndex - 1);

            const courseName = x.substring(joinWordIndex + 'joins'.length + 1);

            if (courses[courseName] && courseCapacities[courseName] > 0) {
                courseCapacities[courseName] -= 1;

                let student = {
                    username,
                    email,
                    creditsCount,
                };

                courses[courseName].push(student);
            }
        }
    });

    let sortedCourses = Object.keys(courses).sort(
        (a, b) => courses[b].length - courses[a].length
    );

    for (const course of sortedCourses) {
        console.log(`${course}: ${courseCapacities[course]} places left`);

        for (const student of courses[course].sort(
            (a, b) => b.creditsCount - a.creditsCount
        )) {
            console.log(
                `--- ${student.creditsCount}: ${student.username}, ${student.email}`
            );
        }
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore',
]);
