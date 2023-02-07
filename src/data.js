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
    return 0;
  });
  return arrayFiltrado;
};
