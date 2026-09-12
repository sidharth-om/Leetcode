/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
let length=g.length
    for(let i=0;i<g.length;i++){
        for(let j=0;j<s.length;j++){
        if(g[i]<=s[j]){
            g.splice(i,1)
            
            s.splice(j,1)
            i--
            break
        }
        }
    }
return (length-g.length)


    // let length=g.length
    // if(s.length!==0){
    // let sum=s.reduce((acc,curr)=>acc+curr)
   

    // for(let i=0;i<g.length;i++){
    //     if(sum>=g[i]){
    //         sum-=g[i]
    //         g.splice(i,1)
    //         i--
    //         console.log(g)
         
    //     }
    // }

    // return (length-g.length)
    //  }return 0
};