// API PÚBLICA
let estado = document.getElementById("estado")
let temperatura = document.getElementById("temperatura")
let img = document.getElementById("img")
let sitio = document.getElementById("sitio")
let select_capitales = document.getElementById("select_capitales");
let btn_consultar = document.getElementById("btn_consultar")

let fragment = document.createDocumentFragment();

const peticionApi =  () => {
    let url_capitales = "https://api.sampleapis.com/countries/countries";

    fetch(url_capitales)
    .then((response) => response.json())
    .then((responsejson) => {
        // console.log(responsejson)
        
        // console.log(capitales);
        responsejson.forEach((capital)=>{
            // llamar a la funcion que crea los options
            createOptions(capital);
        })
        // meter el fragment en el select
        select_capitales.appendChild(fragment);
    }) 
}

const createOptions = (capital) => {
    let option = document.createElement("OPTION");
    option.value = capital.capital;
    option.textContent = capital.capital;
    fragment.appendChild(option)
}

// API KEY PRIVADA

const peticionApiTiempo = () =>{
    // console.log(select_capitales.value)
    if(select_capitales.value !== ""){
        let place = select_capitales.value.toLowerCase();
        // console.log(place)
        let apikey = "55ye6pg8vt86c09nbb2xeszqr63znmr0jwagz1mu";
        let url = "https://www.meteosource.com/api/v1/free/point?place_id="+place+"&language=en&units=metric&key="+apikey;
    
        // peticion
    
        fetch(url)
        .then((response) => response.json())
        .then((responsejson) => {
            console.log(responsejson.current)
            sitio.textContent = place.toUpperCase();
            estado.textContent = responsejson.current.summary;
            temperatura.textContent = responsejson.current.temperature + " ºC";
            img.src = "../assets/img/weather_icons/"+responsejson.current.icon_num+".png";
        })

    }
}


// LISTENER

document.addEventListener("DOMContentLoaded",peticionApi)
btn_consultar.addEventListener("click",peticionApiTiempo)