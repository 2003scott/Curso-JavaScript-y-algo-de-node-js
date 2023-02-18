// Bucles for
//i=i+1
//i+=1
//i++

for(let i = 0; i < 10 ; i++){
    //Esto es el buble
    console.log(i)
}

for (let index = 0; index < 10; index+=2) {
    console.log(index)
}

let lista = [1,4,6,2,3,7,10,12];

for(let i = 0; i <lista.length;i++){
    console.log(lista[1]);
}


//Estructura for...of
for (let valor of lista) {
    console.log(valor);    
}

//Estructura forEach
lista.forEach(valor=>{
    console.log(valor)
});

//Estructura for ... in
let persona={
    nombre: "diego",
    apellido: "angeles",
    edad: 19,
    isDeveloper: true,
}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona);
    console.log(persona[propiedad])
}