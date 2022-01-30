//Sobreescritura
class Person {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }

    nameComplete() {
        return `Name: ${this._name}, LastName: ${this._lastName}`;
    }
}

class Employee extends Person {
    constructor(name, lastName, salary) {
        super(name, lastName);
        this._salary = salary;
    }

    nameComplete() {
        return `${ super.nameComplete() }, Salary: ${ this._salary }`;
        // return `Name: ${this._name}, LastName: ${this._lastName}, Salary: ${this._salary}`;
    }
}

const person1 = new Person('Candela', 'Rodriguez');
const employee1 = new Employee('Pedro', 'Gimenez', 2500)

console.log(person1.nameComplete());
console.log(employee1.nameComplete());