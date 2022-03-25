import STRIPE_KEYS from './stripe-keys.js';

const d = document,
      $tShirts = d.getElementById('camisetas'),
      $template = d.getElementById('camiseta-template').content,
      $fragment = d.createDocumentFragment(),
      fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}`,
        }
      };

let products, prices;

const moneyFormat = (num) => `${num.slice(0, -2)}.${num.slice(-2)}`;


Promise.all([
    fetch('https://api.stripe.com/v1/products', fetchOptions),
    fetch('https://api.stripe.com/v1/prices', fetchOptions)
]).then( (responses) => Promise.all( responses.map( (res) => res.json() ) ) )
  .then( (json) => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach( (el) => {
        let productData = products.filter( (p) => p.id === el.product );
        // console.log(productData);

        $template.querySelector('.camiseta').setAttribute('data-price', el.id);
        $template.querySelector('img').src = productData[0].images[0];
        $template.querySelector('img').alt = productData[0].name;
        $template.querySelector('figcaption').innerHTML = `
         ${productData[0].name}
         <br>
         $${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $tShirts.appendChild($fragment);

  })
  .catch( (err) => {
    let message = err.statusText || 'Ocurrió un error al conectarse con la API de Stripe';
    $tShirts.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  })

d.addEventListener('click', (e) => {

  if(e.target.matches('.camiseta *')) {
    let priceId = e.target.parentElement.getAttribute('data-price');
    Stripe(STRIPE_KEYS.public).redirectToCheckout({
      lineItems: [{ 
        price: priceId,
        quantity: 1
      }],
      mode: 'subscription',
      successUrl: 'http://127.0.0.1:5500/Ejercicios-AJAX/assets/stripe-success.html',
      cancelUrl: 'http://127.0.0.1:5500/Ejercicios-AJAX/assets/stripe-cancel.html',

    }).then( (res) => {
      if(res.error) {
        $tShirts.insertAdjacentElement('afterend', res.error.message);
      }
    })

  }

});








// fetch('https://api.stripe.com/v1/products', {
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`,
//     }
// })
//  .then( (res) => {
//     // console.log(res);

//     return res.json();
//  })
//  .then( (json) => {
//     console.log(json);
//  })

// fetch('https://api.stripe.com/v1/prices', {
    
// })
//  .then( (res) => {
//     // console.log(res);

//     return res.json();
//  })
//  .then( (json) => {
//     console.log(json);
//  })