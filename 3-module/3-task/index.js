function camelize(str) {
  let arr = [];
  arr = str.split('');
  arr.forEach((item, index) => {
    if (item === '-') {
      arr.splice(index, 1);
      let upperCaseLetter = arr[index].toUpperCase();
      arr.splice(index, 1, upperCaseLetter);
    }
  });

  return arr.join('');
}
