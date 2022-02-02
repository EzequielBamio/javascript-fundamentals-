// # Symbol

// let id = Symbol('id');
// let id2 = Symbol('id2');

// console.log(id === id2);
// console.log(id, id2);
// console.log(typeof id, typeof id2);

// const NAME = Symbol('Name');
// const GREET =  Symbol('Greet');
// const person = {
//     [NAME] : 'Eze',
//     age: 20
// };

// console.log(person);

// person.NAME = 'Ezequiel Bamio';

// console.log(person);
// console.log(person.NAME);
// console.log(person[NAME]);

// person[GREET] = () => console.log('Hello World');
// console.log(person);
// person[GREET]();

// for ( let property in person ) {
//     console.log(property);
//     console.log(person[property]);
// }

// console.log(Object.getOwnPropertySymbols(person));

//------------------------

// # Sets

// const set = new Set([1,2,3,4,5,6,3,true,false,false, {}, {}, 'HOla', 'hola']);

// console.log(set);
// console.log(set.size);

// const set2 = new Set();
// set2.add(1); 
// set2.add(2);
// set2.add(2);
// set2.add(3);
// set2.add(true);
// set2.add(false);
// set2.add(true);
// set2.add({});

// console.log(set2);
// console.log(set2.size);

// console.log('Recorriendo Set');

// for (item of set) {
//     console.log(item);
// }

// console.log('Recorriendo Set2');

// set2.forEach(item => console.log(item));

// console.log(Array.from(set)[0]);

// set.delete('HOla');
// console.log(set);

// console.log(set.has('hola'));
// console.log(set.has(19));

// set2.clear();
// console.log(set2);

//------------------------

// # Maps

// const map = new Map();

// map.set('nombre', 'Ezequiel');
// map.set('apellido', 'Bamio');
// map.set('edad', 20);

// console.log(map);
// console.log(map.size);
// console.log(map.has('correo'));
// console.log(map.has('nombre'));
// console.log(map.get('nombre'));
// map.set('nombre', 'Eze');
// console.log(map.get('nombre'));
// map.delete('apellido');

// map.set(19, 'diecinueve');
// map.set(false, 'falso');
// map.set({}, {});

// console.log(map);

// for( let [key, value] of map) {
//     console.log(`Llave: ${ key }, Valor: ${ value }`);
// }

// const map2 = new Map([
//     ['nombre', 'Rocko'],
//     ['edad', 22],
//     [null, 'nulo']
// ]);

// console.log(map2);

// const keysMap2 = [...map2.keys()];
// const valuesMap2 = [...map2.values()];

// console.log(keysMap2);
// console.log(valuesMap2);

//------------------------

// # WeakSet & WeakMap

// const ws = new WeakSet([1,2,3,3,4,5,true,false,false,{},{},'hola','HOla']);

// const ws = new WeakSet();
// let valor1 = {'valor': 1};
// let valor2 = {'valor': 2};
// let valor3 = {'valor': 3};
// ws.add(valor1);
// ws.add(valor2);

// console.log(ws.has(valor3));

// ws.delete(valor2);
// console.log(ws);

// ws.add(valor2);
// ws.add(valor3);
// console.log(ws);

//  setInterval( () => console.log(ws), 1000 );

// setTimeout(() => {
//     valor1 = null;
//     valor2 = null;
//     valor3 = null;
// }, 5000);


// const wm = new WeakMap([
//         ['nombre', 'Rocko'],
//         ['edad', 22],
//         [null, 'nulo']
// ]);

// const wm = new WeakMap();
// let llave1 = {};
// let llave2 = {};
// let llave3 = {};

// wm.set(llave1, 1);
// wm.set(llave2, 2);

// console.log(wm.has(llave1));
// console.log(wm.has(llave3));

// console.log(wm.get(llave1));
// console.log(wm.get(llave2));
// console.log(wm.get(llave3));

// wm.delete(llave2);
// console.log(wm);

// wm.set(llave2, 2);
// wm.set(llave3, 3);
// console.log(wm);

// setInterval( () => console.log(wm), 1000)
 
// setTimeout(() => {
//     llave1 = null;
//     llave2 = null;
//     llave3 = null;
// }, 5000);

// # Iterables & Iterators

// const iterable = [1,2,3,4,5];
// // const iterable = new Set([1,2,3,3,3,4,5,6,6]);
// // const iterable = 'Hello World';
// // const iterable = new Map([
// //     ['nombre', 'Ezequiel'],
// //     ['edad', 20]
// // ])


// //Accedemos al iterador del iterable
// const iterador = iterable[Symbol.iterator]();

// console.log(iterable);
// console.log(iterador);
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());

// let next = iterador.next();

// while (!next.done)
// {
//     console.log(next.value);
//     next = iterador.next();
// }

//------------------------

// # Generators 

// function* iterable () {
//     yield 'Hola';
//     console.log('Hello console');
//     yield 'Hola 2';
//     console.log('Seguimos con más instrucciones de nuestro código');
//     yield 'Hola 3';
//     yield 'Hello 4';
// }

// let iterador = iterable();
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());

// for( let y of iterador ) {
//     console.log(y);
// }

// const arr = [...iterable()];
// console.log(arr);

// function cuadrado( value ) {
//     setTimeout( () => {
//         // console.log({value, resultado: value*value});
//     }, Math.random * 1000);

//     return {
//         value,
//         resultado: value*value};
// }

// function* generador() {
//     console.log('Inicia Generator');
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
//     console.log('Fin Generator');
// }

// let gen = generador();

// for( let y of gen ) {
//     console.log(y);
// }

// # Proxies

// const persona = {
//     nombre: '',
//     apellido: '',
//     edad: 0
// };

// const manejador = {
//     set( obj, prop, valor ) {
//         if(Object.keys(obj).indexOf(prop) === -1)
//         { return console.error(`La propiedad "${prop}" no existe en el objeto persona`)};

//         if(
//             (prop === 'nombre' || prop === 'apellido') &&
//             !(/^[A-Za-zÑñ\s]+$/g.test(valor))
//         ) { return console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco`)};

//         obj[prop] = valor;
//     }
// }

// const eze = new Proxy(persona, manejador);
// eze.nombre = 'Ezequiel2';
// eze.apellido = 'Bamio';
// eze.edad = 20;
// eze.instagram = '@bamioezequiel';
// console.log(eze);


//------------------------

// # Propiedades dinamicas de los objetos

// let aleatorio = Math.round(Math.random() * 100 + 5);

// const objUsuarios = {
//     propiedad: 'Valor',
//     [`id_${ aleatorio }`]: 'Valor Aleatorio'
// };
// console.log(objUsuarios);

// const usuarios = ['Ezequiel', 'Candela', 'Jon', 'Pedro', 'Rocio'];

// usuarios.forEach( (usuario, index) => objUsuarios[`id_${index}`] = usuario  )

// console.log(objUsuarios);

//------------------------

