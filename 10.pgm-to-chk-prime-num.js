// Program to Check Prime Number:--[khud aur 1 ke alawa kisi aur se naa kate wo hota hai prime num]

// const isPrimeNumber = (n) => {
//     for (let i = 2; i < n; i++) {     //i=2 yaani 1 ko chorke aur <n yaani khud se nahi
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPrimeNumber(13)); // true
// console.log(isPrimeNumber(18)); // false
// console.log(isPrimeNumber(67)); // true
// console.log(isPrimeNumber(148)); // false


//other method:--
function isprime(n) {
    if (n <= 1)
        return "Number is not a prime";
    for (let i = 2; i < n; i++)
        if (n % i === 0) {
            return "Number is not a prime number";
        }
        else {
            return "Number is a Prime Number";
        }
}
console.log(isprime(7));