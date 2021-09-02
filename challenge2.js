function divisibleByLeft(n) {
    let result =[false]
    let num=n.toString()
   for (let i = 0; i < num.length; i++) {
   
     if(num[i+1]){
         
        if(parseInt(num[i+1])%parseInt(num[i])===0){
            result.push(true)
        }
        else{
            result.push(false)
        }
     }
   }
   return result
}

module.exports = divisibleByLeft;