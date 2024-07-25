//1

function login(input) {
    const user = input[0];
    const correctPass = Array.from(user).reverse().join('');

    input.shift();

    input.forEach((pass, i) => {
        if (pass === correctPass) {
            console.log(`User ${user} logged in.`);
            return;
        }
        if (i === 3) {
            console.log(`User ${user} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
    });
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);

//2

function bitcoin(input) {
    let dayOfBuyingBitcoin = 0;
    let bitcoins = 0;
    let money = 0;

    for (let i = 0; i < input.length; i++) {
        let goldMinedGrams = input[i];

        if ((i + 1) % 3 === 0) {
            goldMinedGrams -= goldMinedGrams * 0.3;
        }

        money += goldMinedGrams * 67.51;

        while (money >= 11949.16) {
            bitcoins++;
            money -= 11949.16;

            if (dayOfBuyingBitcoin === 0) {
                dayOfBuyingBitcoin = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins > 0) {
        console.log(
            `Day of the first purchased bitcoin: ${dayOfBuyingBitcoin}`
        );
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoin([100, 200, 300]);

//3

function pyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let pyramidSteps = 1;

    while (true) {
        if (base - 2 < 1) {
            gold += base * base * increment;
            break;
        }

        stone += (base - 2) * (base - 2) * increment;

        if (pyramidSteps % 5 === 0) {
            lapis += (base * 4 - 4) * increment;
        } else {
            marble += (base * 4 - 4) * increment;
        }

        pyramidSteps++;
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(
        `Final pyramid height: ${Math.floor(pyramidSteps * increment)}`
    );
}

pyramidOfKingDjoser(23, 0.5);
