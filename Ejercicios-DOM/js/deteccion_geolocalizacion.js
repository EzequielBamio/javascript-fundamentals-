const d = document,
      n = window.navigator;
export function getGeolocation(id) {
    const $location = d.getElementById(id),
          options = {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
          };

    const success = (position) => {
        let coords = position.coords;
        
       $location.innerHTML = `
       <p>Tu posición actual es: </p>
       <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy}</b> metros</p></li>
       </ul>
       
       <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en GoogleMaps</a>`
    };
    const error = (err) => {
        $location.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    };
    
    n.geolocation.getCurrentPosition(success, error, options);
}
