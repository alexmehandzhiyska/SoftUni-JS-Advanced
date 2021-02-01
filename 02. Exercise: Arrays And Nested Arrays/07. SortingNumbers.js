function solve(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < arr.length / 2; i++) {
        arr[i] !== arr[arr.length - i - 1] ? result.push(arr[i]) : '';
        result.push(arr[arr.length - i - 1])
    }

    return result;
}
