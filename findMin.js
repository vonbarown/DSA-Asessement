const nums = [1,3,5]

var findMin = function(nums) {
    
 //    using javascript min method    
//     if(!nums.length) return -1
//     return Math.min(...nums)
    
    
    
    let minSet = new Set(nums)

    let arr = Array.from(minSet)
    
    arr = arr.sort((a,b) => a - b)
    
   return arr[0]
};
