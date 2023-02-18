//Operador-valueOf() Obtener valores numerico a partir de literales
let a=2;
let b=new Number(3);

console.log(a);
console.log(b);
console.log(a.valueOf()+b.valueOf());

console.log(b.valueOf())

let str= new String("Hola Soy un string");
console.log(str);
console.log(str.valueOf());

//NaN(Not a number)--infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador/divisor);
console.log(numerador/divisor_2);

//Como convertir los string a valores numerico con number , parse Int y parse Float

let numero = '5.89';
let num2=17.2;

console.log(typeof numero);
console.log(numero + num2);//error de concepto
console.log(Number(numero)+num2);

console.log(parseFloat(numero))

let num3=4;
console.log(parseInt(num3))
console.log(parseFloat(num3))

//Numeros hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex ,10))

// Obtener los valores maximo y minimo en Js
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
