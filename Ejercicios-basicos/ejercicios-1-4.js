//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const countCharacters = (text = "") => 
    (!text) 
    ? console.warn('You did not enter any string')
    : (typeof(text) === 'string') 
        ? console.log(`"${text}" has ${text.length} characters`)
        : console.error('The input is not a string');
     
countCharacters();
countCharacters({});
countCharacters('Hola Mundo');


console.log('---------------------------');

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const textCut = (text = "", length = 0) => 
    (!text) 
    ? console.warn('You did not enter any string')
    : (typeof(text) === 'string' && length > 0) 
        ? console.log(text.slice(0, length))
        : console.error('The text is not String or length is 0');
        

//Recordatorio 20:10

textCut();
textCut(5);
textCut('Hola Mundo');
textCut('Hola Mundo', 4);


console.log('---------------------------');

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


const textSeparator = (text = "", separator = "") =>

    (!text && !separator)
    ? console.warn('The text or the separator is empty')
    : (typeof(text) === 'string' && typeof(separator) === 'string')
        ? console.log(text.split(separator))
        : console.error('The text or the separator is not string ');
  
textSeparator();
textSeparator([]);
textSeparator('hola que tal', ' ');


console.log('---------------------------');

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const textRepeat = (text = "", repeat = 0) => {
    if (!text) {
        return console.warn('You did not enter any string');
    }else {
        if(typeof(text) === 'string' && repeat > 0) 
        {
            for (let i = 0; i < repeat; i++) {
                console.log(`${text}, ${i}`);
            }   
        }else {  
            return console.error('The text is not a String or repeat is 0');
        }
    }
};
    

textRepeat();
textRepeat('Hola Mundo', 0);
textRepeat('Hola Mundo', 3);