const d = document;
const w = window;
export function ResponsiveTester(form) {
    const $form = d.getElementById(form);
    let ventana;

    d.addEventListener('submit', (e) => {
        if(e.target === $form){
            e.preventDefault();
            ventana = w.open($form.url.value, 'tester', `innerWidth=${$form.ancho.value}, innerHeight=${form.alto.value}`); 
        }
    });

    d.addEventListener('click', (e) => {
       if(e.target === $form.cerrar){ ventana.close(); }
    });

}