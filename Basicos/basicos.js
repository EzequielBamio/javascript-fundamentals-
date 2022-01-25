// Class 1 - var vs let

//var greetingHello = 'Hello World';
//Cuando se ejecuta JS lo declara aca por eso se muestra en la consola 
//afuera del scope.
//var greetingBye = 'Bye World'; 


//if (true) {
// var greetingBye = 'Bye World'; //Lo declaro aca
//let greetingBye = 'Bye World';
//Lo declaro aca y cuando se ejecuta JS
//lo declara dentro de este scope.
//No funciona fuera de este scope.
//}

// console.log(greetingBye);

// console.log('*** Ejemplo VAR ***');
// var player = 'Lionel Messi';
// console.log('Variable player before the block', player); //Lionel Messi
// {
//     var player = 'Cristiano Ronaldo';
//     console.log('Variable player inside the block', player); //Cristiano Ronaldo

// }
// console.log('Variable player after the block', player); //Cristiano Ronaldo

// console.log('*** Ejemplo LET ***');
// let player2 = 'Lionel Messi';
// console.log('Variable player before the block', player2); //Lionel Messi
// {
//     let player2 = 'Cristiano Ronaldo';
//     console.log('Variable player inside the block', player2); //Cristiano Ronaldo

// }
// console.log('Variable player after the block', player2); // Lionel Messi


// ------------------------------------------------

// Class 2 - Destructuracion.

// const numbers = [1, 6, 8];
// const [one, six, eight] = numbers;
// console.log(one, six, eight); //1 6 8

//Ejemplo con Array
// const heroes = ['Thor', 'IronMan', 'Hulk'];
// const [ironMan, thor, hulk] = heroes;

// console.log(ironMan, thor, hulk);//Thor IronMan Hulk.

//Ejemplo con Objetos
// let heroe = {
//     name: 'Ironman',
//     power: 'Money',
//     age: 42
// }

// //No imorta el orden mientras tengan el mismo nombre del atributo
// let { age, name, power } = heroe;
// let { age: edad, name: nombre, power } = heroe;


// console.log(`${ name } es un superheroe de ${ age } y su poder es ${ power }`);
// console.log(`${ nombre } es un superheroe de ${ edad } y su poder es ${ power }`);


// ------------------------------------------------

// Class 2 - Objetos literales.

// let name = 'Pepe';
// let age = 3;

//Antes
// const dog = {
//     name: name,
//     age: age,
//     bark: function() {
//         console.log('guau guau!');
//     }
// }

// console.log(dog); //Pepe 3 
// dog.bark(); // guau guau!

//Ahora
// const dog = {
//     name,
//     age,
//     color: 'black',
//     bark() {
//         console.log('guau guau!');
//     }
// }

// console.log(dog); // Pepe 3 black
// dog.bark(); // guau guau!

// ------------------------------------------------

// ------------------------------------------------

// Class 2 - Parametros REST & Oerador Spread

//Rest
// function addHeroes(heroe1, heroe2, ...heroe3) {
//     const listHeroes = [heroe1, heroe2];

//     heroe3.forEach(h => {
//         listHeroes.push(h);
//     });

//     return console.log(listHeroes);
// }

// addHeroes('Hulk', 'Thor');
// addHeroes('Hulk', 'Thor', 'Capitan America');
// addHeroes('Hulk', 'Thor', 'Capitan America', 'Ironman');
// addHeroes('Hulk', 'Thor', 'Capitan America', 'Ironman', 'Black Widow');

//Spread
// const studentNames = ['Ezequiel', 'Pedro', 'Florencia', 'Federico', 'Ailen'];

// console.log('Student names:', ...studentNames);

// const studentStates = ['Promoted', 'Promoted', 'Regular', 'Regular', 'Promoted'];

// const student = [...studentNames, ...studentStates];

// console.log(student);

// ------------------------------------------------

// Class 3 - Prototipos

/*
    Clase - Es un modelo a seguir
    Objeto - Es una instancia de una clase
    Atributos - Es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
    Metodos - Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto)
*/

//Funcion constructora
// function Heroe(name, power) {

//     //Atributos
//     this.name = name;
//     this.power = power;

//     //Metodos
//     this.show = function() {
//         console.log(`${this.name} - ${this.power}`);
//     }
// }

//Funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal
// function Heroe(name, power) {

//     //Atributos
//     this.name = name;
//     this.power = power;
// }

