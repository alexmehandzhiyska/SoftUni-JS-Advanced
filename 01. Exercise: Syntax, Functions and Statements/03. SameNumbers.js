function solve(num) {
    const string = num.toString();
    const sum = string.split('').map(Number).reduce((a, b) => a + b, 0);

    for (const digit of string) {
        if (digit != string[0]) {
            return 'false' + '\n' + sum;
        }
    }

    return 'true' + '\n' + sum;
}
