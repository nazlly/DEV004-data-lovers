export const filterSport = (valueSelect, arrayData) => {
  const filterSelect = arrayData.filter(element  => element.sport === valueSelect);
  return filterSelect;
};