// //Metodos
// Heroe.prototype.show = function() {
//     console.log(`${this.name} - ${this.power}`);
// }

// const hulk = new Heroe('Hulk', 'Fuerza');

// console.log(hulk);
// hulk.show();

// ------------------------------------------------

// Class 3 - Herencia prototipica

// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype.sound = function() { console.log('*sound*'); }

// function Dog(name, age, size) {
//     this.super = Animal;
//     this.super(name, age);
//     this.size = size;
// }

// //Dog esta heredando de Animal
// Dog.prototype = new Animal();
// Dog.prototype.contructor = Dog;

// //Sobreescritura de metodos del Prototipo padre en el hijo
// Dog.prototype.sound = function() {
//     console.log('*sound* de Perro');
// }
// Dog.prototype.bark = function() { console.log('Guauu guauu!'); }

// const rocky = new Dog('Rocky', 2, 'Grande');
// const pepe = new Animal('Pepe', 3);

// console.log(rocky);
// console.log(pepe);

// rocky.sound();
// rocky.bark();
// pepe.sound();


// ------------------------------------------------

// Class 3 - Clases, Herencia, Static, Setters y Getters

// class Animal {

//     constructor(nombre, genero) {
//         this.nombre = nombre;
//         this.genero = genero;
//     }

//     sonar() {
//         console.log('Hago sonidos');
//     }

//     saludar() {
//         console.log(`Hola me llamo ${this.nombre}`);
//     }
// }

// class Perro extends Animal {
//     constructor(nombre, genero, edad) {
//         //Con el metodo super() se manda a llamar el constructor de la clase padre.
//         super(nombre, genero);
//         this.edad = edad;
//         this.raza = '';
//     }

//     //Sobreescritura del metodo
//     sonar() {
//         console.log('Guauu guauu!');
//     }

//     //Un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
//     static description() {
//         console.log('Mamífero carnívoro doméstico de la familia de los cánidos que se caracteriza por tener los sentidos del olfato y el oído muy finos, por su inteligencia y por su fidelidad al ser humano, que lo ha domesticado desde tiempos prehistóricos; hay muchísimas razas, de características muy diversas.')
//     }

//     //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
//     get getRaza() {
//         return this.raza;
//     }
//     set setRaza(raza) {
//         this.raza = raza;
//     }



// }

// const animal = new Animal('Pepe', 'Macho');
// const pedro = new Perro('Pedro', 'Macho', 2);
// console.log(animal);
// animal.sonar();
// animal.saludar();

// console.log(pedro);
// pedro.sonar();
// pedro.saludar();

// Perro.description();
// pedro.setRaza = 'Pitbull';
// console.log(pedro.getRaza);




// ------------------------------------------------

// Class 3 - Objetos

// Console
// console.log(console);
// console.error('Esto es un error');
// console.warn('Esto es un aviso');
// console.info('Esto es un mensaje informativo');
// console.log('Un registro de lo que ha pasado en nuestra App');

// let nombre = 'Eze';
// let apellido = 'Bamio';
// let edad = 20;

// console.log(nombre, apellido, edad);
// console.log(`Hola mi nombre es ${ nombre } ${ apellido } y tengo ${ edad }`);
// console.log('Hola mi nombre es %s %s y tengo %s', nombre, apellido, edad);
// console.clear();

// console.log(window);
// console.log(document);
// console.dir(window);
// console.dir(document);
// console.clear();

// console.group('Cursos aprendiendo actualmente');
// console.log('1. HTML');
// console.log('2. CSS');
// console.log('3. JavaScript');
// console.log('4. Angular');
// console.groupEnd();
// console.clear();

// console.table(Object.entries(console).sort());
// console.clear();

// const numeros = [1, 2, 3, 4, 5];
// const vocales = ['a', 'e', 'i', 'o', 'u'];

// console.table(numeros);
// console.table(vocales);
// console.clear();


// console.time('Cuanto tiempo tarda mi codigo');
// const arr = Array(1000000);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i;
// }

// console.timeEnd('Cuanto tiempo tarda mi codigo');
// console.log(arr);
// console.clear();

// for (let i = 0; i < 100; i++) {
//     console.count('Codigo for');
// }
// console.clear();

// let x = 3;
// let y = 2;
// let pruebaXY = 'Se espera que X siempre sea menor que Y';

// console.assert(x < y, (x, y, pruebaXY));


