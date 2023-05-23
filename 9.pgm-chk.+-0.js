// Program to Check if a number is Positive, Negative, or Zero:--

function checkNumber(num) {
    if (num > 0) {   // for +ve number
        return `${num} is positive`;    // display the result for +ve num 
    } else if (num < 0) {  // for -ve number
        return `${num} is negative`;      // display the result for -ve num
    } else {   // for when number is zero
        return `${num} is Zero`;    // display the result when num is 0
    }
}
console.log(checkNumber(0));
console.log(checkNumber(5));
console.log(checkNumber(-7));