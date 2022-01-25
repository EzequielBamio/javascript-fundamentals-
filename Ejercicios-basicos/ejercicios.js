/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/


function lengthChain(chain) {
    if (typeof(chain) === "string") {
        return chain.length;
    }
    throw 'Error: chain is not String';
}

try {
    console.log(lengthChain('Hola Mundo')); //10
    console.log(lengthChain('Hello World')); //11
    console.log(lengthChain([])); //-1
    console.log(lengthChain({})); //-1
    console.log(lengthChain(21)); //-1
} catch (error) {
    console.error(error);
}


//-------------------------------------

function textCut(text, cut) {
    if (typeof(text) === 'string' && cut > 0) {

        return text.slice(0, cut);
    }

    throw 'Error: The text is not a String or cut is 0';
}
try {
    console.log(textCut('Hola Mundo', 4));
    console.log(textCut('Hello World', 7));
    console.log(textCut('Ezequiel Bamio', 3));
    console.log(textCut('Ezequiel Bamio', 0));
} catch (error) {
    console.error(error);
}



//-------------------------------------

function textSeparator(text, separator) {
    if (typeof(text) === 'string' && text.length > 0 && typeof(separator) === 'string') {

        return text.split(separator);
    }

    throw 'Error: The text is not string or the text has 0 characters';
}

try {
    console.log(textSeparator('Hola que tal', ' '));
    console.log(textSeparator('Hello World, I am Ezequiel', ','));
    console.log(textSeparator('', 1));
} catch (error) {
    console.error(error);
}



//-------------------------------------

function textRepeat(text, repeat) {
    let rtnText = '';
    if (typeof(text) === 'string' && repeat > 0) {
        for (let i = 0; i < repeat; i++) {
            rtnText += text + ' ';
        }
    }

    if (rtnText === '') {
        throw 'Error: The text is not a String or repeat is 0';
    }

    return rtnText;
}
try {
    console.log(textRepeat('Hola Mundo', 3));
    console.log(textRepeat(2, 3));

} catch (error) {
    console.error(error);
}