const d = document,
      w = window,
      n = window.navigator;

export function detectionConnection() {

    const isOnline = () => {
        const $div = d.createElement('div');

        if(n.onLine) {
            $div.textContent = 'Conexión Restablecida';
            $div.classList.add('online');
            $div.classList.remove('offline');
        }else {
            $div.textContent = 'Conexión Perdida';
            $div.classList.add('offline');
            $div.classList.remove('online');
        }

        d.body.insertAdjacentElement('afterbegin', $div);
        setTimeout(() => {
            d.body.removeChild($div);
        }, 1500);
    };

    w.addEventListener('online', () => isOnline() );
    
    w.addEventListener('offline', () => isOnline() );
}