function solve(arr, rotations) {
    rotations = Number(rotations);

    for (let rotation = 1; rotation <= rotations % arr.length; rotation++) {
        let el = arr.pop();
        arr.unshift(el);
    }

    console.log(arr.join(' '));
}
