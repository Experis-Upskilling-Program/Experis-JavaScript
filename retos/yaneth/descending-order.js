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

// Refactoring de 'getMajor' para que haga uso de un 'CallBack'
const getNumber = ( numberList, cb ) => {
    let sample = numberList[ 0 ];                       // Obtenemos primer numero de la lista

    for ( let i = 0; i < numberList.length; i++ )
        if( cb( sample, numberList[ i ] ) )
            sample = numberList[ i ];

    console.log( `${ sample } - ${ numberList.join( '' ) }` );

    return sample;
}

// Endpoint Descending Order
function descendingOrder( n ) {
    const numberList = n.toString().split( '' );        // Lista de numeros                  

    return getNumber( numberList, isGreaterThan );
}

// Endpoint Ascending Order
function ascendingOrder( n ) {
    const numberList = n.toString().split( '' );        // Lista de numeros                  

    return getNumber( numberList, isLessThan )
}

// Implementacion
const numberList = [ 
    42145, 
    145263, 
    123456789 
];

console.log( '# Mayor del string' );
numberList.forEach( number => {
    descendingOrder( number );
});

console.log( '# Menor del string' );
numberList.forEach( number => {
    ascendingOrder( number );
});