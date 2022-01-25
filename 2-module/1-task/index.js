function sumSalary(value) {
  let sum = 0;
  for (let key in value) {
    if (!isNaN(value[key]) && value[key] !== false && value[key] !== true && value[key] !== Infinity && value[key] !== -Infinity) {
      sum += value[key];
    }
  }
  return sum;
}
