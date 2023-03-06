const boton = document.querySelector("#btn")
console.log(boton)

boton.addEventListener("click",() =>{
    //alert("hola")
    //confirm("Estade acuerdo") && console.log("OK")

    //confirm("Estade acuerdo")
    // ? console.log("OK")
    // : console.log("NO!!")

    const respuesta = confirm("¿Seguro?")
    if(respuesta){
    console.log("Estas de acuerdo")
    }else{
        console.log("NO estas de acuerdo")
    }

})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", ()=>{
    const nombre = prompt("cual es tu nombre")
    if (nombre){
        console.log("tu nombre es "+ nombre)
    }else{
        console.log("No has puesto  nada")
    }
})

const lista = [{
        nombre : "Scott",
        edad: 19
        },
    {
        nombre : "Diego",
        edad: 20
    },
    {
        nombre : "Maria",
        edad: 80
    }
]
//console.log(lista)
console.table(lista)