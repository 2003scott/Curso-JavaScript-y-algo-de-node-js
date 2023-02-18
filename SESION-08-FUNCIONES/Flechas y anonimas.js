//Fuinciones tipo fleca  - funcions anonimas
const array = [1,5,6,2,7,12,8,92]

const array2 = array.map((valor) => valor * 2)

console.log(array2)

//const doubleDelValor = valor => {
 //   return valor*2
//}
const dobleDelValor = valor => valor*2

console.log(double(6))
console.log(dobleDelValor(6))

//accedemos a la funcion y ala lista
const array3 = array.map(dobleDelValor)
console.log(array3)

function double(valor) {
    return  valor * 2
}
