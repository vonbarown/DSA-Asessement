//determine if a string has all unique char

//return boolean value
//return true if  duplicates
//empty string returns false

//first approach
// loop over string
// create hasmap 
//containing letter as key and value occurence
// tomer => true 
// {
//   t:1,
//   o:1,
//   m:1,
//   e:1,
//   r:1
// }


//second approach
//use a set 
//arr =[duplicates letter]
//loop through 
//if the letter exist inside set 
//add the arr
//return length 

//both approach linear run O(n)
//space complexity

//force all capital letter to lowercase

//hello =>false


// {
//   h,
//   e,
//   l,
// }


//interview => false
//Pneumonoultramicroscopicsilicovolcanoconiosis => false

const isUniqueChar = (str) =>{

    if(!str) return false 

    let newSet = new Set () //init set

    str = str.toLowerCase()// sets the string to lowercase

    for(let i = 0; i < str.length; i++){
        if(newSet.has(str[i])){
          return false
        } else  {
          newSet.add(str[i])
        }

    }

    return true

}


const isUniqueCharBrute = (str) =>{
   
    if(!str) return false 


    for(let i = 0; i < str.length; i++){
      for(let j = 1; j < str.length; j++){
          if(i !== j && str[j] === str[i]){
            return false
          } 
      }

    }

    return true
}

 console.log(isUniqueChar('hello'))
console.log(isUniqueChar('supercalifragilisticexpialidocious'))
console.log(isUniqueCharBrute('zero'))

console.log('\n******************\n')
console.log('Brute force')
//brute force
console.log(isUniqueCharBrute('zoro'))
console.log(isUniqueCharBrute('hero'))
console.log(isUniqueCharBrute('Pneumonoultramicroscopicsilicovolcanoconiosis'))
