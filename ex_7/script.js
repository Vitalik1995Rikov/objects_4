let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object], this ссылается на объект obj

(obj.go)();             // (2) [object Object], также на объект obj

(method = obj.go)();    // (3) undefined, контекст потерялся, раньше он указывал на obj

(obj.go || obj.stop)(); // (4) undefined, теряется контекст