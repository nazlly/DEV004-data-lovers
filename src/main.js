import { filtersport } from "./data.js";
import dataGames from "./data/athletes/athletes.js";
const discipline=document.getElementById("discipline");
const athletes= dataGames.athletes
const tablebody = document.querySelector("tbody");
const listAthletes = (index) => {
  return`
<tr>
<td>$(index.name)</td>
<td>$(index.sport)</td>
</tr>`;

console.log(tablebody)

};
discipline.addEventListener("change",(x)=>{const selectSport=filtersport(athletes,x.target.value)})
//}

console.log(filtersport, dataGames);
console.log("hola");