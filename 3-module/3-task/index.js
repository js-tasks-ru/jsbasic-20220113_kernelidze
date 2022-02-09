function camelize(str) {
  let arr = [];
  arr = str.split('');
  arr.map((item, index) => {
    if (item === '-') {
      arr.splice(index, 2, arr[index + 1].toUpperCase());
    }
  });
  return arr.join('');
}
