function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
  // first check to see it next val less than first
    if(arr[i] < arr[0]) {
      // if so, then we add it as the first
      arr.unshift(arr.splice(i,1)[0])
    }
    // else, we need to loop though and find where it goes;
    else {
      for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j,0,arr.splice(i,1)[0])
        }
        else if(arr[i] < arr[j]) {
          arr.splice(j,0,arr.splice(i,1)[0])
        }
      }
    }
  }
  return arr;
}


module.exports = insertionSort;