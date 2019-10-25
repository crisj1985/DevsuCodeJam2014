const _ = require("lodash");

function magicSquare(n) {
    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;

    for (i = 0; i < n.length; i++) {
        for (j = 0; j < n[i].length; j++) {
            sumDiagonal1 += i == j ? n[i][j] : 0;
        }
    }


};
console.log(magicSquare([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));