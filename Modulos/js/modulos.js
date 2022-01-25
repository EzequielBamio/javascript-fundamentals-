import saludar, { Saludar, PI, usuario } from './constantes.js'
import { arimetica as calculos } from './aritmetica.js'
console.log('Modulo JS');

console.log('Constante PI importada: ', PI);
console.log('Usuario: ', usuario);
console.log(calculos.sumar(5, 5));
//console.log(arimetica.restar(10, 5));
saludar();
const saludo = new Saludar();
saludo;