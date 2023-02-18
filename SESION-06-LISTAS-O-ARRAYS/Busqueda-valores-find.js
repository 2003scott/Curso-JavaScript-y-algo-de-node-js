//Iterar los valores de una lista
const array = ["hola",2,5,90,false,undefined]

//forma antigua y poca eficiente
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

//forma ES6 mas eficiente
let suma =0;
const  arrayNums = [3,6,2,77,2,3,93,19]
arrayNums.forEach(valor => {
    suma+=valor
    console.log(valor)
});
console.log(suma)

// Busaqueda de un valor dentro de una lista .find()
// quiero encontrar el elemento 90
const variable = array.find(valor=>{
    if(valor ===90){
        return true
    }
})

console.log(variable)

const listaObjetos = [
    {nombre : "Diego", edad : 19},
    {nombre : "Scott", edad : 18},
    {nombre : "Adrian", edad : 21},
    {nombre : "Pepe", edad : 39}
]

//const objeto = listaObjetos.find(o =>{
  //  if(o.nombre==="Diego"){
    //    return true
    //}
//})

const objeto = listaObjetos.find(o =>o.nombre === "Scott")

console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Pepe")
console.log(edad)