// Filtro de deportes
export const filterSport = (valueSelect, arrayData) => {
  const filterSelect = arrayData.filter(
    (element) => element.sport === valueSelect
  );
  return filterSelect;
};

// Orden alfabético
export const sortAlphabetic = (arrayFiltrado) => {
  arrayFiltrado.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    //return 0;
  });
  return arrayFiltrado;
};

// Filtro de medallas
export const filterMedal = (valueSelect, arrayData) => {
  const filterSelect = arrayData.filter(
    (element) => element.medal === valueSelect
  );
  return filterSelect;
};

// Función de filtro con map
export const filterMap = (arrayFiltrar) => {
  const newArray = arrayFiltrar.map((elem) => {
    return {
      team: elem.team,
      medal: elem.medal,
    };
  });
  //console.log("newArray",newArray)
  return newArray;
};

// Función con reduce
export const reduceMedals = (arrayFiltradoMedalla) => {
  const countedObjects = arrayFiltradoMedalla.reduce((acc, obj) => {
    const key = JSON.stringify(obj);
    if (!acc[key]) {
      acc[key] = { ...obj, count: 1 };
    } else {
      acc[key].count++;
    }
    return acc;
  }, {});
  const result = Object.values(countedObjects);
  return result;
};
