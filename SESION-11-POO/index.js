const persona = {
    nombre : "diego",
    edad : 19,
    isDeveloper : true,
    saludo : function (){
        console.log("Hello")
    }
}

//console.log(persona)
persona.saludo()

const otro_persona = {
    nombre : "scott",
    edad : 18,
    isDeveloper: false,
    saludo : function (){
        console.log("Hola")
    }
}

otro_persona.saludo()

// funcion factory 
const creaPersona = (nombre , edad , isDeveloper) =>{
    return{
        nombre : nombre,
        edad : edad,
        isDeveloper : isDeveloper,
        saludo: function(){
            console.log("Hello")
        }
    }
}

const nueva_persona = creaPersona("Scotin",20,true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria",23,false)
console.log(nueva_persona2)