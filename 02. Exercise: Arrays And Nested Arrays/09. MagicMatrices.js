function solve(matrix) {
    const sum = matrix[0].reduce((a, x) => a + x);

    for (let i = 0; i < matrix.length; i++) {
        const sumRows = matrix[i].reduce((a, x) => a + x);
        const sumCols = matrix.map((el) => el[i]).reduce((a, x) => a + x);

        if (sumRows !== sum || sumCols !== sum || sumRows !== sumCols) {
            return false;
        }
    }

    return true;
}
