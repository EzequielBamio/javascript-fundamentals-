const d = document,
      $table = d.querySelector('.crud-table'),
      $form = d.querySelector('.crud-form'),
      $title = d.querySelector('.crud-title'),
      $template = d.querySelector('.crud-template').content,
      $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let {url, method, success, error, data} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (e) => {
        if(xhr.readyState !== 4) { return; }

        if(xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            let message = xhr.statusText || 'Ocurrió un error';
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || 'GET', url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        // method: 'GET',
        url: 'http://localhost:5555/playersArg',
        success: (res) => {
            // console.log(res);
            res.forEach( (el) => {
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

            
        },
        error: (err) => {
            console.error(err);
            $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
        },
        data: null,
    })
}

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', (e) => {
    if(e.target === $form) {
        e.preventDefault();

        if(!e.target.id.value) {
            //CREATE - POST
            ajax({
                url: 'http://localhost:5555/playersArg',
                method: 'POST',
                success: (res) => location.reload,
                error: (err) => $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.name.value,
                    number: e.target.number.value,
                }
            });
        } else {
            //UPDATE -PUT
            ajax({
                url: `http://localhost:5555/playersArg/${e.target.id.value}`,
                method: 'PUT',
                success: (res) => location.reload,
                error: (err) => $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.name.value,
                    number: e.target.number.value,
                }
            });
        }
    }
});

d.addEventListener('click', (e) => {

    if(e.target.matches('.edit')){
        $title.textContent = 'Editar Jugador';
        $form.name.value = e.target.dataset.name;
        $form.number.value = e.target.dataset.number;
        $form.id.value = e.target.dataset.id;
    }

});

d.addEventListener('click', (e) => {

    if(e.target.matches('.delete')){
        let isDelete = confirm(`Estas seguro de eliminar el id ${e.target.dataset.id}`);

        if(isDelete) {
            ajax({
                url: `http://localhost:5555/playersArg/${e.target.dataset.id}`,
                method: 'DELETE',
                success: (res) => location.reload,
                error: (err) => alert(err),
            });
        }
    }

});
