//.sort() -> metodo que modifica el array

const array = [2,5,9,15,1,2,0,4]
console.log(array)

array.sort((a,b)=>{
    if(a<b){
        return -1
    }else if (a>b){
        return +1
    }else{
        return 0
    }
})
console.log(array)

//Ordenar unicamente arrays numericos

const arrayNumerico = [4,1,7,3,1,3,56,1,546]

arrayNumerico.sort((a,b)=> a - b)
console.log(arrayNumerico)

//Interesante en arrays de objetos
const listaObjetos = [
    {nombre : "Diego", edad : 19},
    {nombre : "Scott", edad : 18},
    {nombre : "Adrian", edad : 21},
    {nombre : "Pepe", edad : 39}
]

//listaObjetos.sort((a,b)=>{
   // if (a.edad<b.edad){
     //   return -1
    //}else if(a.edad>b.edad){
      //  return +1
    //}else{
      //  return 0
    //}
//})

listaObjetos.sort((a,b)=> a.edad - b .edad)

console.log(listaObjetos)