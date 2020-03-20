function BinarySearch(arr, key) {
  for(let i = 0; i <= arr.length; i++){
    let isKey = arr[i];
    if(isKey === key)
      return i;  
  }
  return -1;
}
module.exports = { BinarySearch };

// function BinarySearch(arr, key) {
//   for(let i = 0; i <= arr.length; i++){
//     let isKey = arr[i];
//     if(isKey == key)
//       return 2;
//     else {
//       return -1;

//     }
//   }
// }
module.exports = { BinarySearch };
