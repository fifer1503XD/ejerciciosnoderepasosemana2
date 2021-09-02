function arrayOfMultiples (num, length) {
    result=[]
for (let i = 1; i <= length; i++) {
    result.push(i*num) 
}
return result
}

module.exports = arrayOfMultiples;