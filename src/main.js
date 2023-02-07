import { filterSport, sortAlphabetic, filterMedal } from "./data.js";
import dataGames from "./data/athletes/athletes.js";
const athletes = dataGames.athletes;

// Variables
const discipline = document.querySelector("#discipline");
const tableSport = document.getElementById("tableSport");
const btnOrdernar = document.getElementById("btnOrdenar");
const medal = document.getElementById("medal");


const createTable = function (arrayDataFiltrado) {
  let stringEncabezado = "<tr><th>Nombre</th><th>Selección</th></tr>";
  for (let elements of arrayDataFiltrado) {
    let fila = "<tr>";

    fila += "<td>";
    fila += elements.name;
    fila += "</td>";

    fila += "<td>";
    fila += elements.team;
    fila += "</td>";

    fila += "</tr>";

    stringEncabezado += fila;
  }
  return stringEncabezado;
};

const createTableMedal = function (arrayDataFiltrado) {
  let stringEncabezado = "<tr><th>Pais</th><th>Cantidad</th></tr>";
  for (let elements of arrayDataFiltrado) {
    let fila = "<tr>";

    fila += "<td>";
    fila += elements.team;
    fila += "</td>";

    fila += "<td>";
    fila += elements.team;
    fila += "</td>";

    fila += "</tr>";

    stringEncabezado += fila;
  }
  return stringEncabezado;
};

discipline.addEventListener("change", () => {
  let valueOption = discipline.value;
  const filtrandoData = filterSport(valueOption, athletes);
  tableSport.innerHTML = createTable(filtrandoData);

  btnOrdernar.addEventListener("click", () => {
    const ordenandoData = sortAlphabetic([...filtrandoData]);
    tableSport.innerHTML = createTable(ordenandoData);
  });
});

medal.addEventListener('change', () => {
  let valueMedal = medal.value;
 
  const filtrandoMedalla = filterMedal(valueMedal, athletes);
  console.log("filtrado: ", filtrandoMedalla);
  tableSport.innerHTML = createTableMedal(filtrandoMedalla);

});
