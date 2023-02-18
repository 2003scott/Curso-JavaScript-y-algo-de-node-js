//casos muy especificos - breack , continue
let lista=[1,2,3,4,5,6,7,8]

for (let i = 0; i < lista.length; i++) {
    if (lista[i]===3) {
        continue;
    }
    let c=50;
    console.log(lista[i])
    console.log(c)

    if(lista[i]>5){
        break;
    }
}

//cual es el ambito de un bucle
console.log(c);