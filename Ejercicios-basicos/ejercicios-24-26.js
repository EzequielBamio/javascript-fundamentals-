console.log('--- Ejercicio 24 ---');
//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const orderNumbers = ( numbers = [] ) => {
    if( !numbers.length ) { return console.warn('You did not enter any numbers') }

    const numbersOrdering =  { asc: [], desc: [] } 
    numbers.sort(( a, b ) => a - b);

    numbersOrdering.asc = numbers.slice(0);
    numbersOrdering.desc = numbers.slice(0).reverse();
    console.log(numbersOrdering);

} 
orderNumbers();
orderNumbers([]);
orderNumbers([7, 5,7,8,6]);



console.log('--- Ejercicio 25 ---');
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const removeDuplicates = ( elements = [] ) => { 
    if( !elements.length ) { return console.warn('You did not enter any elements') }

    for(let element of elements) {
        elements = elements.filter( e => e !== element)
        elements.push(element);
    } 

    console.log(elements);

} 
removeDuplicates(["x", 10, "x", 2, "10", 10, true, true]);



console.log('--- Ejercicio 26 ---');
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const average = ( numbers ) => {
    if( !numbers.length ) { return console.warn('You did not enter any numbers') }

    let acumNumber = 0;
    numbers.forEach( number => {
        acumNumber += number;
    });
    
    console.log('El promedio es: ' + acumNumber / numbers.length);
}
   
average([9,8,7,6,5,4,3,2,1,0]);