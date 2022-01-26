console.log('---- Ejercicio 12 ----');
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const validateNumberPrime = ( number = 0 ) => {
    if(!number || number < 1 || typeof number !== 'number') {
        console.warn(`${ number } is not invalid number`);
    }else {
        for(let i = 2; i < number; i++){
            if(number % i === 0) {
                return console.log(`The number ${ number } is NOT Prime`);
            }
        }

        return console.log(`The number ${ number } is Prime`);
    }

}
validateNumberPrime(7);
validateNumberPrime(8);
validateNumberPrime('17');
validateNumberPrime(60);
validateNumberPrime(113);



console.log('---- Ejercicio 13 ----');
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const validateParity = ( number = 0 ) => 
    (!number || number < 1 || typeof number !== 'number') 
    ? console.warn(`${ number } is not valid number`)
    : (number % 2 === 0) 
      ? console.log(`The number "${ number }" is Pair`)
      : console.log(`The number "${ number }" is Odd`);

validateParity(29);
validateParity(2);
validateParity(13);
validateParity(17);
validateParity(20);



console.log('---- Ejercicio 14 ----');
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const converteDegrees = (amount = 0, grados = 'C') => 
    (grados.toUpperCase() === 'C')
      ? console.log( (amount * 9/5) + 32 )
      : (grados.toUpperCase() === 'F')
        ? console.log( (amount - 32) * 5/9 )
        : console.warn(`"${ grados }" is not valid ( (C)elsius - (F)ahrenheit )`);


converteDegrees(0, 'C');
converteDegrees(32, 'F')
converteDegrees(3, 'S')







