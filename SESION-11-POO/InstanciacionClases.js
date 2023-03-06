class Persona {
    // nombre;
    // edad;
    // isDeveloper;

    //constructor
    constructor(nombre,edad,isDeveloper){
        this.nombre=nombre
        this.edad=edad
        this.isDeveloper=isDeveloper
    }

    saludo(){
        console.log("Hola, mi nombre es "+this.nombre+" tengo "+this.edad+" años")
    }
}

const nueva_persona = new Persona("Scott",19,true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // inializando una variable
let persona_2 = new Persona("Maria",34,false)  // instanciar una varaible 
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

//instaceof -> similar a typeof pero de clases