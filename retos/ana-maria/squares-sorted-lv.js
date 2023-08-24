// Squares of a Sorted Array
const 
    MAX_LENGTH = 10000,
    MIN_LENGTH = 1,
    MAX_NUMBER = 10000,
    MIN_NUMBER = -10000;

/** Version larga */
const squares = ( numbers ) => {
    for ( let i = 0; i < numbers.length; i++ )
        numbers[ i ] = Math.pow( numbers[ i ], 2 );

    return numbers;
};

const sorted = ( numbers ) => {
    const longitude = numbers.length;

    for (let i = 0; i < longitude - 1; i++ ) {
        for (let j = 0; j < longitude - i - 1; j++ ) {
            if( numbers[ j ] > numbers[ j + 1 ] ) {
                const temp = numbers[ j ];
                numbers[ j ] = numbers[ j + 1 ];
                numbers[ j + 1 ] = temp;
            }
        }
    }

    return numbers;
}

// 1 <= nums.length <= 10^4
const validateLongitude = ( nums ) => nums.length >= MIN_LENGTH && nums.length <= MAX_LENGTH;

// -10^4 <= nums[i] <= 10^4
const validateValue = ( nums ) => nums.every( number => number >= MIN_NUMBER && number <= MAX_NUMBER );


const numberList = [ -4, -1, 0, 3, 10 ];

const init = () => {

    if( ! validateLongitude( numberList ) ) return false;
    if( ! validateValue ) return false;

    const squaresList = squares( numberList );

    return sorted( squaresList );
}

console.log( init() );

