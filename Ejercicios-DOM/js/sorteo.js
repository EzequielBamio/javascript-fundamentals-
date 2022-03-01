const d = document;

export function lottery(items, btn) {
    const $items = d.querySelectorAll(items);

    const getWinner = (list) => {
        let numberWin = Math.floor(Math.random() * list.length);
        let winner = list.item(numberWin);

        return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener('click', (e) => {
        if(e.target.matches(btn)) {
            let result = getWinner($items);

            // alert(result);

            console.log(result);
        }
    });

    // Sorteo para redes sociales desde la consola

    const getWinnerComment = (selector) => {
        const $players = document.querySelectorAll(selector),
              numberWin = Math.floor(Math.random() * $players.length),
              winner = $players.item(numberWin);

        return `El ganador es: ${winner.textContent}`;
    }

    // YT: getWinnerComment('ytd-comment-thread-renderer #author-text span');


}