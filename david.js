//Panelek betöltése
import Panelek from "./panel.js"
import {Panel} from "./panelclass.js"

console.log(document.querySelector("body").clientHeight)

let toltendo = []
Panelek.forEach(sor => {
    toltendo.push(new Panel(sor))
});

let ev = window.location.href.split("/")[window.location.href.split("/").length - 1].split(".")[0]
console.log(ev)
let index = 0;
toltendo.forEach(panel => {
    index++;
    console.log(panel)
    if (panel.Ev == ev){
        
    document.getElementById("body").innerHTML += `    
    <div class="col-12 piros_nagy_cim evcim"><div>${panel.Datum}</div></div>
    
    <div class="col-sm-6 col-12 szoveg">
      <p>
        ${panel.Monolog}
      </p>
    </div>

    <div class="col-sm-6 col-12 flex_carusel">
      <div id="carouselExampleControls${index}" class="carousel slide ">
        <div class="carousel-inner" id="${index}kep">
          
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${index}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${index}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>`


    for (let i = 0 ; i < panel.kepurl.length; i++){
        if (i == 0){
            document.getElementById(`${index}kep`).innerHTML +=`<div class="carousel-item active">
            <img  src="${panel.kepurl[i]}" class="d-block caruselkep" alt="...">
        </div>`     
        }
        else{
            document.getElementById(`${index}kep`).innerHTML +=`<div class="carousel-item ">
            <img  src="${panel.kepurl[i]}" class="d-block caruselkep" alt="...">
        </div>`   
        }
    }
    }
});





//Háttérképek