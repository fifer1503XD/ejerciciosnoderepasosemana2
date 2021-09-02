function twoSums(numbs, target) {
    for (let i = 0; i < numbs.length; i++) {
        for (let j = i+1; j < numbs.length; j++) {
            if (i!=j){
                if(numbs[i]+numbs[j]===target){
                    return [i,j]
                }
            }
        }
    }
}

module.exports = twoSums;