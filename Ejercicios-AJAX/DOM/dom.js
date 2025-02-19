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

// console.log('******* Estilos y variables en CSS *******');

// const $linkDOM = document.querySelector('.link-dom');

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute('style'));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

// $linkDOM.style.setProperty('text-decoration', 'none');
// $linkDOM.style.setProperty('display', 'block');
// $linkDOM.style.setProperty('text-align', 'center');
// $linkDOM.style.width = '50%;';
// $linkDOM.style.marginLeft = 'auto';
// $linkDOM.style.marginRight = 'auto';
// $linkDOM.style.padding = '1rem';
// $linkDOM.style.borderRadius = '0.5rem';

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute('style'));
// console.log(window.getComputedStyle($linkDOM));

// //Variables CSS - Custom Properties CSS
// const $html = document.documentElement,
//       $body = document.body;

// let varDarkColor = window.getComputedStyle($html).getPropertyValue('--dark-color'),
// varYelloColor = window.getComputedStyle($html).getPropertyValue('--yellow-color');
      
// console.log(varDarkColor, varYelloColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYelloColor;

// $html.style.setProperty('--dark-color', '#000');
// varDarkColor = window.getComputedStyle($html).getPropertyValue('--dark-color');

// $body.style.setProperty('background-color', varDarkColor);

// console.log('******* Clases en CSS *******');

// const $card = document.querySelector('.card');

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains('rotate-45'));
// $card.classList.add('rotate-45');
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove('rotate-45');
// console.log($card.classList.contains('rotate-45'));
// $card.classList.toggle('rotate-45');
// console.log($card.classList.contains('rotate-45'));
// $card.classList.toggle('rotate-45');
// console.log($card.classList.contains('rotate-45'));
// $card.classList.toggle('rotate-45');
// $card.classList.replace('rotate-45', 'rotate-135');
// $card.classList.add('opacity-80', 'sepia');
// $card.classList.remove('opacity-80', 'sepia');
// $card.classList.toggle('opacity-80', 'sepia');

// console.log('******* Texto y HTML *******');

// const $whatIsDom = document.getElementById('que-es');
// let text = `
//     <p>
//     El modelo de Objetos del Documento (<b><i> DOM - Document Object Model </i></b>) es una API para documentos en HTML y XML.
//     </p>
//     <p>
//     Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
//     </p>
//     <p>
//     <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
// `;

// console.log($whatIsDom);

// // $whatIsDom.innerText = text;
// $whatIsDom.textContent = text;
// $whatIsDom.innerHTML = text;
// $whatIsDom.outerHTML = text;

// console.log('******* Recorriendo el DOM *******');

// const $cards = document.querySelector('.cards');

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest('div'));
// console.log($cards.closest('body'));
// console.log($cards.children[3].closest('section'));

// console.log('******* Creando elementos y fragmentos *******');

// const $figure = document.createElement('figure'),
//       $img = document.createElement('img'),
//       $figcaption = document.createElement('figcaption'),
//       $figcaptionText = document.createTextNode('Animals'),
//       $cards = document.querySelector('.cards'),
//       $figure2 = document.createElement('figure');

// $img.setAttribute('src', 'https://placeimg.com/200/200/animals');
// $img.setAttribute('alt', 'Animals');
// $figure.classList.add('card')

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `
//  <img src="https://placeimg.com/200/200/people" alt="People">
//  <figcaption>People</figcaption>
// `;

// $figure2.classList.add('card');
// $cards.appendChild($figure2);

// const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'],
//       $ul = document.createElement('ul');

// document.write('<h3>Estaciones del Año</h3>');

// document.body.appendChild($ul);

// estaciones.forEach( ( el ) => {
//     const $li = document.createElement('li');
//     $li.textContent = el;
//     $ul.appendChild($li);
// });

// const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'],
//       $ul2 = document.createElement('ul');

// document.write('<h3>Continentes del Mundo</h3>');
// document.body.appendChild($ul2);
// $ul2.innerHTML = '';
// continentes.forEach( (el) => $ul2.innerHTML += `<li>${el}</li>`);

// const meses = [
//     'Enero',
//     'Febrero',
//     'Marzo',
//     'Abril',
//     'Mayo',
//     'Junio',
//     'Julio',
//     'Agosto',
//     'Septiembre',
//     'Octubre',
//     'Noviembre',
//     'Diciembre',
// ],
//      $ul3 = document.createElement('ul'),
//      $fragment = document.createDocumentFragment();

// meses.forEach( (el) => {
//     const $li = document.createElement('li');
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });

// document.write('<h3>Meses del año</h3>');
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

// console.log('******* Templates HTML *******');

// const $cards = document.querySelector('.cards'),
//       $template = document.getElementById('template-card').content,
//       $fragment = document.createDocumentFragment(),
//       cardContent = [
//           {
//               title: 'Tecnologia',
//               img: 'https://placeimg.com/200/200/tech',
//           },
//           {
//             title: 'Animals',
//             img: 'https://placeimg.com/200/200/animals',
//           },
//           {
//             title: 'Arquitectura',
//             img: 'https://placeimg.com/200/200/arch',
//           },
//           {
//             title: 'Gente',
//             img: 'https://placeimg.com/200/200/people',
//           },
//           {
//             title: 'Naturaleza',
//             img: 'https://placeimg.com/200/200/nature',
//           },
//       ];

// cardContent.forEach( (el) => {
//     $template.querySelector('img').setAttribute('src', el.img);
//     $template.querySelector('img').setAttribute('alt', el.title);
//     $template.querySelector('figcaption').textContent = el.title;

//     let $clone = document.importNode($template, true);
//     $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

// console.log('******* Modificando Elementos (Old Style) *******');

