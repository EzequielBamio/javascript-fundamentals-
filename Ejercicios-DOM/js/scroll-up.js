export function scrollUp(btnScroll) {
    const $scrollUp = document.querySelector(btnScroll);
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        // if(window.scrollY > 600) {
        if(scrollTop > 600) {
            $scrollUp.classList.remove('hidden');
        }else {
            $scrollUp.classList.add('hidden');
        }
    });
    
    document.addEventListener('click', (e) => {
        if(e.target.matches(btnScroll)) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
                // left: 0
            });
        }
    });


    // $scrollUp.addEventListener('click', () => {
    //     window.scroll(window.scrollX, 0);
    // });


}