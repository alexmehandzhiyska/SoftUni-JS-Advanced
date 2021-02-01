function solve(arr) {
    let counter = 1;
    arr.sort((a, b) => a.localeCompare(b)).forEach(name => {
        console.log(`${counter}.${name}`);
        counter++;
    });
}
