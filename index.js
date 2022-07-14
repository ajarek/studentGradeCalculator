import {Card} from "./class/card.js";

document.body.append(new Card(`Student<br> Grade<br> Calculate`).render());

function readValues(e) {
     e.preventDefault();
   const inputs=document.querySelectorAll("input");
   inputs.forEach(input => {
       console.log(input.value);
       input.value="";
   })
   
   
}

function eventReadValues() {
    const form= document.querySelector("form");
    form.addEventListener('submit',readValues)
}
eventReadValues()