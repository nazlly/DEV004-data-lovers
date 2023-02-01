import { filterSport } from './data.js';
import dataGames from './data/athletes/athletes.js';

const discipline =  document.getElementById("discipline").value;
const result = dataGames.filterSport(discipline);
    console.log("Resultados", result);

console.log(filterSport, dataGames);