// Program to Convert Kilometers to Miles:--

function convertKmToM(km) {
    const factor = 0.621371; // 1km = 0.6213711922 mile
    let resultInMile = km * factor; // value stored of mile in resultInMile
    return `${km} km = ${resultInMile} miles`;  // return the value of mile to the function
}
console.log(convertKmToM(2.2));  // print the value of miles in console