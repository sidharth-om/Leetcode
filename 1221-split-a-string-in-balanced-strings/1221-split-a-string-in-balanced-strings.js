/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rLength=0
    let lLength=0
    let count=0
       let temp=''
    for(let i=0;i<s.length;i++){
        temp+=s[i]

        if(s[i]==='R'){
            rLength++
        }else{
            lLength++
        }
    if(rLength===lLength){
        count++
        temp=''
        rLength=0
        lLength=0
    }

    }
   return count
};