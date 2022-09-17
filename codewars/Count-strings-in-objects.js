// Create a function strCount (takes an object as argument)
// that will count all string values inside an object.


const obj = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
};

function strCount(obj){
// Your code here
   let counter = 0;

    for (const objKey in obj) {
        if (typeof obj[objKey] === 'string') counter++;
        if( typeof obj[objKey] === 'object') counter += strCount(obj[objKey])
    }
        return counter;
}

console.log(strCount(obj));