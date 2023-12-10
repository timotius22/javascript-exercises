const repeatString = function(text, times) {
    if (times < 0){
        return "ERROR"
    } else {
        let newText = "";
        for(let i=0; i < times; i++){
        newText = newText + text;
        }
        return newText
    }
}

console.log(repeatString("hey", 5))

// Do not edit below this line
module.exports = repeatString;
