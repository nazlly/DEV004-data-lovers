import {filtersport  } from './data.js';
import dataGames from './data/athletes/athletes.js';
const athletes=dataGames.athletes;
const discipline=document.getElementById("discipline");

const tablebody=document.querySelector("tbody");
const listAthletes=(index)=>{

    <tr>
    <td>$(index.name)</td>
    <td>$(index.sport)</td>
    </tr>
    console.log("valor de lista atletas",listAthletes)
    return("valor de mi table",listAthletes);
    
};

const printScreen=(mostrar)=>{
tablebody.innerHTML="",
mostrar.forEach((z) => {
    tablebody.innerHTML +=  listAthletes (z)  
})
    
};


console.log(filtersport, dataGames);