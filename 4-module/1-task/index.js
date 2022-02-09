function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = friends[i].firstName + ' ' + friends[i].lastName;
  }
  return ul;
}
