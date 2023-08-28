// Codewars
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// Funciones validadoras
const isGreaterThan = ( number1, number2 ) => number1 < number2;
const isLessThan = ( number1, number2 ) => number1 > number2;
const isValid = ( number ) => number >= 0;

// Refactoring de 'getMajor' para que haga uso de un 'CallBack'
const getNumber = ( numberList, cb ) => {
    let sample = numberList[ 0 ];                       // Obtenemos primer numero de la lista

    for ( let i = 0; i < numberList.length; i++ )
        if( cb( sample, numberList[ i ] ) )
            sample = numberList[ i ];

    // console.log( `${ sample } - ${ numberList.join( '' ) }` );

    return sample;
}

function orderList( numberList, cb ) {
    const newNumberList = [];

    // Itera mientras existan valores en la lista original
    while ( numberList.length > 0 ) {
        const value = getNumber( numberList, cb );  // Obtiene el mayor o el menor de acuerdo al callback que se ha pasado

        newNumberList.push( value );                // Agrega el valor a la nueva lista
        const index = numberList.indexOf( value );  // Obtiene posicion del (mayor o menor) de la lista de numeros dados

        // Elimina valor en el indice indicado, solo si el index es un valor positivo
        if ( index > -1 )
            numberList.splice( index, 1 ); 

    }

    return newNumberList;
}

// Endpoint Descending Order
function descendingOrder( n ) {
    if( ! isValid( n ) ) return false; 

    const numberList = n.toString().split( '' );        // Lista de numeros                  
    const newNumberList = orderList( numberList, isGreaterThan );
    // console.log( numberList );
    // console.log( newNumberList );

    return newNumberList.join( '' );
}

// Endpoint Ascending Order
function ascendingOrder( n ) {
    if( ! isValid( n ) ) return false;

    const numberList = n.toString().split( '' );        // Lista de numeros   
    const newNumberList = orderList( numberList, isLessThan );
    // console.log( numberList );
    // console.log( newNumberList );

    return newNumberList.join( '' );               
}

// Implementacion
const numberList = [ 
    42145, 
    145263, 
    123456789 
];

console.log( '# Mayor del string' );
numberList.forEach( number => {
    const stringResult = descendingOrder( number );
    console.log( stringResult );
});

console.log( '# Menor del string' );
numberList.forEach( number => {
    const stringResult = ascendingOrder( number );
    console.log( stringResult );
});