class Persona {
    //Private -> # solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    //#obtenEdad

    //Protectd -> solo desde dentro de la clase y clases descendientes
    _isDeveloper = true
    constructor(nombre,edad){
        this.#nombre=nombre
        this.#edad=edad
    }

    saludo(){
        console.log("Hola, mi nombre es "+this.nombre+" tengo "+this.edad+" años")
    }
    obtenNombre(){ //funcion getter -> nos permite acceder (de forma controlada ) a algun atributo protegido
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad
    }
    getEdad(){ //
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Scott",19)
console.log(persona)
console.log(persona.nombre)
persona.saludo()

console.log(persona.obtenNombre())

console.log(persona._isDeveloper)

// getter -> metodo que nos permiten obtener atributos / metodos privados o protegidos

const edad = persona.getEdad()
console.log(edad)

// setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privador o protegidos
// quiero cambiar la edad de la persona
persona.setEdad(34)
console.log(persona.getEdad())