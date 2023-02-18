//Trabajando con fechas
const fecha = new Date()
console.log(fecha)

// Atencion - Los meses inicializan en 0 (0-enero, - 11 de diciembre)
const fecha2= new Date(1987,10,20,1,23,52,192)
console.log(fecha2)

const fecha3= new Date(-1000000000000) //Milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13,1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5= new Date(1987,10,20,1,23,52,192)
console.log(fecha2 == fecha5) // Error no sep pueden compara fechas de estas maneas

console.log(fecha2.getTime() == fecha5.getTime()) //ok esta la forma correcta

// obtener el dia el mes y el año de una fecha

//obtener el dia .getdate()
console.log(fecha.getDate())
//obtener mes .getMonth() + 1 incapie aca OjO
console.log(fecha.getMonth()+1)
//obtener el año .getFullYear
console.log(fecha.getFullYear())

console.log(fecha)

//.toLocalDateString

console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleDateString("en-us"))

