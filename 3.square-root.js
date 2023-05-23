//Method1:--
function squareRoot(num) {
    if (num < 0) {
        return `${num} is negative number`;
    } else {
        return Math.sqrt(num);   
    }
}
console.log(squareRoot(555));
console.log(squareRoot(-50));


//Method2:--
function squareRoot(num) {
    if (num < 0) {
        return `${num} is negative number`;
    } else {
        return Math.pow(num, 0.5);   
    }
}
console.log(squareRoot(400));
console.log(squareRoot(-55));


//Method3:--
function squareRoot(num) {
    if (num < 0) {
        return `${num} is negative number`;
    } else {
        return num ** 0.5;   
    }
}
console.log(squareRoot(420));
console.log(squareRoot(-52));