// const $cards = document.querySelector('.cards'),
//       $newCard = document.createElement('figure'),
//       $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard.classList.add('card');

// // $cards.replaceChild($newCard, $cards.children[2]);
// // $cards.removeChild($cards.lastElementChild);
// // $cards.insertBefore($newCard, $cards.firstChild);

// document.body.appendChild($cloneCards);

// console.log('******* Modificando Elementos (Cool Style) *******');

/*
.insertAdjacent
 .insertAbjacentElement(position, elemento)
 .insertAbjacentHTML(position, html)
 .insertAbjacentText(position, text)

Posiciones:
 beforebegin(hermano anterior)
 afterbegin(primer hijo)
 beforeend(ultimo hijo)
 afterend(hermano siguiente)
*/

// const $cards = document.querySelector('.cards'),
//       $newCard = document.createElement('figure'),
//       $cloneCards = $cards.cloneNode(true);

// let $contenCard = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
// `; 

// $newCard.classList.add('card');

// $newCard.insertAdjacentHTML('beforeend', $contenCard);
// $newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any');
// $cards.insertAdjacentElement('afterbegin', $newCard);

// // $cards.prepend($newCard);
// // $cards.append($newCard);
// // $cards.before($newCard);
// // $cards.after($newCard);

// console.log('******* Manejadores de Eventos *******');

// function holaMundo() {
//     alert('Hello World');
//     console.log(event);
// }

// function saludar(nombre = 'Desconocido') {
//     alert(`Hola ${nombre}`);
//     console.log(event);
// }

// const $eventoSemantico = document.getElementById('evento-semantico')
// $eventoMultiple = document.getElementById('evento-multiple'),
// $eventoRemover = document.getElementById('evento-remover');

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//     alert('Hola Mundo Manejador de Eventos Semantico');
//     console.log(e);
//     console.log(event);
// };

// $eventoMultiple.addEventListener('click', holaMundo);
// $eventoMultiple.addEventListener('click', (e) => {
//     alert('Hola Mundo Manejador de Eventos Multiple');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(event);
// });

// console.log('******* Eventos con parametros y remover eventos *******');

// // $eventoMultiple.addEventListener('click', saludar);
// $eventoMultiple.addEventListener('click', () => {
//     saludar();
//     saludar('Eze');
// });

// const removerDobleClick = (e) => {
//     alert(`Removiendo el evento de tipo ${e.type}`);
//     console.log(e);

//     $eventoRemover.removeEventListener('dblclick', removerDobleClick);
//     $eventoRemover.disabled = true;
// }

// $eventoRemover.addEventListener('dblclick', removerDobleClick);

// console.log('******* Flujo de eventos (Burbuja y captura) *******');

// const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
//  $linkEventos = document.querySelector('.eventos-flujo a');

// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
//     e.stopPropagation();
// } 

// console.log($divsEventos);

// $divsEventos.forEach( (div) => {
//     //Fase de burbuja
//     div.addEventListener('click', flujoEventos);
//     // div.addEventListener('click', flujoEventos, false);

//     //Fase de captura
//     // div.addEventListener('click', flujoEventos, true);
//     // div.addEventListener('click', flujoEventos, {
//     //     capture: true,
//     //     once: true
//     // });
// });

// console.log('******* stopPropogación & preventDefault *******');

// $linkEventos.addEventListener('click', (e) => {
//     alert('Hello World');
//     e.preventDefault();
//     e.stopPropagation();
// });

// console.log('******* Delegación de Eventos *******');

// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
// } 

// document.addEventListener('click', (e) => {
//     console.log('Click en', e.target);

//     if( e.target.matches('.eventos-flujo div') ) {
//         flujoEventos(e);
//     }

//     if( e.target.matches('.eventos-flujo a') ) {
//         alert('Hello World');
//         e.preventDefault();
//     }
// });

// console.log('******* Propiedades y Eventos *******');

// window.addEventListener('resize', (e) => {
//     console.clear();
//     console.log('******** Evento Risize ********');
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
    
//     console.log(e);
// });

// window.addEventListener('scroll', (e) => {
//     console.clear();
//     console.log('******** Evento Scroll ********');
//     console.log(window.scrollY);
//     console.log(window.scrollX);
    
//     console.log(e);
// });

// window.addEventListener('load', (e) => {
//     // console.clear();
//     console.log('******** Evento Load ********');
//     console.log(window.screenX);
//     console.log(window.screenY); 
    
//     console.log(e);
// });

// // $(window).load(funcion);
// // $(document).ready(funcion);
// // $(document).on('ready', funcion);

// document.addEventListener('DOMContentLoaded', (e) => {
//     // console.clear();
//     console.log('******** Evento DOMContentLoaded ********');
//     console.log(window.screenX);
//     console.log(window.screenY); 
    
//     console.log(e);
// });

// console.log('******* Metodos *******');
// // window.alert('Alerta');
// // window.confirm('Confirmación');
// // window.prompt('Aviso');

// const $btnAbrir = document.getElementById('abrir-ventana'),
//       $btnCerrar = document.getElementById('cerrar-ventana'),
//       $btnImprimir = document.getElementById('imprimir-ventana');

// let ventana;

// $btnAbrir.addEventListener('click', (e) => {
//     ventana = window.open('https://google.com/');
// });

// $btnCerrar.addEventListener('click', (e) => {
//     // window.close();
//     ventana.close();;
// });

// $btnImprimir.addEventListener('click', (e) => {
//     window.print();
// });

console.log('******* Objeto URL (location) *******');

// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hasf);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);
// location.reload();

// console.log(history);
// console.log(history.length);
// console.log(history.scrollRestoration);
// console.log(history.state);
// history.back();
// history.back(2);
// history.forward();
// history.forward(2);
// history.go(3);
// history.go(0);
// history.go(-1);

// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);



