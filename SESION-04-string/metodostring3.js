//Metodos de cadenas de texto
// https://regexr.com
let texto_largo="Hola ya pero como estas bien ya claro anda vee a paseear ya como no listo ya queda ok dibujito"
//de esta manera veremos cuantas veces se repiten las palabras indicadas en nuestro string
console.log(texto_largo.match(/ya/g))
//esto nos dice si exite la palabra
console.log(texto_largo.includes("ya"))

//sabes si un texto empueza con una palagbra
console.log(texto_largo.startsWith("Hola ya"))

//saber si terminar con una palabra
console.log(texto_largo.endsWith("temina"))