const d = document;

export function filterSearch(search, card) {
    const $cards = d.querySelectorAll(card);
          
        d.addEventListener('keyup', (e) => {
            if(e.target.matches(search)) {
                // console.log(e.key);
                // console.clear();
                // console.log(e.target.value);
                // console.log($cards)

                if(e.key === 'Escape') { e.target.value = ''; }

                $cards.forEach( (el) => {
                    el.innerText.toLowerCase().includes(e.target.value.toLowerCase())
                        ? el.classList.remove('filter')
                        : el.classList.add('filter')
                });
            }
        });


}