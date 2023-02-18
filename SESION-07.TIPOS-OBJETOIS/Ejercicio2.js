// Ejercicio 02

const obj = {
    nombre : "Scott",
    apellido : "Angeles",
    edad : 19,
    altura : 1.74,
    eresDesarrollador: true
}

const dedad = obj.edad
console.log(dedad)

const lista = {...obj}
console.log(lista)

const obj2 = [
    {...obj},
    {nombre : "Diego",apellido : "Asto",edad : 20,altura : 1.72,eresDesarrollador: true},
    {nombre : "Pepe",apellido : "Gonzales",edad : 27,altura : 1.68,eresDesarrollador: false},
    {nombre : "Scott",apellido : "Angeles",edad : 19,altura : 1.75,eresDesarrollador: true}
]

// Mayor a menor ordenando las edades
obj2.sort((a,b)=> a.edad - b.edad)
console.log(obj2)
