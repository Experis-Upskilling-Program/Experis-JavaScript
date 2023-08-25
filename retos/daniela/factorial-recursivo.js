// Version recursiva
const factorial = ( num ) => {
    if( num == 0 ) return 1;

    return num * factorial( num - 1 );
}

// Version abreviada de la anterior
const fact = num => num == 0 ? 1 : num * fact( num - 1 );

// Version corriente
const factl = num => {
    let fact = 1;
    
    for ( let i = 1; i <= num; i++ )
        fact *= i;

    return fact;
}

/** Implementacion */
let result = factorial( 5 );
console.log( result );

result = fact( 5 );
console.log( result );

result = factl( 5 );
console.log( result );