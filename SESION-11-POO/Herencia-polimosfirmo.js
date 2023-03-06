// Inheritance - herencia
class Persona{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }

    saludo(){
        console.log("Hola, mi nombre es "+this.nombre+" tengo "+this.edad+" años")
    }
}

class Desarrollador extends Persona{
    constructor(nombre,edad,lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }
    saludo(){ //override
        super.saludo()
        console.log("Y soy desarrollador de "+this.lenguaje)
    }
}

const nuevodev= new Desarrollador("Scott",19,"JavaScript")
console.log(nuevodev)
nuevodev.saludo()

//Polimorfismo => varias formas 