function solve(arr) {
    let num = 1;
    let result = [];

    for (const command of arr) {
        command == 'add' ? result.push(num) : result.pop();
        num++;
    }

    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty')
}
