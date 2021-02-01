function solve(arr) {
    let result = [arr.shift()];

    for (const el of arr) {
        el >= result[result.length - 1] ? result.push(el) : '';
    }

    return result;
}
