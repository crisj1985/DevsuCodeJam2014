const _ = require("lodash");

function simpleSerie(n) {

    return n > 0 ? Math.pow(n, 2) + 1 : -1;
};
console.log(simpleSerie(9));