function calc(num1, operator, num2) {
    let result = eval(`${num1} ${operator} ${num2}`);

    console.log(result.toFixed(2));
}

calc(5, '+', 10);
