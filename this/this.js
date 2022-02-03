// # This

// console.log( this );
// console.log( window );
// console.log( this === window );

// this.nombre = 'Contexto Global';
// console.log( window );

// function imprimir() {
//     console.log(this.nombre);
// }

// imprimir();

// console.log('--------------');

// const obj = {
//     nombre: 'Contexto Objeto',
//     imprimir: function () {
//         console.log(this.nombre);
//         console.log(this);
//     },
//     isWindow: function() { console.log(this === window) }
// }

// console.log(obj);
// obj.imprimir();
// obj.isWindow();

// console.log('--------------');

// const obj2 = {
//     nombre: 'Contexto Objeto 2',
//     imprimir,
// }

// console.log(obj2);
// obj2.imprimir();

// console.log('--------------');

// const obj3 = {
//     nombre: 'Contexto Objeto 3',
//     imprimir: () => {
//         console.log(this.nombre);
//     },
// }

// obj3.imprimir();

// console.log('--------------');

// function Persona(nombre) {
//     const that = this;
//     // this.nombre = nombre;
//     that.nombre = nombre;

//     // return console.log(this.nombre);
//     // return function() { console.log( 'Funcion Constructora:', this.nombre) };
//     // return () => console.log( 'Funcion Constructora:', this.nombre);
//     return function() { console.log( 'Funcion Constructora:', that.nombre) };

// }

// let persona1 = new Persona('Ezequiel');

// persona1();

//------------------------

// # Call, apply, bind

console.log(this);
this.lugar = 'Contexto Global';

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde ${this.lugar}`);
}

saludar(); 

const obj = {
    lugar: 'Contexto Objeto'
}

saludar.call(obj, 'Hola', 'Eze');
saludar.call(null, 'Hola', 'Eze');
saludar.call(this, 'Hola', 'Eze');
saludar.apply(obj, ['Adios', 'Bamio']);
saludar.apply(null, ['Adios', 'Bamio']);
saludar.apply(this, ['Adios', 'Bamio']);

this.nombre = 'Window';

const persona = {
    nombre: 'Eze',
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar();

//------------------------




