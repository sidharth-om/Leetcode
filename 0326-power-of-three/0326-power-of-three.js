/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) return true;
    if (n < 1 || n % 3 !== 0) return false;

    // function power(num) {
    //     if (num === 1) {
    //         return true;
    //     }

    //     return power(num / 3);
    // }

    // return power(n);
    return isPowerOfThree(n/3)

   
};