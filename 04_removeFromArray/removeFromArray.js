const removeFromArray = function(inputArray, ...args) {
    let filteredArray = inputArray;
    for (let i = 0; i < args.length; i++){
        filteredArray = filteredArray.filter(argument => argument !== args[i])
        console.log(typeof inputArray)
        console.log(typeof args[i])
        console.log(filteredArray)
    }    
    return filteredArray;
};

console.log(removeFromArray([1,2,3,4,5], 1, "3",5)) 

// Do not edit below this line
module.exports = removeFromArray;
