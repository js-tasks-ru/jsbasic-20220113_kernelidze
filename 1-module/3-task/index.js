function ucFirst(str) {
  if (str === '') {
    return '';
  }

  let bigFirstLetter = str[0].toUpperCase() + str.slice(1);
  return bigFirstLetter;
}
