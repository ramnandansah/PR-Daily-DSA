// Program to Swap Two Variables values:--

function swapVariable(a, b) {
    //create a temporary variable:
    let temp;

    //swap variables:
    temp = a;
    a = b;
    b = temp;

    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);
}

swapVariable(10, 20);