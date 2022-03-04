// 1024 px el menu se coloca en la parte derecha de la pantalla
// Inner exeption observe API scrollpy
const d = document;
export function scrollSpy() {
    const $sections = d.querySelectorAll('section[data-scroll-spy]');

    const callback = (entries) => {
        // console.log('entries', entries);

        entries.forEach( (entry) => {
            const id = entry.target.id;
            // console.log(entry); 

            if(entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');

            }
        });
    };

    const observer = new IntersectionObserver(callback, {
        // root: (toma el document por defecto),
        // rootMargin: '-250px',
        threshold: [0.5, 0.75],


    });
    // console.log(observer);

    $sections.forEach( (el) => observer.observe(el) );

}