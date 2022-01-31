function showSalary(users, age) {
  let result = [];
  for (let user of users) {
    if (user.age <= age) {
      result.push(`${user.name + ', ' + user.balance + '\n'}`);
    }
  }
  let str = result.join('');
  return str.slice(0, -1);
}
