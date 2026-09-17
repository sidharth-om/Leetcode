/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
let arr=[]
let seen={}

for (let i = 0; i < score.length; i++) {
        seen[score[i]] = i;
    }

score.sort((a,b)=>b-a)


for(let i=0;i<score.length;i++){
    if(i===0){
       arr[seen[score[i]]]='Gold Medal'
    }else if(i===1){
         arr[seen[score[i]]]='Silver Medal'
    }else if(i===2){
         arr[seen[score[i]]]='Bronze Medal'
    }else{
         arr[seen[score[i]]]=String(i+1)
    }
}

return arr



};