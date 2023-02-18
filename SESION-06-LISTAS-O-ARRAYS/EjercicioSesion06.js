const lista = ["arroz", "atun","leche","azucar","patatas"]
lista.push("Aceite de Girasol")
console.log(lista)

lista.splice(5,1)
console.log(lista)

const peliculas = [
    {titulo : "titanic",director:"un amigo",fecha:2009},
    {titulo : "coco",director:"un mexichango",fecha:20011},
    {titulo : "avatar",director:"un gringo",fecha:2010}
]

const peliculafecha = peliculas.filter(obj => obj.fecha >= 2010)
console.log(peliculafecha)

const peliculadirector = peliculas.map(obj => obj.director)
console.log(peliculadirector)


const peliculatitulo = peliculas.map(obj => obj.titulo)
console.log(peliculatitulo)

const arraynew = peliculadirector.concat(peliculatitulo)
console.log(arraynew)

console.log(...peliculadirector , ...peliculatitulo)