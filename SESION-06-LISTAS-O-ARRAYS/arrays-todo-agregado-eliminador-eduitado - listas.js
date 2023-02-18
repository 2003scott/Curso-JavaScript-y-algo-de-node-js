// Como trabajar con listas (Arrays,Arreglos,vectores..)
let varl={id:false}
let arrays =[1,"hola",false,{id:5},null,undefined,varl]
//acceder a los valores de un array a trabes de su posicion
console.log(arrays[0])
console.log(arrays[1])
console.log(arrays[2])
console.log(arrays[3])


//Metodos para introducir nuevos valores en nuestro arrays
// .push() .unshift() => mutan el valor de nuestro array
//valores al final -->push
arrays.push("final",45,100,true)
console.log(arrays)

//valores al principio -> unshift
arrays.unshift("inicio",87,99)
console.log(arrays)


// Metdos para eliminar valores en nuestro arrays 
//.pop() .shift() = mutan el valor del array

const array2 =[1,2,"hola",false]

//valores al final -->pop()
array2.pop()
console.log(array2)
array2.pop()
console.log(array2)

//valores al inicio ->shift
array2.shift()
console.log(array2)

// Metodo para elminar , modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [1,2,3,4,5,6]

//Eliminar valores .splice(indice, numerovoloraborrar)
array3.splice(2,1);
console.log(array3)

//Añnadir valores .splice(indice,0,valores a añadir)
array3.splice(2,0,"Hola",3)
console.log(array3
)
//Modificar valores
array3.splice(2,1,33)
console.log(array3)
