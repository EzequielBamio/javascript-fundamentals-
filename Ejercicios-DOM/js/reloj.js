const d = document;

export function digitalClock(clock, btnStart, btnStop) {
    let clockTempo;
    d.addEventListener('click', (e) => {
        if( e.target.matches(btnStart) ) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }
        if( e.target.matches(btnStop) ) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnStart).disabled = false;
        }
    });
    
}
export function alarm(sound, btnStart, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement('audio');
    $alarm.src = sound;

    d.addEventListener('click', (e) => {
        if(e.target.matches(btnStart)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnStart).disabled = false;
        }
    });






    // const $alarmStart = document.getElementById('alarm-start');
    // const $alarmStop = document.getElementById('alarm-stop');
    // const $section = document.getElementById('section-1');
    
    // $alarmStart.addEventListener('click', (e) => {
    //     $alarmStart.setAttribute('disabled', '');
    //     const $audio = document.createElement('audio');
    //     $audio.setAttribute('src', './assets/alarma.mp3');
    //     $audio.setAttribute('id', 'alarm');
    //     $audio.play();
        
    // });
    // const $audio = document.getElementById('alarm');
    // console.log($audio)
    // $alarmStop.addEventListener('click', (e) => {
    //     $audio.setAttribute('muted', 'true');
    //     $alarmStart.removeAttribute('disabled');
    // });
    

}