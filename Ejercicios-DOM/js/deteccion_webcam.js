const d = document,
      n = window.navigator;
export function webCam(id) {
    const $video = document.getElementById(id);

    console.log(n.mediaDevices)
    if(n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        }).then((stream) => {
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
          .catch((err) => { 
              $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`);
              console.error(`Algo fallo: ${err}`)
            });
    }
}