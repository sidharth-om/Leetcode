/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0)
    flowerbed.push(0)
    console.log(flowerbed)

    for(let i=1;i<flowerbed.length;i++){
         if(n===0){return true}
        if(flowerbed[i]===0&&flowerbed[i+1]===0&&flowerbed[i-1]===0){
            n--  
            flowerbed[i]=1
        }
        
        
    }
    return false

    //  let i=0
    // let left=0
    // let right=flowerbed[i+1]
   

    // while(i<=flowerbed.length){
    //     if(flowerbed[i]===0&&left===0&&right===0){
    //         n--
    //         flowerbed[i]=1
    //     }
    //     i++
    //     left=flowerbed[i-1]
    //     console.log(flowerbed[i+1])
    //     if(flowerbed[i+1]===undefined){
    //         right=0
    //     }else{
    //     right=flowerbed[i+1]
    //     }
    //     if(n===0)return true
    // }
    // return false
};