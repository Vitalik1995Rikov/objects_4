const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete"; // да, будет

  // конечно можно, потому что объекты присваиваются по ссылке, а не по значению
  // нельзя переопределять саму константу user