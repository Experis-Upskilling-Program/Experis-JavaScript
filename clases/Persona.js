class Persona {
    // Definir todas los atributos
    constructor( name ) {
        // Asigno
        this.name = name;
        this.gender = 'female';
    }

    getName() {
        return this.name;
    }
    setName( name ) {
        this.name = name;
    }

    get genero() {
        return this.name;
    }
    set genero( gender ) {
        this.gender = gender;
    }
}

// Instancia de la clase = Objeto de la clase
const anaMaria = new Persona( 'Ana Maria' );
console.log( anaMaria );
anaMaria.email = 'anamaria@correo.co';
console.log( anaMaria.getName() );

anaMaria.setName( 'Daniela' );
console.log( anaMaria );


anaMaria.genero = 'male';
console.log( anaMaria );
console.log( anaMaria.genero );


