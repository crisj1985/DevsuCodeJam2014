const _ = require("lodash");

function encripta(cadena) {
    let resultado = "";
    let i = 1;
    let abc = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    let ABC = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ"
    abc = _.pull(_.toArray(abc), ",")
    arregloCadena = _.toArray(cadena);
    let caracter = "";
    _.forEach(arregloCadena, x => {
        banderaPar = i % 2;
        if (_.indexOf(abc, x) == -1)
            caracter = _.indexOf(ABC, x) != -1 ? (banderaPar == 0 ? ABC[_.indexOf(ABC, x) - 1] : ABC[_.indexOf(ABC, x) + 1]) : x;
        else
            caracter = banderaPar == 0 ? abc[_.indexOf(abc, x) - 1] : abc[_.indexOf(abc, x) + 1];

        if (_.isUndefined(caracter))
            switch (x) {
                case " ":
                    caracter = " "
                    break;
                case "a":
                    caracter = "z"
                    break;
                case "z":
                    caracter = "a"
                    break;
                case "A":
                    caracter = "Z"
                    break;
                case "Z":
                    caracter = "A"
                    break;
                default:
                    caracter = ""
                    break;
            }

        resultado += caracter
        i++;
    })

    return resultado;
};
console.log(encripta("gfhfghgfhfhfAdfgdDFSDF%^%^%KLDFJGLFDjj8989"));