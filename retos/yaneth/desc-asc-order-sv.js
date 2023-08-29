// Codewars
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


numberList = [5, 2, 7, 1, 0]

// Método de Ordenamiento de la Burbuja (BubbleSort)
function bubbleSort( list ){
    for ( let i = 0; i < list.length - 1; i++ ) {

        let swapped = false

        for ( let j = 0; j < list.length - i - 1; j++ ) {
            // swapping the elements
            if ( list[ j ] > list[ j + 1 ] ) {
                let temp = list[ j ];
                list[ j ] = list[ j + 1 ];
                list[ j + 1 ] = temp;
                swapped = true;
            }
        }

        // if no elements are swapped
        // that means our array is sorted
        if( ! swapped ) break;
    }

    return list.join( '' );
}

console.log( bubbleSort( numberList ) );