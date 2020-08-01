/**
 * @param {string} word
 * @return {boolean}
 */
 
 
var detectCapitalUse = function(word) {
    
    if(word[0] === word[0].toUpperCase()){
        word = word.substring(1)
    }
    
    return word === word.toUpperCase() || word === word.toLowerCase()
};


var str = "FlaG"

console.log(detectCapitalUse(str))
