// .some()
const array = [3,7,2,4,9,42,35,7865,23,-2]
const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(valor =>valor ===9)
console.log(existe)

const listaObjetos = [
    {nombre : "Diego", edad : 19},
    {nombre : "Scott", edad : 18},
    {nombre : "Adrian", edad : 21},
    {nombre : "Pepe", edad : 39}
]

const exiteNombre = listaObjetos.some(persona=> persona.nombre=="Diego")
console.log(exiteNombre)

//como obtener una lista a partir de un objeto iterable

const str = "Hola soy Scott"
console.log(str[5])

const ar_str=Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"Hola",4])
const ar_set= Array.from(set)
console.log(ar_set)

const Keys = array.keys()
console.log(Keys)

const ar_keys = Array.from(Keys)
console.log(ar_keys)