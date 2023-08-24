const 
    MAX_LENGTH = 10000,
    MIN_LENGTH = 1,
    MAX_NUMBER = 10000,
    MIN_NUMBER = -10000;

const fillList = () => {
    const MAX_LENGTH = 10;
    let nums = [];

    for ( let i = 0; i < MAX_LENGTH; i++ ) {
        nums[ i ] = Math.round( Math.random() * 100 );
    }

    return nums;
}

// 1 <= nums.length <= 10^4
const validateLongitude = ( nums ) => nums.length >= MIN_LENGTH && nums.length <= MAX_LENGTH;

// -10^4 <= nums[i] <= 10^4
const validateValue = ( nums ) => nums.every( number => number >= MIN_NUMBER && number <= MAX_NUMBER );

const nums = fillList();
// nums.push( 10010 );
console.log( nums.length );
console.log( nums );

const isValidateLongitude = validateLongitude( nums );
console.log( isValidateLongitude );

if( isValidateLongitude ) {
    const arrValidate = validateValue( nums );
    console.log( arrValidate )
}