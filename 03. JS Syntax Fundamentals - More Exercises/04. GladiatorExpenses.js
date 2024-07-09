function gladiator(losses, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreaks = 0;

    for (let i = 1; i <= losses; i++) {
        let isHelmetBroken = false;
        let isSwordBroken = false;

        if (i % 2 == 0) {
            expenses += helmetPrice;
            isHelmetBroken = true;
        }
        if (i % 3 == 0) {
            expenses += swordPrice;
            isSwordBroken = true;
        }
        if (isHelmetBroken && isSwordBroken) {
            expenses += shieldPrice;
            shieldBreaks++;

            if (shieldBreaks % 2 == 0 && shieldBreaks != 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(23, 12.5, 21.5, 40, 200);
