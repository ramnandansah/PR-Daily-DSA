// Find the largest number among three numbers:--

function findLargest(a, b, c) {
    let largest;
    if (a > b && a > c) {
        largest = a;
    } else if (b > a && b > c) {
        largest = b;
    } else {
        largest = c;
    }
    return largest;
}
console.log(findLargest(-3, -6, -7));   //output: -3 [due to-ve numbers -3 kam minus me hai isliye wo sabse bara hai yaha]


function findMax(...args) {
    let max = -Infinity;            //yaha agar sidhe infinity likhte to -ve num check nahi kar paate.
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(1, 120, 400, 115, 40, 85));
// console.log(findMax(-1, -120, -400, -115, -40, -85));