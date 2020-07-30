//@AminesCodes
//@vonbarown

const compression = str => {
  if(!str) return -1
  
  let output = '';
  let counter = 1
  for (let i = 0; i < str.length ; i ++){

    if(str[i] === str[i + 1]){
      counter++
    } else {
      if (counter === 1) {
       output += str[i]
      } else {
        output += counter + str[i]
      }
      counter = 1
    }
  }
  return output
}

const shortString = (str, k) => {
  let min = Infinity;
  let shortest;


  for (let i = 0; i < str.length - k; i++) {
    const newStr = str.substring(0, i) + str.substring(i + k)
    console.log(i, newStr, "rm:", str.substring(i, i+k))

        const compressed = compression(newStr)
        if (compressed.length < min) {
          min = compressed.length
          shortest = compressed
        }
  }

  console.log("short: ", shortest)
  return min
}

// shortString('ABCDEFG',3)

shortString('AAAAAABCDDDEFFFFFGHIIIJ',2) //9Ab2X13A
// console.log(compression('ABBBCCDDCCCD'))
