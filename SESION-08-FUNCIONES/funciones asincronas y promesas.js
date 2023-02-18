//funciones asincronas y promesas

function miAsinc() {
    //hacemos una llamada a una base de  datos externa
    //puede darno algun error
}

const miPromesa = new Promise((resolve, reject) =>{
   const i = Math.floor(Math.random() * 2)
    //si esta todo correcto
    if(i !==0){
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(()=> console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

