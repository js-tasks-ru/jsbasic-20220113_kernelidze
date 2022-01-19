function checkSpam(str) {
  let strToLowerCase = str.toLowerCase();
  if (strToLowerCase.includes('1xbet') || strToLowerCase.includes('xxx')) {
    return true;
  }
  return false;
}
