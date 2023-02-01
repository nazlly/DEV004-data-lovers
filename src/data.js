// estas funciones son de ejemplo
const discipline =  document.getElementById("discipline").value;
export const filterSport= (athletes,discipline) => {
  const resultBySport= athletes.filter(x =>x.sport==discipline);
  console.log("filtro de desportes", resultBySport);
  return resultBySport;

 
};

export const anotherExample = () => {
  return 'OMG';          
};
