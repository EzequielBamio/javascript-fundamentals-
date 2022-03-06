const d = document;
const w = window;
export function videoSmart() {
    const $videos = d.querySelectorAll('video[data-video]');

    const callback = (entries) => { 
        entries.forEach( (entry) => {
            const id = entry.target.id;

            if(entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
            
            w.addEventListener('visibilitychange', (e) => 
                (d.visibilityState === 'visible')
                ? entry.target.play()
                : entry.target.pause()
            );
        });

    }

    const observe = new IntersectionObserver(callback, {
        threshold: 0.5
    });

    $videos.forEach( (el) => observe.observe(el) )

}