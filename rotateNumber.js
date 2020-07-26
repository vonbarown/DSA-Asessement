// 0 -> 0 (t)
// 1 -> 1 (t)
// 8 -> 8  (true)
// 69 -> 69 (true)
// 66 -> 99 (false)
// 6019 -> 6109 (false)

// integer
// true/false

//input integer
// output boolean

//compare the input to a 180 flip of number 
//integer are always positive
//use any mehtods available

//initial mehtods

//take input of integer
//convert into a string 
//reverse the new sting and compare it to the input
//output the compare (true/false)

//loop reverse string
//check the dictionary for current value
//concat to the result what the reverse shoukld be
//if reverse of number is false should return flase

const  compareFunc = (int) =>{

//dictionary of numbers and there rotation
  let  dict = {
    0:0,
    1:1,
    2:null,
    3:null,
    4:null,
    5:null,
    6:9,
    7:null,
    8:8,
    9:6
  }

//converting int to string
  let txtInput = String(int)

let revStr = ''

//through the string of input reversing
for(let i = txtInput.length - 1; i >= 0; i--){
    revStr += txtInput[i]
}

  let result = ''
//looping through reversed string
 for(let j = 0; j < revStr.length;  j++){
 
   let key = revStr[j]  // key = 6
   if(dict[key] === null)  {
     return false
   }
    result += dict[key]
 }

  return int  === Number(result)

}

console.log(compareFunc(6019))
console.log(compareFunc(66))
console.log(compareFunc(69))
console.log(compareFunc(33))

// 6019 -> <-- 9106 ---> 6109 
// 689 ->  986 ---- ? --> 689 ( 9 -> 6, 8->8 ,  6->9)
// 1806 -> 6081 --- ?  ----> 9081 (6 -> 9, 0 -> 0, 8 ->8, 1 -> 1)

// 

// 6081

// dic
// 6 -> 9
// 0 -> 0
// 8 -> 8
// 1 -> 1


// 9081
