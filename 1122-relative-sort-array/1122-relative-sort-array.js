/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
     let result = []

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                result.push(arr1[j])
            }
        }
    }

    let remaining = arr1.filter(num => !arr2.includes(num))
    remaining.sort((a, b) => a - b)

    return [...result, ...remaining]

};