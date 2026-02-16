/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
   let five=0
   let ten=0

   for(const num of bills){
    
    if(num===5){five+=5}

    if(num===10){
        ten+=10
        five-=5
    }

    if(num===20){
       if(ten>0){
        ten-=10
        five-=5
       }else{
        five-=15
       }
    }
    if(five<0||ten<0)return false
   }
   return true
};