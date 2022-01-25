
//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
console.log('---- Ejercicio 1 ----');
const reverse = (s = "") => 
    (!s) 
    ? 'You did not enter any string'
    : s.split('').reverse().join("");
    // : s.split('').reverse().toString().replaceAll(',', '');

  

reverse();
console.log(reverse('Hola Mundo'));  


//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.log('---- Ejercicio 2 ----');

const countRepeatWord = (text = "", word = "") => 
    (!text)
    ? console.warn('You did not enter any string')
    : (!word)
       ? console.warn('You did not enter any word')
       : console.log( ( (text.split(' ') ).filter( w => w === word) ).length);
  
countRepeatWord("hola mundo adios mundo", "mundo");


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.log('---- Ejercicio 3 ----');

const isPalindromo = ( word = "" ) =>
    (!word)
    ? console.warn('You did not enter any string')
    : console.log( ( reverse(word) ).toLowerCase() === word.toLowerCase() ) 

isPalindromo('Salas');

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.log('---- Ejercicio 4 ----');

const replacePatron = (patron = "", pReplace = "") =>
    (!patron || !pReplace)
    ? console.warn('You did not enter any string')
    : console.log(patron.replaceAll(pReplace, ''));
    //: console.log(patron.replace(new RegExp(pReplace, 'ig'), ''));


replacePatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");