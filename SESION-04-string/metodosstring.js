//Metodos mas ultilizado con cadenas de caracteres
//como obtener la longitud de un  string
let str="Hola como estas";
console.log(str.length)

//obtener partes de cadena de caracteres
//slice() substring() substr()
let slice_str= str.slice(5,10);
console.log(slice_str)

let substring_str=str.substring(1,10)
console.log(substring_str)

let substr_str=str.substr(5,10)
console.log(substr_str)

//Remplazar parte del contenido de un string

let cadena = "Hola soy Scott"
console.log (cadena)
//al utilizar string solo remplaza la prima instancio o dato encontrado de nuestro string
console.log(cadena.replace("Scott","Diego"))

let texto_largo="Hola ya pero como estas bien ya claro anda vee a paseear ya como no listo ya queda ok dibujito"
console.log(texto_largo.replace("ya", "ah"))

//al utilizar la expresion regular /g (global) remplaza todas la s instacias
console.log(texto_largo.replace(/ya/g ,"ah"))

