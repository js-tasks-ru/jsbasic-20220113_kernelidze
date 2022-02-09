function showSalary(users, age) {
  let filteredArr = users.filter(user => user.age <= age);
  let resultArr = filteredArr.map(obj => obj.name + ', ' + obj.balance + '\n');
  let resultStr = resultArr.join('');
  return resultStr.slice(0, -1);
}
