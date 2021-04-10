let ladder = {
    step: 0,
    up() {
       this.step++;
       return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().up().up().up().down().showStep(); 
  // сначала просто дописал return для this.step каждого
  // не сработало, надо было возвращать сам объект каждый раз