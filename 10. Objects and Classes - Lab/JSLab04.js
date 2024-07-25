//1

function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age,
    };

    return person;
}

console.log(personInfo('Peter', 'Pan', 20));

//2

function city(city) {
    let cityEntries = Object.entries(city);

    for (const city of cityEntries) {
        console.log(`${city[0]} -> ${city[1]}`);
    }
}

city({
    name: 'Plovdiv',
    area: 389,
    population: 1162358,
    country: 'Bulgaria',
    postCode: '4000',
});

//3

function convertToObject(json) {
    Object.keys(JSON.parse(json)).forEach((key) =>
        console.log(`${key}: ${JSON.parse(json)[key]}`)
    );
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

//4

function convertToJson(name, lastName, hairColor) {
    console.log(JSON.stringify({ name, lastName, hairColor }));
}

convertToJson('George', 'Jones', 'Brown');

//5

function phoneBook(info) {
    let phoneBook = {};

    for (const person of info) {
        let entry = person.split(' ');

        phoneBook[entry[0]] = entry[1];
    }

    Object.keys(phoneBook).forEach((key) =>
        console.log(key + ' -> ' + phoneBook[key])
    );
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344',
]);

//6

function meetings(shchedules) {
    let appointments = {};

    for (const shchedule of shchedules) {
        let entry = shchedule.split(' ');

        if (Object.hasOwn(appointments, entry[0])) {
            console.log(`Conflict on ${entry[0]}!`);
        } else {
            appointments[entry[0]] = entry[1];
            console.log(`Scheduled for ${entry[0]}`);
        }
    }

    Object.keys(appointments).forEach((key) =>
        console.log(key + ' -> ' + appointments[key])
    );
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);

//7

function addressBook(peopleInfo) {
    let people = {};

    for (const person of peopleInfo) {
        let token = person.split(':');
        let firstName = token[0];
        let address = token[1];

        people[firstName] = address;
    }

    let sortedPeople = Object.fromEntries(
        Object.entries(people).sort((a, b) => a[0].localeCompare(b[0]))
    );

    Object.keys(sortedPeople).forEach((key) =>
        console.log(key + ' -> ' + people[key])
    );
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd',
]);

//8

function cats(catsInfo) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (const catInfo of catsInfo) {
        let token = catInfo.split(' ');
        let name = token[0];
        let age = token[1];

        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);

//9

function songs(info) {
    class Song {
        constructor(typeList,  name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }        
    }

    let songs = [];

    for (let i = 1; i <= info[0]; i++) {     
        let token = info[i].split('_');

        songs.push(new Song(token[0], token[1], token[2]));
    }
    
    if (info[info.length - 1] === 'all') {
        songs.forEach(s => console.log(s.name));
    }
    else {
        songs.filter(s => s.typeList === info[info.length - 1]).forEach(s => console.log(s.name));
    }
}

songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite',
]);
