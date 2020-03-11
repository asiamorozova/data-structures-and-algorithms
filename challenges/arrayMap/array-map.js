
const map = (arr, func) => {
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result[i] = func(arr[i]);
  }
  return result;
};



const add1 = val => val + 1; 


module.exports = {
  map,
  add1
};
