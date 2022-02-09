function getMinMax(str) {
  let arr = str.split(' ');
  let newArr = [];
  for (let elem of arr) {
    elem = +elem;
    if (elem) {
      newArr.push(elem);
    }
  }
  let minValue = Math.min.apply(null, newArr);
  let maxValue = Math.max.apply(null, newArr);
  let result = {};
  result.min = minValue;
  result.max = maxValue;
  return result;
}
