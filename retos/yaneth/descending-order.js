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

    // console.log( `${ sample } - ${ numberList.join( '' ) }` );

    return sample;
}

// Endpoint Descending Order
function descendingOrder( n ) {
    const numberList = n.toString().split( '' );        // Lista de numeros                  
    const newNumberList = [];

    // Itera mientras existan valores en la lista original
    while ( numberList.length > 0 ) {

        const major = getNumber( numberList, isGreaterThan );


        // Agrega el valor a la nueva lista
        newNumberList.push( major );

        const index = numberList.indexOf( major );

        // Elimina valor en el indice indicado, solo si el index es un valor positivo
        if ( index > -1 )
            numberList.splice( index, 1 ); 
    }
    // console.log( numberList );
    // console.log( newNumberList );

    return newNumberList.join( '' );
}

// Endpoint Ascending Order
function ascendingOrder( n ) {
    const numberList = n.toString().split( '' );        // Lista de numeros   
    const newNumberList = [];

    // Itera mientras existan valores en la lista original
    while ( numberList.length > 0 ) {

        const minor = getNumber( numberList, isLessThan );

        // Agrega el valor a la nueva lista
        newNumberList.push( minor );

        const index = numberList.indexOf( minor );

        // Elimina valor en el indice indicado, solo si el index es un valor positivo
        if ( index > -1 )
            numberList.splice( index, 1 ); 
    }
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