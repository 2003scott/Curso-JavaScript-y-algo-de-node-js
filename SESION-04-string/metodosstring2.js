let input="EscOrpIo"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())

//Formas de concatenar dos cadenas de caracteres
let str_1="Hola soy la primera cadena."
let str_2="y yo la segunda cadena"
console.log(str_1.concat(" ",str_2))
console.log(str_1+" "+str_2)
console.log(`${str_1} ${str_2}`)

//Elimnar espacios al inico y al final
let str_3="Hola mi chamo como estas con hambre xd.      "
console.log(str_3.length)
//trim()
console.log(str_3.trim())
console.log(str_3.trimStart())
console.log(str_3.charAt(5))

//obtener la posision de una palabra dentro de una cadena de caracter
let str_4="Hola soy scott y me gusta el frontend.Mi nombre es scott y mi otro nombre es diego"
console.log(str_4.indexOf("scott"))
console.log(str_4.charAt(9))
console.log(str_4.lastIndexOf("scott"))
