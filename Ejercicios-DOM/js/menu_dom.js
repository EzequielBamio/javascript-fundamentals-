import { alarm, digitalClock } from "./reloj.js";
import hamburgerMenu from "./menu_hamburger.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#reloj-activar', '#reloj-desactivar');
    alarm('./assets/alarma.mp3', '#alarma-activar', '#alarma-desactivar');
});
