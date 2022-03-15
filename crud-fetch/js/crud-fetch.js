const d = document,
      $table = d.querySelector('.crud-table'),
      $form = d.querySelector('.crud-form'),
      $title = d.querySelector('.crud-title'),
      $template = d.querySelector('.crud-template').content,
      $fragment = d.createDocumentFragment();

const getAll = async () => {
    try{
        let res = await fetch('http://localhost:5555/playersArg'),
            json = await res.json();

        if(!res.ok) { throw {status: res.status, statusText: res.statusText} }

        json.forEach( (el) => {
            $template.querySelector('.name').textContent = el.name;
            $template.querySelector('.number').textContent = el.number;
            $template.querySelector('.edit').dataset.id = el.id;
            $template.querySelector('.edit').dataset.name = el.name;
            $template.querySelector('.edit').dataset.number = el.number;
            $template.querySelector('.delete').dataset.id = el.id;

        
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone); 
        });

        $table.querySelector('tbody').appendChild($fragment);

    }catch(err) {
        let message = err.statusText || 'Ocurrio un error';
        $table.insertAdjacentHTML('afterend', `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

d.addEventListener('DOMContentLoaded', getAll);