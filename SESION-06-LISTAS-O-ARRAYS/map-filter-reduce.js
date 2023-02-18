// Trabajar con metodos mas avanzados 
//.map() .filter() .reduce()

const array = ["San sebastian","Madrid","Barcelona","Alicante","Lima"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})

console.log(val)

const newArray = array.map((valor, indice )=>`${indice +1} - ${valor}`)
console.log(newArray)

const listaObjetos=[
    {nombre : "Diego", edad : 19},
    {nombre : "Scott", edad : 18},
    {nombre : "Adrian", edad : 21},
    {nombre : "Pepe", edad : 39}
]

//const personasmayores = listaObjetos.filter(obj =>{
//    if (obj.edad>30){
//        return true
//    }else{
//        return false
//    }
//})

const personasmayores = listaObjetos.filter(obj=>obj.edad>30)
console.log(personasmayores)

const nuevalista= listaObjetos.filter(obj=> obj.nombre !== "Diego")
console.log(nuevalista)

//reduce
const valores = [3,56,23,5,98,100]
const suma = valores.reduce((acumulado,cur,i,arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)
