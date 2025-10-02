//Háttérképek
//x
// 9/11


// let hatterkepek = ["kepek/hatterképek/IMG_7654.JPG", "kepek/hatterképek/IMG_8641.JPG"]

// let dochossz = document.querySelector("body").clientHeight
// console.log(dochossz)
// if (dochossz < 120){
//   for(let i = 0; i < dochossz/9; i++){
//     if (i % 2 == 0){
//       console.log(i);
//       document.getElementById("hatterkep").innerHTML += `<div class="flexjobb24">
//         <img class="kepjobb" src="kepek/hatterképek/IMG_20231103_161910.jpg" alt="">
//       </div>`
//     }
//     else{
//       console.log(i);
//       document.getElementById("hatterkep").innerHTML += `<div class="flexbal24 ">
//         <img class="kepbal" src="kepek/hatterképek/IMG_20231111_180336.jpg" alt="">
//       </div>`
  
//     }
//   }
// }
// else{
//     for(let i = 0; i < dochossz /5; i++){
//     if (i % 2 == 0){
//       console.log(i);
//       document.getElementById("hatterkep").innerHTML += `<div class="flexjobb24">
//         <img class="kepjobb" src="kepek/hatterképek/IMG_20231103_161910.jpg" alt="">
//       </div>`
//     }
//     else{
//       console.log(i);
//       document.getElementById("hatterkep").innerHTML += `<div class="flexbal24 ">
//         <img class="kepbal" src="kepek/hatterképek/IMG_20231111_180336.jpg" alt="">
//       </div>`
  
//     }
//   }
// }





//Panelek betöltése
import Panelek from "./panel.js"
import {Panel} from "./panelclass.js"

let toltendo = []
Panelek.forEach(sor => {
    toltendo.push(new Panel(sor))
});

let ev = window.location.href.split("/")[window.location.href.split("/").length - 1].split(".")[0]
console.log(ev)
let index = 0;
toltendo.forEach(panel => {
    index++;
    if (panel.Ev == ev){
        
    document.getElementById("body").innerHTML += `    
    <div class="col-12 piros_nagy_cim evcim"><div>${panel.Datum}</div></div>
    <div class="flex-felosztas">
    <div class="col-sm-6 col-12 szoveg">
      <p>
        ${panel.Monolog}
      </p>
    </div>

    <div class="flex_carusel">
      <div class="col-sm-6 col-12 ">
        <div id="carouselExampleControls${index}" class="carousel slide ">
          <div class="carousel-inner" id="${index}kep">
      
          </div>

        </div>
    </div>
    </div>
    </div>`


    for (let i = 0 ; i < panel.kepurl.length; i++){
        if (i == 0){
            document.getElementById(`${index}kep`).innerHTML +=`<div class="carousel-item active">
            <img  src="${panel.kepurl[i]}" class="d-block h-100 caruselkep" alt="...">
        </div>`     
        }
        else{
            document.getElementById(`${index}kep`).innerHTML +=`<div class="carousel-item ">
            <img  src="${panel.kepurl[i]}" class="d-block h-100 caruselkep" alt="...">
        </div>`   
        }
      }
      if(panel.kepurl.length != 1
      ){
          document.getElementById(`carouselExampleControls${index}`).innerHTML += `          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${index}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${index}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>`
      }
    }
});



