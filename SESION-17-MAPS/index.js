let marker, map;

function initMap() {
    console.log("Inicializando Mapa")
    const position = {
        lat : -25.363,
        lng : 131.044
    }
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom : 4,
        center: position
    })

    const marker = new google.maps.Marker({
        position:position,
        map,
        title : "Posicion Inicial"
    })
    //Obtener la geolocalizacion 
    // marker.setPosition({lat, lng})
    geoPosiciona()
}
function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const watchPos = geoLoc.watchPosition(centraMapa,error => 
            console.error(error), {timeout:60000})
    }else{
        alert("El navegador no permitar la golocalizacion")
    }
}

function centraMapa(position){
    const nuevaPos={
        lat : position.coords.latitude,
        lng : position.coords.longitude        
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado")
    console.log(error)
}
console.log("Tus Cordendas son : "+nuevaPos) 

alert("Tus Cordendas son : "+nuevaPos) 