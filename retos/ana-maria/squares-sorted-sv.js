// Squares of a Sorted Array
const 
    MAX_LENGTH = 10000,
    MIN_LENGTH = 1,
    MAX_NUMBER = 10000,
    MIN_NUMBER = -10000;

/** Version corta */
const squaresSorted = ( numbers ) => 
    numbers
        .map( num => num * num )
        .sort( ( a, b ) => a - b );

// 1 <= nums.length <= 10^4
const validateLongitude = ( nums ) => nums.length >= MIN_LENGTH && nums.length <= MAX_LENGTH;

// -10^4 <= nums[i] <= 10^4
const validateValue = ( nums ) => nums.every( number => number >= MIN_NUMBER && number <= MAX_NUMBER );


const numberList = [ -4, -1, 0, 3, 10 ];

const init = () => {

    if( ! validateLongitude( numberList ) ) return false;
    if( ! validateValue ) return false;

    return squaresSorted( numberList );
}

console.log( init() );