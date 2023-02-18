//beack y continue
//labels

let unidades=0;
let decenas=0;

bucleDecemas:while(true){
    bubleUnidades:while(true){
        console.log('El numero actual es: ${decenas}${unidades}')
        unidades++
        if (unidades===10) {
            unidades=0;
            break bubleUnidades;
        }
    }
    if(decenas===2){
        console.log("El numero actual es: ${decenas}${unidades}")
        break bucleDecemas;
    }
    decenas++
}

console.log("ya hemos terminado")