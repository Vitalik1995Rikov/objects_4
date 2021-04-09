let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let value in obj) {
    if (typeof obj[value] == 'number') {
      obj[value] = obj[value] * 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu); // разобрал на работе, понял принцип, вечером сделал сам