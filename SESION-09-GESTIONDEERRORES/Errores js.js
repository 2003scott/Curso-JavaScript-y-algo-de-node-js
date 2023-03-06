const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false
    throw new Error("El valor debe ser de tipo numero")
}
console.log(miFuncion(2))
//console.log(miFuncion("ala"))

const numero = "8";

try {
    //codigo que puede fallar
    console.log("Esta ejecutandose de forma correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (error) {
    //si falla
    console.error("El valor de es es : "+error)
    console.error("Error")
}finally{
    console.log("Esto se va ejecutar tanto si se produce algun error como si no existe ninguna")
}

// InternalError , SyntaxError, TypeError, RangeError y ReferenceError
// Erros JavaScripst - pagina para ver que error tengo