function solve(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let targetRow = arr[2];
    let targetCol = arr[3];
    let result = [];

    for (let i = 0; i < rows; i++) {
        result.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            result[row][col] = Math.max(Math.abs(row - targetRow), Math.abs(col - targetCol)) + 1;
        }
    }

    console.log(result.map(row => row.join(" ")).join("\n"));
}
