var nombre = "Scott"
var apellido = "Angeles"

const datos = {
    nombre : "Diego",
    apellido : "Asto"
}

sessionStorage.setItem("datos",datos)

localStorage.setItem("objeto",datos)

document.cookie = "nombreCaducidad=datos;expires="+ new Date(2023,01,15).toUTCString()
console.log(document.cookie)


// const nombre = "Gorka"
// const apellido = "Villar"

// const datos = {
//     nombre,
//     apellido
// }

// sessionStorage.setItem("datos", JSON.stringify(datos))
// localStorage.setItem("datos", JSON.stringify(datos))

// const now = new Date()
// document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`

