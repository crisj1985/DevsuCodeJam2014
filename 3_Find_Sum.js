const _ = require("lodash");

function findSum(cadena) {
    resultado = 0;

    _.forEach(_.words(cadena), x => resultado += !_.isNaN(_.parseInt(x)) ? _.parseInt(x) : 0)

    return resultado;
};
console.log(findSum("Cuando tenía 18 años, estaba en 1er año y tenía 25! compañeros de clase"));