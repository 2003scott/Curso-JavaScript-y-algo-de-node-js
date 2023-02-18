//Ejercicio 3

const fechahoy = new Date()
console.log(fechahoy)

const cumpleaños = new Date("july 13 2003")
console.log(cumpleaños)

const tarde = fechahoy > cumpleaños
console.log(tarde)

const mes = cumpleaños.getMonth()+1
console.log(mes)

const año = cumpleaños.getFullYear()
console.log(año)