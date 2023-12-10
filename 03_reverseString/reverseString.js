const reverseString = function(text) {
    let lettersInArray = text.split("");
    console.log(lettersInArray);
    let reversedString = "";
    for (let i = lettersInArray.length - 1; i >= 0; i--){
        reversedString += lettersInArray[i];
    }  
    return reversedString; 
};

console.log(reverseString("hello world"));  

// Do not edit below this line
module.exports = reverseString;
