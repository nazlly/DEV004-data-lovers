//filtro de deportes
export const filterSport = (valueSelect, arrayData) => {
  const filterSelect = arrayData.filter(
    (element) => element.sport === valueSelect
  );
  return filterSelect;
};

// Orden alfabetico
export const sortAlphabetic = (arrayAthletes, arrayOrden) => {
  if (arrayOrden == "A-Z") {
    return arrayAthletes.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
        return 0;
      });
    };
  };

  
