function truncate(str, maxlength) {
  if (str.length - 1 > maxlength) {
    let newString = str.slice(0, maxlength - 1) + '…';
    return newString;
  }
  return str;
}
