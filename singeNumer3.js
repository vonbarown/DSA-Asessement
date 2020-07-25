/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    if(!nums.length) return
    
    let obj = {}
    let res = []
    let indx = 0
    
    for(let i = 0; i < nums.length; i++){
        
        let k = nums[i]
        
        obj[k] = (obj[k] || 0) + 1
    }
    
    for(let j in obj){
        if(obj[j] === 1){
            res[indx] = Number(j)
            indx++
        }
    }
    
   return res

};
