 //console.log("hola mundo");

 'use strict';
 const _ = require('lodash');
 //  let numeros = [2, 3, 4, 5];
 //  _.forEach(numeros, x => console.log(x * x));
 // numeros.forEach(x => console.log(x * x))

 let word = null; //"   aaaab((((bdxy";
 //console.log(_.map(word, x => x));
 //console.log(_.countBy(word));
 function compresed(word) {
     if (_.isEmpty(word))
         return "";
     if (_.isNull(word))
         return null;
     var resultado = "";
     let resul = _.map(_.countBy(word), (value, key) => key + value);
     let resul2 = _.forEach(resul, x => resultado += x);
     return resultado;
 }
 console.log(compresed(null))