// ------------------------------------------------

// Class 4 - Date

// console.log(Date);

// let fecha = new Date();
// console.log(fecha);
// //dia del mes
// console.log(fecha.getDate());
// //Dia de la semana D L M M J V S -> 0 1 2 3 4 5 6
// console.log(fecha.getDay());
// //Mes Ene Feb Mar Arb May Jun Jul Ago Sep Oct Nov Dic
// //->   0   1   2   4   5   6   7   8   9   10  11  12 
// console.log(fecha.getMonth());
// //2020
// console.log(fecha.getFullYear());
// //9
// console.log(fecha.getHours());
// //41
// console.log(fecha.getMinutes());
// //43
// console.log(fecha.getSeconds());
// //756
// console.log(fecha.getMilliseconds());
// //
// console.log(fecha.toString());
// //Sun Jan 23 2022
// console.log(fecha.toDateString());
// //1/23/2022 9:43:25 AM
// console.log(fecha.toLocaleString());
// //1/23/2022
// console.log(fecha.toLocaleDateString());
// //9:44:36
// console.log(fecha.toLocaleTimeString());
// //Devuelve la diferencia de minutos que hay de Argentina a la hora 0 (Hora inglesa) 
// //180 minutos = 3 Horas
// console.log(fecha.getTimezoneOffset());
// //La hora de la hora 0 (Hora inglesa)
// console.log(fecha.getUTCDate());
// //
// console.log(fecha.getUTCHours());
// //
// console.log(fecha.getUTCMinutes());
// //Representa el tiempo en segundos que paso desde el 1 de enero
// console.log(Date.now());

// let cumpleEze = new Date(2001, 3, 14);
// console.log(cumpleEze);


//momentjs.com para el manejo del tiempo

// ------------------------------------------------

// Class 4 - Date

// console.log(Math);
// console.log(Math.PI);
// //Devuelve el valor absoluto de un numero(Es la cantidad como tal sin importar que sea positivo o negativo)
// // 7.8
// console.log(Math.abs(7.8));
// console.log(Math.abs(-7.8));
// //Redondea el numero, busca el numero mas alto
// //8
// console.log(Math.ceil(7.2));
// //Redondea el numero, busca el numero mas bajo
// //7
// console.log(Math.floor(7.2));
// //Redondea al mas cercano
// //7 | 8
// console.log(Math.round(7.2));
// console.log(Math.round(7.8));
// //Raiz cuadrada de un numero
// //9
// console.log(Math.sqrt(81));
// //Elevar potencias 1er la base 2do la potencia
// //32
// console.log(Math.pow(2, 5));
// //Me indica si es numero negativo o positivo -1 0 1
// //-1
// console.log(Math.sign(-7.8));
// //0
// console.log(Math.sign(0));
// //1
// console.log(Math.sign(2.6));
// //Devuelve un numero aleatorio del 0 al 1
// console.log(Math.random());
// //Numero del 0 al 1000
// console.log(Math.round(Math.random() * 1000));

// ------------------------------------------------

// Class 4 - Operadores de cortocircuito
/*
Cortocircuito OR - cuando el valor de la izquierda en la expresion siempre
pueda validar a truem es el valor que se cargara por defecto

Cortocircuito AND- cuando el valor de la izquierda en la expresion
siempre pueda validar a false, es el valor que se cargara por defecto
*/

// function saludar(nombre) {
//     //nombre = TRUE     | nombre
//     nombre = nombre || 'Desconocido';
//     //nombre = FALSE    | 'Desconocido'
//     nombre = nombre || 'Desconocido';
//     //nombre = TRUE     | 'Desconocido'
//     nombre = nombre && 'Desconocido';
//     //nombre = FALSE    | undefined
//     nombre = nombre && 'Desconocido';

//     console.log(`Hola ${nombre}`);
// }

// saludar('Eze');
// saludar();

/*
Cortocircuito OR - cuando el valor de la izquierda en la expresion
siempre pueda validar a true es el valor que se cargara por defecto
*/
// console.log('--------- OR ---------');

// console.log('Cuando el valor de la izquierda es TRUE se muestra el valor de la izquierda sino se muestra el de la derecha');

// console.log('-----------------------');

