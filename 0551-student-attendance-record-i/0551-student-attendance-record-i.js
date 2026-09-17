/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let Acount=0
    let Lcount=0

    for(let i=0;i<s.length;i++){
        if(s[i]==='A'){
            Acount++
            if(Acount>=2)return false
        }
        if(s[i]==='L'){
            Lcount++

            if(Lcount>=3)return false
        }else{
            Lcount=0
        }
    }
    return true
};