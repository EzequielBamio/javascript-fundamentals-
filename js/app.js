// const person1 = {
//     name: 'Juan',
//     lastName: 'Carlos',
//     nameComplete: function(age, phone) { return `Name: ${ this.name }, Last Name: ${ this.lastName }, Age: ${ age }, Phone: ${ phone }` }
//         // nameComplete: function() { return `Name: ${ this.name }, Last Name: ${ this.lastName }` }
// }

// const person2 = {
//     name: 'Pedro',
//     lastName: 'Rodriguez'
// }

// console.log(person1.nameComplete(22, '58784111'));
// console.log(person1.nameComplete.call(person2, 22, '51242333'));

// console.log(person1.nameComplete.call(person2, [22, '51242333'])); //Phone: undefined
// console.log(person1.nameComplete.apply(person2, [22, '51242333']))

class Person {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;

    }
    nameComplete() { return `Name: ${ this.name }, Last Name: ${ this.lastName }` }
}

const person1 = new Person('Juan', 'Carlos');
const person2 = new Person('Pedro', 'Rodriguez');

// ### New propiertie

// console.log(person1.age) //Not exist
// person1.age = 22;
// console.log(person1.age) //Exist
// console.log(person2.age) //Not exist

Person.prototype.age = 0;

console.log(person1.age = 22);
console.log(person2.age = 24);