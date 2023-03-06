// localStorage.setItem("nombre","Scott")
// localStorage.setItem("nombre","Diego")

//console.log(localStorage.getItem("nombre"))

//localStorage.setItem("persona",JSON.stringify({nombre:"Scott",edad:19}))

//console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify ->convierte un objeto / array en un string
//JSON.parse -> Convierte un objeto / array convertido a traves de un stringify en un obj de JavaScripst

//con esto borramos un datos en el localstore
localStorage.removeItem("nombre")


sessionStorage.setItem("nombre-sesion","Scott")

// cookies
document.cookie = "nombreCookie=ScottCookie"

//dando caducidad ala cookie
document.cookie = "nombreCaducidad=Nombre;expires="+ new Date(2023,05,20).toUTCString()
console.log(document.cookie)