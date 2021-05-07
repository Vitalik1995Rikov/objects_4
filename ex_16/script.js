let obj = {
    name: 'alex',
    surname: 'smith',
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
}

console.log(obj.fullName);

obj.fullName = 'mary cruse';
console.log(obj.name);
console.log(obj.surname);
console.log(obj.fullName);


//__________________________________



let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            alert('Короткое имя');
            return;
        }
        this._name = value; 
    }
};

user.name = 'pal';
console.log(user.name);
user.name = 'jack';
console.log(user.name);


//__________________________________

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday; // есть свойство с датой рождения
}

Object.defineProperty(this, 'age', { // добавим свойство 'age', которое считает возраст из даты текущей и рождения
    get() {
        let today = new Date().getFullYear();
        return today - this.birthday.getFullYear();
    }
})