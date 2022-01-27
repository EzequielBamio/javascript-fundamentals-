console.log('--- Ejercicio 21 ---');
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrPow = ( numbers = [] ) => {

    if( !numbers.length ) { return console.warn('You did not enter any numbers') }
    if( !(numbers instanceof Array) ) { return console.warn('You did not enter any Array') }

    for(let num of numbers) {
        if( typeof num !== 'number' ) { return console.warn(`The value "${ num } is not a number"`) }
    }

    const auxNumbers = numbers.map( num => num*num );

    return console.log(`${ numbers } - Squared numbers: ${ auxNumbers }`);
}
 
arrPow([1, 4, 5]);
arrPow([]);
arrPow();



console.log('--- Ejercicio 22 ---');
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrNumberMaxMin = ( numbers = [] ) => {
    if( !numbers.length ) { return console.warn('You did not enter any numbers') }
    if( !(numbers instanceof Array) ) { return console.warn('You did not enter any Array') }

    for(let num of numbers) {
        if( typeof num !== 'number' ) { return console.warn(`The value "${ num } is not a number"`) }
    }

    return console.log( `Min: ${ Math.min(...numbers) } - Max: ${  Math.max(...numbers) }` )
}

arrNumberMaxMin();
arrNumberMaxMin([]);
arrNumberMaxMin([1, 4, 5, 99, -60]);


//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const numbersParity = ( numbers = [] ) => {
    if( !numbers.length ) { return console.warn('You did not enter any numbers') }
    if( !(numbers instanceof Array) ) { return console.warn('You did not enter any Array') }

    for(let num of numbers) {
        if( typeof num !== 'number' ) { return console.warn(`The value "${ num } is not a number"`) }
    }

    return console.log( { 
        pair: numbers.filter( num => num % 2 === 0),
        odd: numbers.filter( num => num % 2 === 1)
     });
}

numbersParity([1,2,3,4,5,6,7,8,9,0]);