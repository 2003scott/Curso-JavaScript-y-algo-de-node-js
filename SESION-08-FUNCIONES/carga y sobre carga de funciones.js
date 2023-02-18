//carga y sobre carga de funciones

function saludar() {
    hola()   
}
function hola() {
    console.log("Hola soy la  funcion hola()")
}

console.log(saludar())
saludar()
// 1.global()
// 2 .saludar() global()
// 3.hola() saludar() global()
// 4.saludar() global()
// 5.global()

//function recursiva() {
  //  recursiva()
//}
//recursiva()