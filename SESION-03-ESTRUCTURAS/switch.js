//sentencias swith
let nota = 4;

switch(nota){
    case 5:
        console.log("Buen trabajo, Sobresaliente");
        break
    case 4:
        console.log("Buen trabajo, pero pudiste haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada");
        break;
    default:
        console.log("Error");
        break;
}