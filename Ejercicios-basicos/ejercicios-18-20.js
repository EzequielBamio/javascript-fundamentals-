console.log('--- Ejercicio 18 ---');
//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

 const countTypeLetter = ( text = '' ) => {
    if(!text)
    { return console.warn('You did not enter any text.') }

    if(typeof text !== 'string')     
    { return console.warn('That is not a string') }

    text = text.replaceAll(' ','').toLowerCase();

    let countVowel = 0;
    let countConsonant = 0;
    for(let letter of text ) {  
        if( /[aáAÁeéEÉiíIÍoóOÓuúUÚ]/.test(letter) ) {
            countVowel++;
        }else {
            countConsonant++;
        }
    }   
    return console.log(`Vowel: ${ countVowel } - Consonant: ${ countConsonant }`);
} 

countTypeLetter();
countTypeLetter(1);
countTypeLetter('Hola Mundo');



console.log('--- Ejercicio 19 ---');
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Ezequiel Bamio") devolverá verdadero.

const validateName = ( name = '' ) => {
    if(!name)
    { return console.warn('You did not enter any name.') }

    if(typeof name !== 'string')     
    { return console.warn('That is not a string') }

    if( /^[A-Za-zÑñáÁéÉíÍóÓúÚ\s]+$/g.test(name) ) {
        return console.log(`The "${ name }" is correct`);
    }else {
        return console.warn(`The "${ name }" is NOT correct`);
    }
} 

validateName("ezequi el Bamio, 20");
validateName();
validateName("Ezequiel-bamio");
validateName("Ezequiel Bamio");



console.log('--- Ejercicio 20 ---');
//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("bamioezequielok@gmail.com") devolverá verdadero.

const validateEmail = ( email = '') => {
    if(!email)
    { return console.warn('You did not enter any name.') }

    if(typeof email !== 'string')     
    { return console.warn('That is not a string') }

    if( /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email) ) {
       return console.log(`The email "${ email }" is correct`);
    }

    return console.warn(`The email "${ email }" is NOT correct`);
      
    
}

validateEmail(); 
validateEmail("email"); 
validateEmail("bamioezequielokgmail.com"); 
validateEmail("bamioezequielok@gmail.com"); 