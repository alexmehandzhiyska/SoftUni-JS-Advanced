function solve(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
    }

    for (let j = 0; j < matrix.length; j++) {
        sumSecondDiagonal += matrix[j][matrix.length - 1 - j];
    }

    if (sumFirstDiagonal == sumSecondDiagonal) {
        for (let k = 0; k < matrix.length; k++) {
            for (let l = 0; l < matrix.length; l++) {
                if (k !== l && k !== matrix.length - 1 - l) {
                    matrix[k][l] = sumFirstDiagonal;
                }
            }
        }
    }


    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }

}
