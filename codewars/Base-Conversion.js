// In this kata you have to implement a base converter,
// which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:

// var Alphabet = {
//     BINARY:        '01',
//     OCTAL:         '01234567',
//     DECIMAL:       '0123456789',
//     HEXA_DECIMAL:  '0123456789abcdef',
//     ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
//     ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// };

// The function convert() should take an input (string),
// the source alphabet (string) and the target alphabet (string).
// You can assume that the input value always consists of characters from the source alphabet.
// You don't need to validate it.

// convert between numeral systems
// convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
// convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"
//
// // other bases
// convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
// convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
// convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"

function convert(input, source, target) {
    let decimalNum = 0;
    for (let i = input.length - 1, p = 0; i >= 0; i--, p++) {
        decimalNum += source.indexOf(input[i]) * Math.pow(source.length, p)
    }

    let result = '';
    do {
        result = target[decimalNum % target.length] + result;
        decimalNum = Math.floor(decimalNum / target.length)
    } while (decimalNum !== 0);
    return result;
}

