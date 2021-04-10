function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value = this.value + +prompt('Введи число', 0);  
    }
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); // на удивление сделал со второго раза
// c первого перед promt был только один плюс
// в итоге получал 1+5+6 = 156, а не 10 как хотел 