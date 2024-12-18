let main = document.getElementById("main");
let section = document.getElementById("section");
let fragment = document.createDocumentFragment();
let btn_comprar = document.getElementById("btn_comprar")

// primera funcion

const cargaInicial = () => {
    let historial = JSON.parse(localStorage.getItem("billetes"));

    createHistorial(historial);
}


const createHistorial = (historial) => {
    // console.log(historial)
    
    historial.forEach(billete => {
        // console.log(billete)

        showHistorial(billete);
    });
    section.append(fragment)
}

const showHistorial = (billete) =>{
    // console.log(billete)
    // section
    let section = document.createElement("SECTION");
    section.classList.add("flex")
    section.classList.add("justify-between")
    section.classList.add("border")
    section.classList.add("w-[70%]")
    // img
    let img = document.createElement("IMG");
    img.src = billete.bandera;
    img.classList.add("w-[100px]")
    img.classList.add("sm:w-[200px]")
    img.classList.add("md:w-[300px]")
    // article 
    let article = document.createElement("ARTICLE");
    article.classList.add("flex")
    article.classList.add("flex-col")
    article.classList.add("items-center")
    article.classList.add("justify-between")
    article.classList.add("md:gap-6")
    article.classList.add("mr-6")
    article.classList.add("py-4")
    // p1
    let p1 = document.createElement("P")
    p1.classList.add("text-white")
    p1.classList.add("font-bold")

    p1.classList.add("sm:text-2xl")
    p1.textContent = billete.destino;
    // p2 
    let p2 = document.createElement("P")
    p2.classList.add("text-white")
    p2.classList.add("font-semibold")
    p2.classList.add("sm:text-xl")
    p2.textContent = billete.precio;

    //button

    let button = document.createElement("button")
    button.classList.add("text-black")
    button.classList.add("bg-yellow-400")
    button.classList.add("p-2")
    button.classList.add("mt-2")
    button.classList.add("rounded-lg")
    button.textContent="ELIMINAR"
    // añadir
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(button)
    section.appendChild(img)
    section.appendChild(article)

    fragment.appendChild(section)
}

const comprar = () =>{
    // vaciar localStorage
    localStorage.removeItem("billetes");
    // vaciar innerHtml
    section.innerHTML="";
}

const borrarBillete = (event) => {
    if(event.target.tagName === "BUTTON"){
        // console.log(event.target.parentElement.parentElement)

        event.target.parentElement.parentElement.style.display = "none";

        let historial = JSON.parse(localStorage.getItem("billetes"));
        console.log(historial)
        let aux = historial.filter((billete) => billete.destino !== event.target.parentElement.firstElementChild.textContent);
        console.log(aux)
        localStorage.setItem("billetes",JSON.stringify(aux));

    }
}




// listeners
document.addEventListener("DOMContentLoaded", cargaInicial)
btn_comprar.addEventListener("click",comprar)
section.addEventListener("click",borrarBillete)