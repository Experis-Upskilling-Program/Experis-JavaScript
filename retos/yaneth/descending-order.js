// Codewars
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


const isGreaterThan = ( number1, number2 ) => number1 < number2;
const isLessThan = ( number1, number2 ) => number1 > number2;

const getMajor = ( numberList ) => {
    let major = numberList[ 0 ];                       // Obtenemos primer numero de la lista

    // Iteramos lista para obtener el mayor
    for ( let i = 0; i < numberList.length; i++ ) {
        if( isGreaterThan( major, numberList[ i ] ) ) {
            major = numberList[ i ];
        }
    }
    console.log( `${ major } es el mayor de ${ numberList.join( '' ) }` );

    return major;
}

function descendingOrder( n ) {
    const numberList = n.toString().split( '' );        // Lista de numeros                  

    return getMajor( numberList );
}

// Implementacion
const numberList = [ 
    42145, 
    145263, 
    123456789 
];

numberList.forEach( number => {
    descendingOrder( number );
});