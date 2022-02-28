import { alarm, digitalClock } from "./reloj.js";
import hamburgerMenu from "./menu_hamburger.js";
import { moveBall, shortcuts } from "./teclado.js";
import { countdown } from "./cuenta_regresiva.js";
import { scrollUp } from "./scroll-up.js";
import { darkTheme } from "./tema_oscuro.js";
import { resposiveMedia } from "./responsive.js";
import { responsiveTester } from "./responsive_tester.js";
import { userDeviceInfo } from "./deteccion_dispositivos.js";
import { detectionConnection } from "./deteccion_conexion.js";
import { webCam } from "./deteccion_webcam.js";
import { getGeolocation } from "./deteccion_geolocalizacion.js";
import { filterSearch } from "./filtros_busqueda.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#reloj-activar', '#reloj-desactivar');
    alarm('./assets/alarma.mp3', '#alarma-activar', '#alarma-desactivar');
    countdown('countdown', 'Apr 14, 2022 08:30:00', 'Feliz Cumpleaño, Ezequiel Bamio!');
    scrollUp('.scroll-top-btn');
    
    resposiveMedia('youtube', '(min-width: 1024px)', '<a href="https://www.youtube.com/watch?v=qJYBZDmtzLk" rel="noopener" target="_blank">Ver Video</a>', '<iframe width="560" height="315" src="https://www.youtube.com/embed/qJYBZDmtzLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    resposiveMedia('gmap', '(min-width: 1024px)', '<a href="https://goo.gl/maps/YYawhXy89qHMHDq99" rel="noopener" target="_blank">Ver Mapa</a>', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369104.61887164915!2d-79.37805805!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2sar!4v1645616399459!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');

    responsiveTester('responsive-tester');
    
    userDeviceInfo('user-device');
    
    webCam('webcam');
    
    getGeolocation('geolocation');
    
    filterSearch('.card-filter', '.card');
});


d.addEventListener('keydown', (e) => {
    shortcuts( e );
    moveBall( e, '.ball', '.stage', '.ball-soccer' );
});

darkTheme('.dark-theme-btn', 'dark-mode');

detectionConnection();
