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
ArrowLeft: 37
ArrowUp: 38
ArrowRight: 39
ArrowDown: 40
*/
let x = 0;
let y = 0;

export function moveBall( e, ball, stage, ballSoccer ) {
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          $ballSoccer = d.querySelector(ballSoccer),
          limitsBall = $ball.getBoundingClientRect(),
          limitsStage = $stage.getBoundingClientRect(),
          limitsBallSoccer = $ballSoccer.getBoundingClientRect();


    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log(limitsBall);
    // console.log(limitsStage);
    // console.log(limitsBallSoccer);



    switch(e.keyCode) {
        case 37:
            if(limitsStage.left+25 < limitsBall.left) {
                x--;
                e.preventDefault();
            }
            break;
        case 38:
            if(limitsStage.top+25 < limitsBall.top) {
                y--;
                e.preventDefault();
            }
            break;
        case 39:
            if(limitsStage.right-25 > limitsBall.right) {
                x++;
                e.preventDefault();
            }
            break;
        case 40:
            if(limitsStage.bottom-25 > limitsBall.bottom) {
                y++;
                e.preventDefault();
            }
            break;
        case 88:
            $ball.style.border = `3px solid white`;
            setTimeout(() => {
                $ball.style.border = `none`;
            }, 200);
            if(limitsBall.left < limitsBallSoccer.left) {
                $ballSoccer.style.transform = `translate(${x*10}px, ${y*10}px)`;             
            }
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}
