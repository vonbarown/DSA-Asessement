const firstDuplicate = (a) => {
    let obj =  {}
    
    for(let i = 0; i < a.length; i++){
    
    if(obj[a[i]]){
        obj[a[i]][0] += 1
    }else{
        obj[a[i]] = [1,a[i]]
    }

       if(obj[a[i]][0] === 2){
           return obj[a[i]][1]
       }
    }
    
    // console.log('obj', obj)

    return -1
}

const sample1 = [2, 1, 3, 5, 3, 2] // 3

const sample2 = [2, 2] // 2

const sample3 = [2, 4, 3, 5, 1] // -1

console.log(firstDuplicate(sample1))
console.log(firstDuplicate(sample2))
console.log(firstDuplicate(sample3))
