import { filterSport, sortAlphabetic, filterMedal, filterMap, reduceMedals } from "./data.js";
import dataGames from "./data/athletes/athletes.js";
const athletes = dataGames.athletes;

// Variables
const discipline = document.querySelector("#discipline");
const tableSport = document.getElementById("tableSport");
const btnOrdernar = document.getElementById("btnOrdenar");
const btnKnow = document.getElementById("btnKnow");
const medal = document.getElementById("medal");
const container = document.getElementsByClassName("container");
const bienvenida = document.getElementsByClassName("bienvenida");
const btnRegresar = document.getElementById("btnRegresar");

// Evento que da accionar al botón know
btnKnow.addEventListener("click", () => {
  container[0].style.display = "flex";
  bienvenida[0].style.display = "none";
});

// Evento para regresar a Pantalla Principal
btnRegresar.addEventListener("click", () => {
  container[0].style.display = "none";
  bienvenida[0].style.display = "block";
});



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

