console.log('---- Ejercicio 15 ----');
//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// const numberConverter = ( number = undefined,  base ) => {
//     if(!number || isNaN(number)) {
//         console.warn(`${ number } is not a number`);
//         return;
//     }
//     if(base === 2) {
//         let arrNumber = number.toString().split('').reverse();
//         let numberDecimal = 0;

//         for(let i = 0; i < arrNumber.length; i++) {
//             numberDecimal +=  arrNumber[i] * Math.pow(2, i);
//         }
//         console.log(numberDecimal);
//     }else {

//         if(base === 10) {
//             let numberBinario = '';
//             while(number >= 1)
//             {
//                 if(number % 2 === 0) {
//                     numberBinario += '0';
//                 }else {
//                     numberBinario += '1';
//                 }
        
//                 number = Math.floor(number /= 2);
//             }
//             console.log( numberBinario.split('').reverse().join('') );
//         }else {
//             console.warn('The base is not correct');
//         }
//     }
// }

const numberConverter = ( number = undefined,  base = undefined ) => {
    if(!number || typeof number !== 'number') {
        return console.warn(`"${ number }" is not a valid number`);
    }
    if(base === 2) {
        console.log(`${ number } base ${ base } = ${parseInt(number, base)} a base 10`);

    }else {

        if(base === 10) {
            console.log(`${ number } base ${ base } = ${number.toString(2)} a base 2`);
        }else {
            console.warn(`The base "${ base }" is not correct`);
        }
    }
}

numberConverter();
numberConverter(11100);
numberConverter('28');
numberConverter(11100, 2);
numberConverter(100, 2);
numberConverter(28, 10);
numberConverter(4, 10);



console.log('---- Ejercicio 16 ----');
//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const discount = ( price = 0, discount = 0 ) => 
    (price < 0 || discount < 0)
    ? console.warn('The price or discount cannot  be  less than "0"')
    : ( isNaN(price) || isNaN(discount) ) 
      ? console.warn( 'The price or discount is not a number' )
      : console.log( price * ( (100 - discount) / 100 ) );

discount(1000, 20);
discount(500, 20);



console.log('---- Ejercicio 17 ----');
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 38 años (en 2022).

const countYears = ( date = undefined ) => 
    ( !date ) 
    ? console.warn('You did not enter any Date')
    : console.log( (new Date().getFullYear()) - date.getFullYear() );


countYears();
countYears( new Date(1984,4,23) );
countYears( new Date(2001,4,14) );
