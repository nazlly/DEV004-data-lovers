import { filterSport } from "./data.js";
import dataGames from "./data/athletes/athletes.js";
const athletes = dataGames.athletes;

const discipline = document.querySelector("#discipline");
const tableSport = document.getElementById("tableSport");

const createTable = function(arrayDataFiltrado) {
  let stringEncabezado = "<tr><th>Nombre</th><th>Selección</th></tr>";
  for(let elements of arrayDataFiltrado) {
    let fila = "<tr>"

    fila += "<td>"
    fila += elements.name;
    fila += "</td>";

    fila += "<td>";
    fila += elements.team;
    fila += "</td>";

    fila += "</tr>";

    stringEncabezado += fila;
  }
  return stringEncabezado;
}


discipline.addEventListener('change', () => {
  let valueOption = discipline.value;
 
  const filtrandoData = filterSport(valueOption, athletes);

  tableSport.innerHTML = createTable(filtrandoData);

});
