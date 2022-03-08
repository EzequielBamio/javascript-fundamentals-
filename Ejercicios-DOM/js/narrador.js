const d = document,
      w = window;

export function speechReader() {
    const speechMessage = new SpeechSynthesisUtterance(),
          $select = d.getElementById('speech-select'),
          $text = d.getElementById('speech-text'),
          $btn = d.getElementById('speech-btn');

          let voices = [];

    d.addEventListener('DOMContentLoaded', (e) => {
        // console.log(w.speechSynthesis);
        
        w.speechSynthesis.addEventListener('voiceschanged', (e) => {
            voices = w.speechSynthesis.getVoices();

            voices.forEach( (voice) => {
                const $option = d.createElement('option');
                $option.value = voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`;

                $select.appendChild($option);
            });
        });
    });
    d.addEventListener('change', (e) => {
        if(e.target === $select) {
            if(e.target.value !== $select.children[0])
            {
                speechMessage.voice = voices.find(voice => voice.name === e.target.value);
            }
        }

    });
    
    d.addEventListener('click', (e) => {
        if(e.target === $btn) {
            speechMessage.text = $text.value;

            // console.log(speechMessage);
            speechSynthesis.speak(speechMessage);
        }
    });

}