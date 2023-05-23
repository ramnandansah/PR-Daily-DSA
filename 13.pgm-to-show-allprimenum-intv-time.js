// Program to Print All Prime Numbers in an Interval:--

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function findPrimes(start, end) {
    const primes = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

const start = 10;
const end = 20;
const primes1 = findPrimes(start, end)
console.log("Prime numbers between", start, "and", end, "are:", primes1);


//for clearification:--
function isPrime(number) {
    if (number < 2) {        // this case defines 0 1 and -ve nums are not prime
        return false;       //false means those are not prime number and not need to print.
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {            //this case defines those are not prime means [modulus 0 happen]
            return false;                  //are also not kept in prime nums
        }
    }

    return true;             //above both condition if and for not contains that nums are kept under true means those are prime
}

function findPrimes(start, end) {
    const primes = [];                //we create empty array primes for storing prime nums in findPrimes functions

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {        //findprimes ke andar for loop ke andar if me isprime[1st/above function] ko call kar i yaani start value 10 
            primes.push(i);     //as an argument pass kiye, then upar wala function [isprime] excute hoga check karega prime or not[true or false]
        }                      //iss tarah for loop 10 se 20 tak saare nums ko check kar prime ko store kiya jaise 11 ke case me isprime function 
    }             //me 11 store[return hoga true ke case me] rahegaa,&yaha wala function me jaise hii if condition me value return hua check kareke 
    // [matalb jo prime ho] i me aaya turat primes[empty array] me i kaa value push karwa lenge.
    return primes;     //ye return primes islye kiye qki function ke andar primes array hai, aur function excute hua to return kya dena hai to array
}                     //joki primes me store hai.    from line 23 se 25 if not clear deep think on return of both function and of 1st must.

console.log(findPrimes(10, 20));
