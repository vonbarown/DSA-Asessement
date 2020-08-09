const sortByHeight = (a) => {
  let s = a.filter(h => h > 0).sort((a, b) => a - b)
  let res = []
  let counter = 0
  console.log(s)
    
    for(let i = 0; i < a.length; i++){
        if(a[i] === -1){
            res[i] = a[i]
        } else {
            
            res[i] = s[counter]
            
            counter++
        }
    }
   return res
}

let arr1 = [-1, 150, 190, 170, -1, -1, 160, 180]


console.log(sortByHeight(arr1)) // [-1, 150, 160, 170, -1, -1, 180, 190]
