// fromas de importar / exportar modulos
//1 . common.js - require
//2. Import ES6 - import 

// const moduloMatematicas = require("./modulos/matematicas")
// const factorial = moduloMatematicas.factorial;
// const { factorial ,suma} = moduloMatematicas
//console.log(moduloMatematicas)

const { factorial, suma} = require("./modulos/matematicas")

const fact = factorial(5)
console.log(fact)

const sum = suma(12,90)
console.log(sum)

// console.log(module)