function sumSalary(value) {
  let sum = 0;
  for (let key in value) {
    if (typeof value[key] === 'number' && isFinite(value[key])) {
      sum += value[key];
    }
  }
  return sum;
}
