const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const secBorrar = document.querySelectorAll(".seccion-borrar")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",event =>{
        console.log("Moviendo el parrafo: "+parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id",parrafo.id)
    })

    parrafo.addEventListener("dragend", () =>{
        console.log("Termino de mover el parrafo: "+parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop",event=>{
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

secBorrar.forEach(secborrar =>{
    secborrar.addEventListener("dragover", event=>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    secborrar.addEventListener("drop", event =>{
        console.log("Eliminado")
        const id_parrafo = event.dataTransfer.getData("id")
        document.getElementById(id_parrafo).remove()
    })
})


