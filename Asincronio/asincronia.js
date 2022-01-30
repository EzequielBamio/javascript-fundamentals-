// # Temporizadores.

//                        arrow function  
// setTimeout( ( parameters ) => { ... }, time ( milise ) )

// console.log('Start');
// setTimeout( () => { console.log('Hello! This is executing a setTimeout after 1 sec'); }, 1000 );

// setInterval( () => { console.log('This is executing a setInterval every 3 second') }, 3000 );

// setInterval( () => { console.log(new Date().toLocaleTimeString() ) }, 1000 );

// console.log('Start')
// let timer = setTimeout( () => { console.log(new Date().toLocaleTimeString() ) }, 1000 );
// console.log('Before clear()');

// clearTimeout(timer);
// console.log('After clear()');

// console.log('Start')
// let timer = setInterval( () => { console.log(new Date().toLocaleTimeString() ) }, 1000 );


// setTimeout( () => {
//     clearInterval(timer);
//     console.log('Finished'); 
// }, 5000 );

//-------------------------------

// # Asincronía y el Event Loop

    /*  Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:
     Procesamiento Single thread y Multi thread.
     Operaciones de CPU y Operaciones de I / O.
     Operaciones Concurrentes y Paralelas.
     Operaciones Bloqueantes y No Bloqueantes.
     Operaciones Síncronas y Asíncronas.
     Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).
     */


    // //Código Síncrono Bloquenate
    // (() => {
    //   console.log("Código Síncrono");
    //   console.log("Inicio");
    //   function dos() {
    //     console.log("Dos");
    //   }
    //   function uno() {
    //     console.log("Uno");
    //     dos();
    //     console.log("Tres");
    //   }
    //   uno();
    //   console.log("Fin");
    // })();
    
    // console.log("********************");

    // //Código Asíncrono No Bloquenate
    // (() => {
    //   console.log("Código Asíncrono");
    //   console.log("Inicio");
    //   function dos() {
    //     setTimeout(function () {
    //       console.log("Dos");
    //     }, 1000);
    //   }
    //   function uno() {
    //     setTimeout(function () {
    //       console.log("Uno");
    //     }, 0);
    //     dos();
    //     console.log("Tres");
    //   }
    //   uno();
    //   console.log("Fin");
    // })();

//-------------------------------

// # Callbacks

// function cuadradoCallback( value, callback ) {
//     setTimeout( () => {
//         callback(value, value * value);
//     }, 0 | Math.random() * 1000 );
// }

// cuadradoCallback(0, ( value, result ) => {
//     console.log('Inicia callback');
//     console.log(`Callback: ${ value }, ${ result }`);
//     cuadradoCallback(1, ( value, result ) => {
//         console.log(`Callback: ${ value }, ${ result }`);
//         cuadradoCallback(2, ( value, result ) => {
//             console.log(`Callback: ${ value }, ${ result }`);
//             cuadradoCallback(3, ( value, result ) => {
//                 console.log(`Callback: ${ value }, ${ result }`);
//                 cuadradoCallback(4, ( value, result ) => {
//                     console.log(`Callback: ${ value }, ${ result }`);
//                     cuadradoCallback(5, ( value, result ) => {
//                         console.log(`Callback: ${ value }, ${ result }`);
//                         console.log('Fin Callback');
//                         console.log('Callback Hell !!!!');
//                         console.log('http://callbackhell.com/');
//                     });
//                 });
//             });
//         });
//     });   
// });

//-------------------------------

// # Promises

// function cuadradoPromise( value ) {
//     if( typeof value !== 'number') 
//     { return Promise.reject(`Error, el valor "${ value }" ingresado no es un número.`); }

//     return new Promise( ( resolve, reject ) => {
//         setTimeout( () => {
//            resolve({
//                value,
//                result: value * value
//            });
//         }, 0 | Math.random() * 1000 );
//     });
// }

// cuadradoPromise(0)
//                 .then( obj => {
//                     console.log('Inicio Promise');
//                     console.log(`Promise: ${ obj.value }, ${ obj.result }`);
//                     return cuadradoPromise(1);
//                 })
//                 .then( obj => {
//                     console.log(`Promise: ${ obj.value }, ${ obj.result }`);
//                     return cuadradoPromise(2);
//                 })
//                 .then( obj => {
//                     console.log(`Promise: ${ obj.value }, ${ obj.result }`);
//                     return cuadradoPromise('3');
//                 })
//                 .then( obj => {
//                     console.log(`Promise: ${ obj.value }, ${ obj.result }`);
//                     return cuadradoPromise(4);
//                 })
//                 .then( obj => {
//                     console.log(`Promise: ${ obj.value }, ${ obj.result }`);
//                     return cuadradoPromise(5);
//                 })
//                 .then( obj => {
//                     console.log(`Promise: ${ obj.value }, ${ obj.result }`);
//                     console.log('Fin Promise');
//                 })
//                 .catch( err => console.error( err ) );

//-------------------------------

// # Async - Await

function cuadradoPromise( value ) {
    if( typeof value !== 'number') 
    { return Promise.reject(`Error, el valor "${ value }" ingresado no es un número.`); }

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
           resolve({
               value,
               result: value * value
           });
        }, 0 | Math.random() * 1000 );
    });
}

async function funcionAsincronaDeclarada () {
    try{
        console.log('Inicio Async Function');
        
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise('4');
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);

        console.log('Fin Async Function');
    
    }catch( err ) {
        console.error(err);
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
    try{
        console.log('Inicio Async Function');
        
        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise('10');
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);
        obj = await cuadradoPromise(11);
        console.log(`Async Function: ${ obj.value }, ${ obj.result }`);

        console.log('Fin Async Function');
    
    }catch( err ) {
        console.error(err);
    }
}

funcionAsincronaExpresada();