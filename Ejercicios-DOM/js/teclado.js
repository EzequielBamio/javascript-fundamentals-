const d = document;

/*
KeyUp: Cuando soltamos la tecla.
KeyDown: Cuando presionamos la tecla.
KeyPress: Cuando mantenemos presionada la tecla.
*/
export function shortcuts( e ) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`CTRL: ${e.ctrlKey}`);
    // console.log(`ALT: ${e.altKey}`);
    // console.log(`SHIFT: ${e.shiftKey}`);

    // console.log(e);

    if(e.key === 'a' && e.ctrlKey) {
        alert('lanzaste una alerta con el teclado');
    }
    if(e.key === 'c' && e.ctrlKey) {
        confirm('lanzaste una confirmacion con el teclado');
    }
    if(e.key === 'p' && e.ctrlKey) {
        prompt('lanzaste un aviso con el teclado');
    }
}

/*
ArrowUp: 38
ArrowDown: 40
ArrowLeft: 37
ArrowRight: 39
*/
let width = 0;

export function moveBall( e ) {
    const $ball = d.querySelector('.ball');
    if(e.keyCode === 39) {
        $ball.setAttribute('style', `transform: translateX(${width + 1}px);`)
        console.log('hola')
    }
    console.log($ball.className)
}