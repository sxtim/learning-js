/* Given an array of integers. */
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input array is empty or null, return an empty array.
//
//     Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// =====================================================================================================
// const data = [];
//
// function countPositivesSumNegatives(input) {
//     let countPositive = 0;
//     let sumNegative = 0;
//     if (!input || !input.length) {
//         return [];
//     }
//
//
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             countPositive++;
//         }
//
//         if (input[i] < 0) {
//             sumNegative += input[i];
//         }
//     }
//
//
//     return [countPositive, sumNegative];
//
// }
//
// console.log(countPositivesSumNegatives(data));

/* Rock Paper Scissors */
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// const rps = (p1, p2) => {
//     const getMsg = (n) => `Player ${n} won!`;
//     if (p1 === 'scissors' && p2 === 'paper') return getMsg(1);
//     if (p1 === 'rock' && p2 === 'scissors') return getMsg(1);
//     if (p1 === 'paper' && p2 === 'rock') return getMsg(1);
//     if (p1 === 'paper' && p2 === 'scissors') return getMsg(2);
//     if (p1 === 'scissors' && p2 === 'rock') return getMsg(2);
//     if (p1 === 'rock' && p2 === 'paper') return getMsg(2);
//     if (p1 === p2 ) return 'Draw!';
// };
//
// console.log(rps('paper', 'paper'));

/* Square(n) Sum */
// function squareSum(numbers) {
//     if (!numbers || !numbers.length) return 0;
//     return numbers.reduce((acc, e) => {
//         return  acc + Math.pow(e, 2);
//     }, 0);
// }
//
// console.log(squareSum([0, 3, 4, 5]));

/* BMI */
// function bmi(weight, height) {
//     const bmi = weight / (height * height);
//     console.log(bmi);
//     if(bmi <= 18.5) return 'Underweight';
//     if(bmi <= 25.0) return 'Normal';
//     if(bmi <= 30) return 'Overweight';
//     if(bmi > 30) return 'Obese';
// }
//
// console.log(bmi(80, 1.80));

/* Sum of positive */
// function positiveSum(arr) {
//     return arr.reduce((sum, e) => {
//         if (e > 0) {
//             return sum + e;
//         }
//         return sum;
//     }, 0);
//
//
// }
//
// console.log(positiveSum([1,-2,3,4,5]))

/* VOWELS COUNT */
// function getCount(str) {
//
// return str.split('').reduce((count, e) => {
//     if (e === 'a' || e === 'i' || e === 'o' || e === 'u') {
//         count++;
//     }
//     return count;
// }, 0)
// }
//
// console.log(getCount('abracadabra'));

/* Highest and Lowest */
// function highAndLow(numbers){
//    const arr = numbers.split(' ');
//    return Math.max(...arr) + ' ' + Math.min(...arr);
// }
//
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


/* Disemvowel Trolls */
// delete vowels in string
// function disemvowel(str) {
//     const vovels = 'aeiou';
//     return str
//         .split('')
//         .filter(e => !vovels.includes(e.toLowerCase()))
//         .join('');
// }
//
// console.log(disemvowel('Noo offense but,\\nYour writing is among the worst I\'ve ever read'));

/*Square Every Digit*/
// function squareDigits(num){
//    const str = num.toString().split('').map(e => Math.pow(e, 2)).join('');
//    return Number(str);
// }
//
// console.log(squareDigits(9119));


/*Get the Middle Character*/
// function getMiddle(s) {
//     const arr = s.split('');
//     const newArr = [];
//     if(arr.length % 2 === 0){
//         let middle = arr.length / 2 - 1;
//         for (let i = middle; i <= middle + 1; i++) {
//             newArr.push(arr[i]);
//         }
//     }
//
//     else {
//         let middle = Math.floor(arr.length / 2);
//         for (let i = middle; i <= middle;  i++) {
//            newArr.push(arr[i]);
//         }
//     }
//     return newArr.join('');
//
//     //return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
//
// console.log(getMiddle("testss"));

