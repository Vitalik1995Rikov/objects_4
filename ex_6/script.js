let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)() // выведет ошибку, пропущена ';' после определения обекта user