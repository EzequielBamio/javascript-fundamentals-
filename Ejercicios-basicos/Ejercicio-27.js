/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. 
*/

class Pelicula {
  
  constructor( id, titulo, director, anioEstreno, paisesOrigen, generos, calificacion ) {
      
    this.validarId(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarAnioEstreno(anioEstreno);
    this.validarPaisesOrigen(paisesOrigen);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);

}

//------------- Validaciones Generales -------------//

  validarCadena( propiedad, valor ) {
    if(!valor) { return console.warn(`${ propiedad } "${ valor }" esta vacio`); }
    if( typeof valor !== 'string' ) { return console.error(`${ propiedad } "${ valor }" ingresado, NO es una cadena de texto`); }

    return true;
  }

  validarCadenaLongitud( propiedad, valor, longitud ) {
    if( valor.length > longitud ) 
    { return console.error(`${ propiedad } "${ valor }" excede el numero de caracteres permitidos`); }
    

    return true;
  }

  validarArreglo( propiedad, valorArr ) {
    
    if( valorArr.length === 0 ) { return console.warn(`${ propiedad } el arreglo esta vacio`); }
    if( !(valorArr instanceof Array) ) { return console.warn(`${ propiedad } "${ valorArr }" NO es un Arreglo.`); }
    
    for(let item of valorArr) {
      if( typeof item !== 'string' ){ return console.error(`${ propiedad } "${ item }" ingresado, NO es una elemento valido `); }
    }

    return true;
  }

  validarNumero( propiedad, valor ) {
    if( typeof valor !== 'number' ) { return console.error(`${ propiedad } "${ valor }" ingresado, NO es una numero`); }

    return true;
  }

  static getGenerosValidos() {
    return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir',' Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
  }
  
//------------- Validaciones -------------//

  validarId( id ) {
    if( this.validarCadena('Id', id) ) {

      if(!(/([a-z]{2})+[0-9]{7}/.test( id ))) {
          return console.error(`La Id "${ id }" no es valido, debe tener 9 caracteres, los 2 primeros caracteres en letra minuscula, los 7 restantes numeros.`); 
      }else {
        this.id = id;
      }
    }
  }

  validarTitulo( titulo ) {
    if( this.validarCadena('Titulo', titulo) ) {
      if( this.validarCadenaLongitud( 'Titulo', titulo, 100 ) ) {
        this.titulo = titulo;
      }
    }
  }

  validarDirector( director ) {
    if( this.validarCadena('Director', director) ) {
      if( this.validarCadenaLongitud( 'Director', director, 50 ) ) {
        this.director = director;
      }
    }
  }

  validarAnioEstreno( anioEstreno ) {
    if( this.validarNumero('Año de Estreno' ,anioEstreno) ) {
      if( !(/[0-9]{4}/.test( anioEstreno )) ) {
        return console.error(`El año "${ anioEstreno }" no es valido, debe tener 4 cifras.`);
      }
    }

    this.anioEstreno = anioEstreno;
  }

  validarPaisesOrigen( paisesOrigen ) {
    if( this.validarArreglo('Paises de Origen', paisesOrigen) ) 
    {
      this.paisesOrigen = paisesOrigen;
    }
  }

  validarGeneros( generos ) {
    if( this.validarArreglo('Generos', generos) ) 
    {
      for( let genero of generos ) {
        
        if( Pelicula.getGenerosValidos().indexOf(genero) === -1 ) {
          console.warn(`El genero "${ genero }" no es valido.\n Las categorias aceptadas: ${ Pelicula.getGenerosValidos() }`);
        }
      }
      this.generos = generos;
    }
  }

  validarCalificacion( calificacion ) {
    if( this.validarNumero('Calificación', calificacion) ) {
      if( calificacion < 0 || calificacion > 10) {
        return console.error(`La calificacion "${ calificacion }" no es valido, debe ser de 0 a 10.`);
      }
    }

    this.calificacion = calificacion;
  }

//------------- Show -------------//
  show() {
    return `
    ### Ficha técnica de la Pelicula ###
    Id: ${ this.id }.
    Titulo: ${ this.titulo }.
    Director: ${ this.director }.
    Año de estreno: ${ this.anioEstreno }.
    Paises de origen: ${ this.paisesOrigen }.
    Generos: ${ this.generos }.
    Calificación: ${ this.calificacion }.
    `

  }

}

const peliculas = [ 
  new Pelicula('as3254781', 'Spider-Man: No Way Home', 'Jon Watts', 2021, ['Estados Unidos'], ['Action', 'Sci-Fi', 'Adventure'],  9),
  new Pelicula('as2548712', '12 horas para sobrevivir', 'James DeMonaco', 2014, ['Estados Unidos'], ['Action', 'Sci-Fi', 'Horror'], 8), 
  new Pelicula('as5522215', 'The Avengers', 'Joss Whedon', 2022, ['Estados Unidos'], ['Action', 'Sci-Fi'],  6),

];

for( let pelicula of peliculas ) {
  console.log('----------');
  console.log(pelicula.show());
}