/* Descending Order */
// function descendingOrder(n){
//     const arr = n.toString().split('');
//     for (let i = 0; i < arr.length; i++) {
//         let tmp = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] > arr[j]){
//                 tmp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = tmp;
//             }
//         }
//     }
//     return Number(arr.join(''));
// }
//
// console.log(descendingOrder(0));

/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */
//
// function accum(s) {
//     let res = '';
//     for (let i = 0; i < s.length; i++) {
//         res += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i < s.length - 1 ? '-' : '')
//     }
//     return res;
// }
//
// console.log(accum("RqaEzty"));

/*Shortest Word*/
// function findShort(s){
//     const arr = s.split(' ').sort((a, b) => a.length - b.length );
//     return arr[0].length;
// }
//
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

/*Base Conversion*/
//https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript
// function convert(input, source, target) {
//
//     var transitionValue = 0;
//     var transitionString = '';
//
//     for(i = 0; i < input.length; i++)
//     {
//         temp = source.indexOf(input[i]);
//         transitionValue += temp * Math.pow(source.length, input.length - i - 1);
//     }
//
//     do
//     {
//         temp = target.charAt(transitionValue % target.length);
//         transitionString = temp.concat("", transitionString);
//         transitionValue = transitionValue / target.length;
//     } while(transitionValue >= 1);
//
//     return transitionString;
// }
//
// let bin = Alphabet.DECIMAL;
//
// console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY));

/*Absent vowel*/
//Your job is to figure out the index of which vowel is missing from a given string:
// function absentVowel(x){
//     const vowels = ['a','e','i','o','u'];
//     for (let i = 0; i < vowels.length; i++) {
//        if(!x.includes(vowels[i])) {
//            return i;
//        }
//     }
// }
// console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"))


/*Isograms*/
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
// determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// function isIsogram(str){
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if(str[i] === str[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
//
// console.log(isIsogram('asd'));

// function explode(s) {
//     return s.split('').map(d=> {
//         let y = '';
//         for (let i = 0; i < +d; i++) {
//             y += d;
//         }
//         return y
//     }).join('');
// }


/*Handshake problem*/
// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal
// amount of people needed to perform these handshakes (a pair of farmers handshake only once).

// function getParticipants(handshakes) {
//     let max = 0;
//     let n = 1;
//     while (max < handshakes) {
//         max += n;
//         n++;
//     }
//     return n;
// }
// console.log(getParticipants(15));

/*Duplicate Encoder*/
// The goal of this exercise is to convert a string to a new string where each character in the new
// string is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// function duplicateEncode(word) {
//     let obj = {};
//     let arrayLetters = word.toLowerCase().split('');
//     for (let i = 0; i < arrayLetters.length; i++) {
//         let a = arrayLetters[i];
//         if(obj[a] === undefined) {
//             obj[a] = 1;
//         } else  {
//             obj[a] += 1;
//         }
//     }
//     return arrayLetters.map(char => obj[char] === 1 ? '(' : ')').join('');
// }
// console.log(duplicateEncode('qweee'));

/*N-th Fibonacci*/
// nthFibo(4) == 2
//For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
// function nthFibo(n) {
//     let prevPrevNum = 0;
//     let prevNum = 1;
//
//     for (let i = 2; i <= n; i++) {
//         let currentNum = prevNum + prevPrevNum;
//         prevNum = prevPrevNum;
//         prevPrevNum = currentNum;
//     }
//     return prevPrevNum;
// }
//
// console.log(nthFibo(100));

/*Multiples of 3 or 5*/
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of
// 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number){
//     let sum = 0;
//     for(let i=1; i<number; i++) {
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }

// function head(arr) {
//     const result = [...arr];
//    return result.shift();
// }
// function tail(arr) {
//     const result = [...arr];
//     return result.pop();
// }
// function init(arr) {
//     const result = [...arr];
//     return result.slice(0, arr.length - 1);
// }
// function last(arr) {
//     const result = [...arr];
//     return result.slice(1, arr.length);
// }



