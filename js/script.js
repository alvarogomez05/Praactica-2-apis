let cards = document.getElementById("cards");

// fragment para las tarjetas
let fragment = document.createDocumentFragment();

// API PÚBLICA

let url_capitales = "https://api.sampleapis.com/countries/countries"

const peticionApi =  () => {
    fetch(url_capitales)
    .then((response) => response.json())
    .then((responsejson) => {
        // console.log(responsejson)
        let capitales = [];
        // 20 posiciones random del array
        for(i=0;i<20;i++){
            capitales.push(responsejson[Math.floor(Math.random()*responsejson.length)])
        }
        // console.log(capitales);
        capitales.forEach((capital)=>{
            showCapitales(capital);
        })
        cards.appendChild(fragment)
    }) 
}



// EJEMPLO DE LAS TARJETAS QUE VAMOS A CREAR
/* <div class="max-w-xs rounded-lg border overflow-hidden">
    <!-- Imagen -->
    <img src="./assets/img/logo.webp" alt="Santander" class="w-full h-48 object-cover">

        <!-- Contenido de la tarjeta -->
        <div class="p-4">
            <h2 class="text-xl font-bold mb-2">SANTANDER (SDR)</h2>
            <p class="text-gray-500 text-sm mb-1">desde</p>
            <p class="text-2xl font-semibold text-gray-800">18,99 EUR</p>
        </div>

        <!-- Icono (FontAwesome) -->
        <div class="flex justify-end p-4">
            <div
                class="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-100">
                <i class="fa-solid fa-arrow-right text-gray-700"></i>
            </div>
        </div>
</div> */

const showCapitales = (capital) =>{    
        console.log(capital)
        // CLASES
        // section
        let section = document.createElement("SECTION");
        section.classList.add("w-[300px]")
        section.classList.add("h-[400px]")
        section.classList.add("rounded-lg")
        section.classList.add("border")
        section.classList.add("border-white")
        section.classList.add("overflow-hidden")
        section.classList.add("bg-gray-100")
        // imagen
        let img = document.createElement("IMG");
        img.classList.add("w-full")
        img.classList.add("h-48")
        img.classList.add("object-cover")
        // controlamos que si no traen foto de la bandera ponga la foto del logo
        if(capital.media.flag !== ""){
            img.src= capital.media.flag;
        }else{
            img.src = "./assets/img/logo.webp";
        }
        // añadir la img al section
        section.appendChild(img)
        //primer div
        let div1 = document.createElement("DIV");
        div1.classList.add("p-4")
        //h2
        let h2 = document.createElement("H2");
        h2.classList.add("text-xl")
        h2.classList.add("font-bold")
        h2.classList.add("mb-2")
        h2.textContent= capital.capital;
        // añadir al div
        div1.appendChild(h2)
        // p1
        let p1 = document.createElement("P")
        p1.classList.add("text-gray-500")
        p1.classList.add("mb-1")
        p1.classList.add("text-sm")
        p1.textContent="desde"
        // añadir al div
        div1.appendChild(p1)
        // p2 
        let p2 = document.createElement("P")
        p2.classList.add("text-2xl")
        p2.classList.add("text-gray-800")
        p2.classList.add("font-semibold")
        // precio random
        let ran = 9.99 + Math.floor(Math.random()*80);
        p2.textContent= Number(ran).toFixed(2) + "€";
        // añadir al div
        div1.appendChild(p2)
        section.appendChild(div1)
        // segundo div
        let div2 = document.createElement("DIV")
        div2.classList.add("flex")
        div2.classList.add("p-4")
        div2.classList.add("justify-end")
        // tercer div
        let div3 = document.createElement("DIV")
        div3.classList.add("w-8")
        div3.classList.add("h-8")
        div3.classList.add("flex")
        div3.classList.add("justify-center")
        div3.classList.add("border")
        div3.classList.add("rounded-full")
        div3.classList.add("cursor-pointer")
        div3.classList.add("items-center")
        div3.classList.add("hover:bg-black")
        //i 
        let i = document.createElement("I")
        i.classList.add("fa-solid")
        i.classList.add("fa-arrow-right")
        i.classList.add("text-gray-700")
        i.classList.add("hover:text-white")

        // añadimos el i al div3
        div3.appendChild(i)
        // añadimos el div3 al div2
        div2.appendChild(div3)
        // añadimos el div2 al section
        section.appendChild(div2)

        fragment.appendChild(section)
}





// LISTENER

 document.addEventListener("DOMContentLoaded",peticionApi)