/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let result=[]
    for(let i=Math.floor(Math.sqrt(area));i>0;i--){
       if(area%i===0){
        result.push(area/i,i)
         return result
       }
        }
    
   
};