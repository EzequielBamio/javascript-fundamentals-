(()=> {
    const d = document,
          $menuItems = d.querySelector('.menu-items')
          $container = d.querySelector('.container');
          $fragment = d.createDocumentFragment();

  async function getData(id) {
      try {
          let res = await fetch('http://localhost:5555/pages'),
              json = await res.json();

          console.log(json);

      } catch(err) {

      }
  }

d.addEventListener('click', (e) => {

    if(e.target === $menuItems.children[0]) {
        getData('home');
    }

});
  
  getData();
})()