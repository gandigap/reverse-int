module.exports = function reverse(n) {
    let numberString = 0;
    if (n < 0) {
        numberString = String(-1 * n);
    } else {
        numberString = String(n);
    }

    let arrayNumber = numberString.split('');//
    let reverseNumber = '';

    for (let i = 1; i <= arrayNumber.length; i++) {
        reverseNumber += arrayNumber[arrayNumber.length - i];
    }
    return reverseNumber;


    //             if(n < 0) {
    //                 numberString = String(-1 * n);
    //             } else {
    //                 numberString = String(n);
    //             }
    //             return numberString.split('').reverse().join('');
}
