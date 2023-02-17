import { filterSport, sortAlphabetic, filterMedal, filterMap, reduceMedals } from "./data.js";
import dataGames from "./data/athletes/athletes.js";
const athletes = dataGames.athletes;

// Variables
const discipline = document.querySelector("#discipline");
const tableSport = document.getElementById("tableSport");
const btnOrdernar = document.getElementById("btnOrdenar");
const medal = document.getElementById("medal");
//const container = document.getElementsByClassName("container");

//tabla  de visualizacion de data 
const createTableAthletes = function (athletes) {
  let stringEncabezado = "<tr><th>Nombre</th><th>Selección</th><th>Team</th><th>Medalla</th></tr>";
  for (const elements of athletes) {
    let fila = "<tr>";

    fila += "<td>";
    fila += elements.name;
    fila += "</td>";

    fila += "<td>";
    fila += elements.sport;
    fila += "</td>";

    fila += "<td>";
    fila += elements.team;
    fila += "</td>";

    fila += "<td>";
    fila += elements.medal;
    fila += "</td>";

    fila += "</tr>";

    stringEncabezado += fila;
  }
  return stringEncabezado;
};
tableSport.innerHTML = createTableAthletes(athletes);
// Tabla de Disciplinas
const createTable = function (arrayDataFiltrado) {
  let stringEncabezado = "<tr><th>Nombre</th><th>Selección</th></tr>";
  for (const elements of arrayDataFiltrado) {
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

// Tabla de Medallas
const createTableMedal = function (arrayDataFiltrado) {
  let stringEncabezado = "<tr><th>Pais</th><th>Cantidad</th></tr>";
  for (const elements of arrayDataFiltrado) {
    let fila = "<tr>";

    fila += "<td>";
    fila += elements.team;
    fila += "</td>";

    fila += "<td>";
    fila += elements.count;
    fila += "</td>";

    fila += "</tr>";

    stringEncabezado += fila;
  }
  return stringEncabezado;
};

//Evento Change para mostrar la data filtrada de disciplina y hacer el orden ascendente de la data filtrada

discipline.addEventListener("change", () => {
  const valueOption = discipline.value;
  const filtrandoData = filterSport(valueOption, athletes);
  //console.log("filtrado", filtrandoData);
  tableSport.innerHTML = createTable(filtrandoData);

  btnOrdernar.addEventListener("click", () => {
    const ordenandoData = sortAlphabetic([...filtrandoData]);
    tableSport.innerHTML = createTable(ordenandoData);
  });
});

// Evento Change calcular medallas
medal.addEventListener('change', () => {
  const valueMedal = medal.value;
 
  const filtrandoMedalla = filterMedal(valueMedal, athletes);
  
  //console.log("Primera data filtrada:", filtrandoMedalla);
  
  const dataFiltrandoMedalla = filterMap([...filtrandoMedalla]);
 
  //console.log("Data Filtrada con map:", dataFiltrandoMedalla);

  const dataFinal = reduceMedals(dataFiltrandoMedalla);


  tableSport.innerHTML = createTableMedal(dataFinal);

});
//console.log(filterSport) ;
