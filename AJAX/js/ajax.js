( () => {

    const xhr = new XMLHttpRequest(),
          $xhr = document.getElementById('xhr'),
          $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', (e) => {
        if(xhr.readyState !== 4) { return; }
        // console.log(xhr);
        
        if(xhr.status >= 200 && xhr.status < 300) {
            // console.log('La petición fue realizada éxitosamente');
            // console.log(xhr.responseText);
            // $xhr.innerHTML = xhr.responseText;
            // console.log(JSON.stringify(xhr.responseText));
            const json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach( (el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
            
        } else {
            // console.error('La petición dio error!');
            let message = xhr.statusText || 'Ocurrio un error';
            $xhr.innerHTML = `Error <b>${xhr.status}</b>: ${message}`
        }

        // console.log('Este mensaje se va a ejecutar de todas formas.');
    });

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/user');
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    // xhr.open('GET', './assets/users.json');


    xhr.send();


})();

( () => {

    const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
    //  .then( (res) => {
    //     console.log(res);
    //     // json - blod - text
    //     return res.ok ? res.json() : Promise.reject();
    //  })
     .then( (res) => res.ok ? res.json() : Promise.reject(res) )
     .then( (json) => {
        // console.log(json);
        // $fetch.innerHTML = json;
        json.forEach( (el) => {
            const $li = document.createElement('li');
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
     })
     .catch( (err) => {
        // console.log('Catch', err);
        let message = err.statusText || 'Ocurrio un error';
            $fetch.innerHTML = `Error <b>${err.status}</b>:  ${message}`;
     })
     .finally( () => {
        // console.log('Esto se ejecutara independientemente del resultado de la Promesa Fetch');
     });

})();

( () => {
    const $fetchAsync = document.getElementById('fetch-async'),
          $fragment = document.createDocumentFragment();

    async function getData() {
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();

            if(!res.ok) throw { status: res.status,
                                  statusText: res.statusText }
            
            json.forEach( (el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
    
            $fetchAsync.appendChild($fragment);

        } catch(err) {
            let message = err.statusText || 'Ocurrio un error';
            $fetchAsync.innerHTML = `Error <b>${err.status}</b>:  ${message}`;
        } finally {
            // console.log('Esto se ejecutara independientemente del try... catch');
        }
        
        
    }

    getData();

})();

( () => {
    const $axios = document.getElementById('axios'),
          $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (res) => {
        // console.log(res);
        let json = res.data;
        
        json.forEach( (el) => {
            const $li = document.createElement('li');
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch( (err) => {
        // console.log('Estamos en el Catch', err);
        let message = err.response.statusText || 'Ocurrio un error';
            $axios.innerHTML = `Error <b>${err.response.status}</b>:  ${message}`;
    })
    .finally(() => {
            // console.log('Esto se ejecutara independientemente del resultado Axios');
    });

})();

( () => {
    const $axiosAsync = document.getElementById('axios-async'),
    $fragment = document.createDocumentFragment();

    async function getData() { 
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
                json = await res.data;

            json.forEach( (el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
    
            $axiosAsync.appendChild($fragment);

        } catch (err) {
            let message = err.response.statusText || 'Ocurrio un error';
            $axiosAsync.innerHTML = `Error <b>${err.response.status}</b>:  ${message}`;
        } finally {
            // console.log('Esto se ejecutara independientemente del try... catch');
        }
    }

    getData();



})();