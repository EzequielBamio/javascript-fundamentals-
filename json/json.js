const json = {
    "cadena": "eze",
    "numero": "20",
    "booleano": "true",
    "arreglo": ["futbol", "programar", "actividad fisica"],
    "objeto": {
        "instagram": "@bamioezequiel",
        "email": "bamioezequielok@gmail.com"
    },
    "nulo": "null"
};

// console.log(JSON);
// console.log(JSON.parse());
// console.log(JSON.stringify());

console.log('### parse');

console.log( JSON.parse( "{}"      ) );
console.log( JSON.parse( "[1,2,3]" ) );
console.log( JSON.parse( "true"    ) );
console.log( JSON.parse( "false"   ) );
console.log( JSON.parse( "19"      ) );
// console.log( JSON.parse( "Hola Mundo" ) );
console.log( JSON.parse( "null"    ) );
// console.log( JSON.parse( "undefined" ) );


console.log( JSON.parse('{"cadena":"eze","numero":"20","booleano":"true","arreglo":["futbol","programar","actividad fisica"],"objeto":{"instagram":"@bamioezequiel","email":"bamioezequielok@gmail.com"},"nulo":"null"}') );

console.log('### stringify');

console.log( JSON.stringify( {}             ) );
console.log( JSON.stringify( [1,2,3]        ) );
console.log( JSON.stringify( true           ) );
console.log( JSON.stringify( false          ) );
console.log( JSON.stringify( 19             ) );
console.log( JSON.stringify( 'Hola Mundo'   ) );
console.log( JSON.stringify( null           ) );
console.log( JSON.stringify( undefined      ) );
console.log( JSON.stringify( { x: 2, y: 3 } ) );


console.log( JSON.stringify( json ) );

