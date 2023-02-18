// Que son las funciones , como se declaran y como se ultilizan
const nom = "Scott"

//saludar("Scott")
saludar(nom)
function saludar(nombre){
    console.log("Hola"+" "+nombre)
}

let nombre_2="Diego"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Pepe"
    console.log("Adios"+" "+nombre)
}

//////////

let persona = {nombre : "Scott" , apellido:"Angeles"}

saludarPersona(persona)

console.log(persona)
function saludarPersona(objeto) {
    objeto.apellido = "Asto"
    console.log("Hola"+" "+objeto.nombre+" "+objeto.apellido)
}

saludar()

function imprimeNumero(numero = 7) {
    console.log(numero)
}
imprimeNumero()

// definir funciones con parametros inderminador

//factor de propagacion

function imprimir(...parametros) {
    console.log(parametros)
}
imprimir(1,2,9,3,"Hola",true,{id : 9})

function suma(...nums) {
    return nums.reduce((a,b)=> a+b)
}
// guardamos la variable de esta forma
const s = suma(1,2,3,4)
console.log(s)

//
let variable = "Hola"

function multiplicar(a=0,b=0) {
    console.log(variable)
    let variable_interna = "Adios" 
    console.log(variable_interna)
    return a*b
}

console.log(multiplicar(4,9))