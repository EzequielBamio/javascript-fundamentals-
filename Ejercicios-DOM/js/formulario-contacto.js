const d = document;

export function formContactValidation() {
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
        // e.preventDefault();

        const $loader = d.querySelector('.form-contact-loader'),
              $response = d.querySelector('.form-contact-response');

        $loader.classList.remove('none');

        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            $formContact.reset();

            setTimeout(() => {
                $response.classList.add('none');
            }, 3000);

        }, 3000);

    })

}