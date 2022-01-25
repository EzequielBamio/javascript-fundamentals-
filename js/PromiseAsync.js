//############## Promise  ######################//

// let myPromesa = new Promise((resol, rejec) => {

//     let value = Math.round(Math.random());
//     const person = { name: 'Ezequiel', lastName: 'Bamio', Age: 20 }


//     if (value !== 0) {

//         console.log('Loading data...')
//         setTimeout(() => {

//             resol(person);

//         }, 5000);
//     } else {
//         rejec('Error! Data not found');
//     }

// });

// myPromesa
//     .then(value => console.log(value))
//     .catch(value => console.log(value));

//############## Async and Await  ######################//

async function getData() {

    let myPromise = new Promise((resol) => {

        const person = { name: 'Ezequiel', lastName: 'Bamio', Age: 20 }

        console.log('Loading data...')
        setTimeout(() => {

            resol(person);

        }, 5000);


    });
    const person2 = { name: 'Candela', lastName: 'Rios', Age: 21 }
    console.log(person2);

    console.log('Start: Await...');
    console.log(await myPromise);
    console.log('End: Await');
    const person3 = { name: 'Pedro', lastName: 'Gimenez', Age: 22 }
    console.log(person3);

}


getData();