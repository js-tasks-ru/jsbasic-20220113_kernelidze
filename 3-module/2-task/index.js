function filterRange(arr, a, b) {
  let filteredArr = [];
  for (let num of arr) {
    if (num >= a && num <= b) {
      filteredArr.push(num);
    }
  }
  return filteredArr;
}
