const _ = require('lodash');

function Encode(valor) {
    let palabra = _.lowerCase(valor);
    let invertido = "";
    _.forEachRight(_.toArray(palabra), x => invertido += x);
    resultado = _.join(_.map(_.words(invertido), x => _.capitalize(x)), " ")
    return resultado;
}


console.log(Encode("Hola mundo Amigo"));