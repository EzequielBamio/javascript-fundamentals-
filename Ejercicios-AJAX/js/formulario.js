const d = document;

function formContact() {
    const $formContact = d.querySelector('.form-contact'),
          $input = d.querySelectorAll('.form-contact [required]'),
          $btnFormContact = d.querySelector('.form-contact [type="submit"]');

    $input.forEach( (input) => {
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('form-contact-error', 'none');
        input.insertAdjacentElement('afterend', $span);
    });

    d.addEventListener('keyup', (e) => {
        
        if(e.target.matches('.form-contact [required]')) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;

            if(pattern && $input.value !== '') {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                       ? d.getElementById($input.name).classList.add('is-active')
                       : d.getElementById($input.name).classList.remove('is-active')
            }

            if(!pattern) {
                return ($input.value === '')
                       ? d.getElementById($input.name).classList.add('is-active')
                       : d.getElementById($input.name).classList.remove('is-active')
            }
        }
    });

    d.addEventListener('submit', (e) => {
        e.preventDefault();

        const $loader = d.querySelector('.form-contact-loader'),
              $response = d.querySelector('.form-contact-response');

        $loader.classList.remove('none');

        fetch('https://formsubmit.co/ajax/ezequielbamiok@gmail.com', {
            method: 'POST',
            body: new FormData(e.target)
        })
         .then( (res) => res.ok ? res.json() : Promise.reject(res) )
         .then( (json) => {
            console.log(json);
            $loader.classList.add('none');
            $response.classList.remove('none');
            $response.innerHTML = `<p>${json.message}</p>`;
            $formContact.reset();
         })
         .catch( (err) => {
            console.log(err);
            let message = err.statusText || 'Ocurrio un error';
            $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally( () => {
            setTimeout(() => {
                $response.classList.add('none');
            }, 3000);
        })
    })

}

d.addEventListener('DOMContentLoaded', formContact)