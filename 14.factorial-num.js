//Program to Find the Factorial of a Number:--

function factorial(i) {
    if (i > 1) {                                    
        return factorial(i - 1) * i; 
    }                            
    return 1;                 
}                           
console.log(factorial(5));


// for clearification:--
// Program to Factorial of a number[5kafactorial=1*2*3*4*5=120]:--                   [*******]
// function factorial(i) {
//     if (i > 1) {                                    //yaha pe 4 hua qki factorial(i-1)yaani(5-1)yaani(4)//aur *i yaani *5 qki i kaa value 5 hai.
//         return factorial(i - 1) * i; //ye line execute hoga tab aise hoga => //factorial(4)*5=>//ab yaha fir se factorial call hoga with argument
//     }                            //value 4[i=4] aur side me *me 5 bhi rahega, condition check hoga true niklega isliye phir se ruturn factorial
//     return 1;                 //wala line excute hoga kuch iss tarah => //factorial(3)*4*5(qki 5 side me tha aur rahega,aur aage *4 bhi rahega)
// }                          //yaani agala baar excute hoke =>factorial(2)*3*4*5 phir =>factoral(1)*2*3*4*5 => ab aage return factoral wala line 
// console.log(factorial(5));//excute nahi hoga qki factorial(1)yaha i=1 kaa jab condition check hoga tab to false ho jaayega isliye return 1 wala 
                        //   line execute hoga aur ab aa jaayega 1 aur aage baaki kaa side value yaani =>1*2*3*4*5 joki = hoga 120 ke, aur 120 ho
                //jaayegaa function factorial (sabse upar wala) kaa value jaaoki console ho jaayega.          