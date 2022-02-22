const ls = window.localStorage;
export function darkTheme(btn, classDark) {
    const $darkTheme = document.querySelector(btn),
          $selectores = document.querySelectorAll('[data-dark]');

    let moon = '🌙',
        sun = '🌞';

    const lightMode = () => {
        $darkTheme.textContent = moon;
        $selectores.forEach( (el) => el.classList.remove(classDark) );
        ls.setItem('mode', sun)
    };

    const darkMode = () => {
        $darkTheme.textContent = sun;
        $selectores.forEach( (el) => el.classList.add(classDark) );
        ls.setItem('mode', moon)
    };

    document.addEventListener('click', (e) => {
        
        if(e.target.matches(btn)) {
            if($darkTheme.textContent === moon) {
                darkMode();
            }else {
                lightMode();
            }
        }
    });

    document.addEventListener('DOMContentLoaded', (e) => {
       if(ls.getItem('mode') === null) { ls.setItem('modo', sun); }

       if(ls.getItem('mode') === sun) { lightMode(); }
       if(ls.getItem('e') === moon) { darkMode(); }
    });
}