// console.log('1. Cadena = true');
// console.log('Valor izquierda' || 'Valor derecha');
// console.log('2. Numero = true');
// console.log(19 || 'Valor derecha');
// console.log('3. true = true');
// console.log(true || 'Valor derecha');
// console.log('4. [] = true');
// console.log([] || 'Valor derecha');
// console.log('5. {} = true');
// console.log({} || 'Valor derecha');
// console.log('6. false = false');
// console.log(false || 'Valor derecha');
// console.log('7. null = false');
// console.log(null || 'Valor derecha');
// console.log('8. undefined = false');
// console.log(undefined || 'Valor derecha');
// console.log('9. "" = false');
// console.log("" || 'Valor derecha');
// console.log('10. -2 = false');
// console.log(-2 || 'Valor derecha');
// console.log('11. 0 = false');
// console.log(0 || 'Valor derecha');
// console.clear();
// /*
// Cortocircuito AND - cuando el valor de la izquierda en la expresion
// siempre pueda validar a false, es el valor que se cargara por defecto
// */
// console.log('--------- AND ---------');

// console.log('Cuando el valor de la izquierda es FALSE se muestra el valor de la izquierda sino se muestra el de la derecha');

// console.log('-----------------------');

// console.log('1. Cadena = true');
// console.log('Valor izquierda' && 'Valor derecha');
// console.log('2. Numero = true');
// console.log(19 && 'Valor derecha');
// console.log('3. true = true');
// console.log(true && 'Valor derecha');
// console.log('4. [] = true');
// console.log([] && 'Valor derecha');
// console.log('5. {} = true');
// console.log({} && 'Valor derecha');
// console.log('6. false = false');
// console.log(false && 'Valor derecha');
// console.log('7. null = false');
// console.log(null && 'Valor derecha');
// console.log('8. undefined = false');
// console.log(undefined && 'Valor derecha');
// console.log('9. "" = false');
// console.log("" && 'Valor derecha');
// console.log('10. -2 = false');
// console.log(-2 && 'Valor derecha');
// console.log('11. 0 = false');
// console.log(0 && 'Valor derecha');

// ------------------------------------------------

// Class 5 - alert, confirm y prompt

// window.alert('Hola esto es una alerta');
// window.confirm('Hola esto es una confirmación');
// window.prompt('Hola esto es un prompt y le permite al usuario ingresar un valor');

// let alerta = alert('Hola esto es una alerta');
// let confirmacion = confirm('Hola esto es una confirmación');
// let aviso = prompt('Hola esto es un prompt y le permite al usuario ingresar un valor');

// //Solo sirve para enviar mensaje al usuario
// console.log('Alerta: ', alerta);
// //true o false
// console.log('Confirmación: ', confirmacion);
// //Si cancela es null sino manda el valor de la caja de texto
// console.log('Aviso: ', aviso);

// ------------------------------------------------

// Class 5 - expresiones regulares

/* 
Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para busqueda de patrones de cadenas de caracteres.

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular#:~:text=Las%20expresiones%20regulares%20son%20patrones,o%20reconocer%20cadenas%20de%20texto.
*/

// let cadena = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, dolores molestiae cum ut optio quam aliquam quos tempora quisquam labore praesentium maxime, lorem cupiditate ipsa laboriosam magnam error dolore nam sequi.";

// // let expReg = new RegExp('lorem', 'ig');
// // console.log(expReg.test(cadena));
// // console.log(expReg.exec(cadena));

// let expReg2 = /lorem{1}/ig;
// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));


// ------------------------------------------------

// Class 5 - Función Anónima Autoejecutable

/*
(function() <- funcion {
    console.log('Hello World');
}) <- paréntesis que envuelve a la funcion  () <- parentesis que ejecuta la function;
*/

// alert('Hello');
// (function() {
//     console.log('Función Anónima Autoejecutable IIFE');
// })();



// (function(d, w, c) {

//     c.log('Función Anónima Autoejecutable con parametros');
//     console.log(d);
//     console.log(w);
//     console.log(c);

// })(document, window, console);

// //Formas de escribir las funciones Anónimas autoejecutables

// //Clásica
// (function() {
//     console.log('Versión Clásica');
// })();

// //La Crockford (JavaScript The Good Parts)
// ((function() {
//     console.log('Versión Crockford');
// })());

// //Unaria
// +function() {
//     console.log('Versión Unaria');
// }();

// //Facebook
// !function() {
//     console.log('Versión Facebook');
// }();

// ------------------------------------------------

// Class 5 - 



// ------------------------------------------------