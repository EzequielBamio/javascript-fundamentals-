console.log('---- Ejercicio 9 ----');
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numberRandom = () => Math.round(Math.random() * 100) + 500

console.log(numberRandom());


console.log('---- Ejercicio 10 ----');
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numberCapicua = ( number = 0 ) =>
    (!number)
    ? console.warn('You did not enter any number')
    : (typeof number !== 'number')
      ? console.warn(`'${number}' is not a number`)
      : console.log( number.toString().split('').reverse().join('') === number.toString() );

numberCapicua('asd');
numberCapicua(2002);
numberCapicua(2000);
numberCapicua(20.02);


console.log('---- Ejercicio 11 ----');
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const calculateFactorial = ( number = 0 ) => {
    if(number < 2 || number > 19){
        return console.warn(`The ${ number } is an invalid number`);
    }else {
        let rtn = 1;
        for(let i = number; i > 1; i--){
            rtn *= i;
        }
        return console.log(`The factorial of ${ number } is ${ rtn }.`);
    }
}
calculateFactorial();
calculateFactorial(5);
calculateFactorial(14);
