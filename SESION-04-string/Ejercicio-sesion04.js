//ejercico-sesion04
let nombre = "Scott"
let apellido = "Angeles"

let estudiante = "Estudiante"+" "+nombre+" "+apellido;
console.log(estudiante)

//-------------------------------------------------------------------
let estudiantemayus = estudiante;
console.log(estudiantemayus.toUpperCase())

let estudianteminus = estudiante;
console.log(estudianteminus.toLowerCase())

//-------------------------------------------------------------------

let ecadenanuemero=estudiante;
console.log(ecadenanuemero.length)

//-------------------------------------------------------------------

let pletranom=nombre;
console.log(pletranom.charAt())

let pletraape=apellido;
console.log(pletraape.slice(-1))

//-------------------------------------------------------------------
let elitextoes=estudiante;
console.log(elitextoes.split(" ").join(""))

//-------------------------------------------------------------------
let boleano=estudiante;
console.log(boleano.includes("Scott"))