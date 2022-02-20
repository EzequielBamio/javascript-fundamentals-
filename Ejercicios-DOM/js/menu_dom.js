import { alarm, digitalClock } from "./reloj.js";
import hamburgerMenu from "./menu_hamburger.js";
import { moveBall, shortcuts } from "./teclado.js";
import { countdown } from "./cuenta_regresiva.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#reloj-activar', '#reloj-desactivar');
    alarm('./assets/alarma.mp3', '#alarma-activar', '#alarma-desactivar');
    countdown('countdown', 'Apr 14, 2022 08:30:00', 'Feliz Cumpleaño, Ezequiel Bamio!');
});

d.addEventListener('keydown', (e) => {
    shortcuts( e );
    moveBall( e, '.ball', '.stage', '.ball-soccer' );
});