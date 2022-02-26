const d = document,
      n = window.navigator,
      ua = n.userAgent;

export function userDeviceInfo(id) {
    const $userDevice = d.getElementById(id),
          isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.windows();
            },
          },
          isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            },
          },
          isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (
                    this.ie() ||
                    this.edge() ||
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera()
                );
            },
          };

    // console.log(isMobile.any());
    // console.log(isDesktop.any());
    // console.log(isBrowser.any());

    $userDevice.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

    // ********** //
    if(isBrowser.chrome()) {
        $userDevice.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    }
    if(isBrowser.edge()) {
        $userDevice.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`
    }

    if(isDesktop.linux()) {
        $userDevice.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`
    }

    if(isDesktop.mac()) {
        $userDevice.innerHTML += `<p><mark>Descarga nuestro software para Mac</mark></p>`
    }
    
    if(isDesktop.windows()) {
        $userDevice.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`
    }

    // Redirecciones

    if(isMobile.android()) {
        window.location.href = 'https://github.com/EzequielBamio';
    }
}