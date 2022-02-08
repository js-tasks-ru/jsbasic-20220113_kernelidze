function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    if (table.rows[i].cells[3].dataset.available === 'true') {
      table.rows[i].classList.add('available');
    } else if (table.rows[i].cells[3].dataset.available === 'false') {
      table.rows[i].classList.add('unavailable');
    } else {
      table.rows[i].setAttribute('hidden', '');
    }
  }

  for (let j = 0; j < table.rows.length; j++) {
    if (table.rows[j].cells[2].textContent === 'm') {
      table.rows[j].classList.add('male');
    } else {
      table.rows[j].classList.add('female');
    }
  }

  for (let k = 0; k < table.rows.length; k++) {
    if (table.rows[k].cells[1].textContent < 18) {
      table.rows[k].style = 'text-decoration: line-through';
    }
  }
}
