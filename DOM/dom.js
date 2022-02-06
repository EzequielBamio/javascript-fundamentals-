// # Web APIs
// console.log(window);
// console.log(document);

// speechSynthesis.speak(new SpeechSynthesisUtterance('My name is Ezequiel and I am studying programming.'));

// # DOM

// console.log('******* Elementos del DOM *******');
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);
// document.write('<h2>Hello World from the DOM</h2>');

// console.log('******* Manejo del DOM *******');

// //No se usan
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('card'));
// console.log(document.getElementsByName('nombre'));
// //
// console.log(document.getElementById('menu'));
// console.log(document.querySelector('#menu'));
// console.log(document.querySelector('a'));
// console.log(document.querySelectorAll('a').length);
// document.querySelectorAll('a').forEach( ( e ) => console.log(e));
// console.log(document.querySelector('.card'));
// console.log(document.querySelectorAll('.card')[2]);
// console.log(document.querySelector('#menu li'));
// console.log(document.querySelectorAll('#menu li'));

// console.log('******* Atributos y Data-Attributes *******');

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));
// console.log(document.querySelector('.link-dom').href);
// console.log(document.querySelector('.link-dom').getAttribute('href'));

// document.documentElement.lang = 'en';
// console.log(document.documentElement.lang);

// document.documentElement.setAttribute('lang', 'es-ES');
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector('.link-dom');

// $linkDOM.setAttribute('target', '_blank');
// $linkDOM.setAttribute('rel', 'noopener');
// $linkDOM.setAttribute('href', 'https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction');
// console.log($linkDOM.hasAttribute('rel'));
// $linkDOM.removeAttribute('rel');
// console.log($linkDOM.hasAttribute('rel'));

// //Data-Attributes

// console.log($linkDOM.getAttribute('data-description'));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute('data-id', '3');
// console.log($linkDOM.dataset.id);
// $linkDOM.dataset.description = 'Modelo de Objeto del Documento';
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute('data-id'));
// $linkDOM.removeAttribute('data-id');
// console.log($linkDOM.hasAttribute('data-id'));

console.log('******* Estilos y variables en CSS *******');

const $linkDOM = document.querySelector('.link-dom');

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');
$linkDOM.style.setProperty('text-align', 'center');
$linkDOM.style.width = '50%;';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '0.5rem';

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log(window.getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
      $body = document.body;

let varDarkColor = window.getComputedStyle($html).getPropertyValue('--dark-color'),
varYelloColor = window.getComputedStyle($html).getPropertyValue('--yellow-color');
      
console.log(varDarkColor, varYelloColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYelloColor;

$html.style.setProperty('--dark-color', '#000');
varDarkColor = window.getComputedStyle($html).getPropertyValue('--dark-color');

$body.style.setProperty('background-color', varDarkColor);

