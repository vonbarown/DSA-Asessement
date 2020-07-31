let string = 'abacbab'
//without repeating characters
const longestSubstring = (str) => {
  //initialize a variable for substringlength
  let longestSubStrLength = 0
  let currentStr = ''

  //looping through the string to vivist each character
  for (let i in str) {
    let currChar = str[i]

    //finiding the index of each char in the newly built string
    let charPos = currentStr.indexOf(currChar)

    if (charPos === -1) {
      currentStr += currChar
    } else {
      //calculating the max number between the 
      longestSubStrLength = Math.max(longestSubStrLength, currChar.length)
      currChar = str.substring(charPos + 1, i)
    }
  }

  //incase of strings with 2 characters or less
  longestSubStrLength = Math.max(longestSubStrLength, currentStr.length)

  return longestSubStrLength
}

console.log('longest substr', longestSubstring(string))
