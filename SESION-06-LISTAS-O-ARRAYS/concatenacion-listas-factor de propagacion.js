//Como unir 2 listas .concat(lista2)

const lista1 = ["hola",2,false,null];
const lista2 = ["adios",8,true,undefined];

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2);
console.log(lista3)

//como unir dos listas con el factor de propagacion

console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4);

//Error !! mal entendido el concepto del factor de propagacion
const lista5 = [ lista1,lista2]
console.log(lista5)

