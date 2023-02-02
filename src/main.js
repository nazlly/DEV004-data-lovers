import { filtersport } from "./data.js";
import dataGames from "./data/athletes/athletes.js";
const athletes = dataGames.athletes;
const discipline = document.getElementById("discipline");
const tableBody = document.querySelector("tbody");
const allAthletes = (index) => {
  return `
    <tr>
    <td>${index.name}</td>
    <td>${index.team}</td>
    <td>${index.sport}</td>
    <td>${index.medal}</td>
    </tr>
    `;
};
const printScreen = (mostrar) => {
  tableBody.innerHTML = "";
  mostrar.forEach((z) => {
    tableBody.innerHTML += allAthletes(z);
  });
};

printScreen(athletes);
discipline.addEventListener("change", (x) => {
  const selectSport = filtersport(athletes.sport, x.target.value);
  printScreen(selectSport);
});

console.log(filtersport, dataGames);
