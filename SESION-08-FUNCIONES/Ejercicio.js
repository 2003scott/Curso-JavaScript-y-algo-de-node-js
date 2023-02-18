function devuelveTrue() {
    return true
}
devuelveTrue()
console.log(devuelveTrue())


async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
damePromesa()

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}

const npares = idsPares();

console.log(npares.next())
console.log(npares.next())
console.log(npares.next())
console.log(npares.next())
console.log(npares.next())
