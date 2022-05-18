function merge(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++;
    }
    else {
      merged.push(arr2[j])
      j++;
    }
  }
  // if any remaning values;
  while(i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  console.log(merged)
  return merged;
}

function mergeSort(arr) {
  // if our array is split down to be 1 or less, then return it;
  if(arr.length <= 1) return arr;
  //get out mid point
  const mid = Math.floor(arr.length / 2);
  // slice the arrays in half, then recurse back in until split down to 1 or less;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // once our arrays are split down to 1 or less, we merge each sorted side using our merge function.
  // the merge function will keep running, sorting all of split arrays, untill we end up with one sorted array and return it.
  console.log(left, right)
  return merge(left, right);
}

module.exports = { merge, mergeSort};