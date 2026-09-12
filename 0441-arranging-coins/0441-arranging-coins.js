/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum=0
    let count=0

    for(let i=1;i<=n;i++){
        if(sum+i<=n){
            sum+=i
            count++
        }else{
            break
        }
    }
    return count
};