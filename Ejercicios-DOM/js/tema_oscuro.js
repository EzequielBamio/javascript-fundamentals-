export function darkTheme(btn, classDark) {
    const $darkTheme = document.querySelector(btn),
          $selectores = document.querySelectorAll('[data-dark]');

    let moon = '🌙',
        sun = '🌞';
    console.log($selectores);
    document.addEventListener('click', (e) => {
        
        if(e.target.matches(btn)) {
            if($darkTheme.textContent === moon) {
                $darkTheme.textContent = sun;
                $selectores.forEach( (el) => el.classList.add(classDark) );
            }else {
                $darkTheme.textContent = moon;
                $selectores.forEach( (el) => el.classList.remove(classDark) );
            }
        }
    });
 
}