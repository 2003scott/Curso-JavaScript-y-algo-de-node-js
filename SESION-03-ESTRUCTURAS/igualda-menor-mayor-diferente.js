//comparaciones

//igualdad
if (5==5){
    console.log("5 es my igual a 5")
}

if (5===5){
    console.log("5 es muy igual a 5")
}

let a=5;
let b="5";
console.log(typeof a)
console.log(typeof b)


// == solo compara el valor 
// === compara el valor y el tipo

if (a==b){
    console.log("a es igual a b Debil")
}

if (a===b){
    console.log("a es muy igual a b . Fuerte")
}

//desigualdad

let c = 4;
let d= "4";


if (c != d){
    console.log("c es diferente  a d . Fuerte")
}

if (c !== d){
    console.log("c es diferente a d . Fuerte")
}

//mayor - y menor

let max = 10;
let min = 5;

if(max > min){
    console.log("Max es mayor que min");
}

if(max >= min){
    console.log("Max es mayor o igual que min");
}

if(min < max){
    console.log("Min es menor que max");
}

if(100 <= max){
    console.log("Min es menor o igual que max");
}