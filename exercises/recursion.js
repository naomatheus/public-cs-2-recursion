// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // will take an array
    // and an array index
    // subtract 1 from each number and highest difference is largest
    nums = arr.slice();

    if (nums.length === 1){
        return nums[0];
        // base case is returning the current index
    } 

    if (nums[0] < nums[1])
        // if the next number in the array is less than, splice the first instead
    {
        nums.splice(0,1)
    } 
    
    else {
        // if the next number is greater, splice the next index and compare
        nums.splice(1,1);
    }

    return findMax(nums);
    // This function returns the largest number in a given array.
}
myArr = [6,4,7,2,9]
negativeArr = [-1,-5,-7,-9];
console.log(findMax(negativeArr));
console.log(findMax(myArr));

// findMax(myArr, 0)

function factorialHelper(num){
    // This function returns the factorial of a given number
    // function multiples all values below the given number
    // base case.... is when the iterator reaches 1
    if (num === 0) {

        return 1;

    } else {

        return num*(factorialHelper(num-1));
    }
   
}
console.log(factorialHelper(4), 'this is the logs')

function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (num <= 1){
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

}

console.log(fibonacci(8));

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"




}
console.log(coinFlips(2));

// function letterCombinations(){
//     // This function returns an array of all combinations of the given letters
//     // Input type: Array of single characters
//     // For example, letterCombinations(["a","b","c"]) would return the following:
//     // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

// }

function letterCombinations(str){
    let all = []

    if (str.length === 1){
        return [str]
    } for (let i = 0; i < str.length; i++){
        const currentLetter = str[i]
        const remainingLetters = str.slice(0,1) + str.slice(i + 1)

        const permsOfRemainingLetters = letterCombinations(remainingLetters)

        permsOfRemainingLetters.forEach(subPerm => {
            all.push(currentLetter + subPerm)
        })
    }
    return all;
}

console.log(letterCombinations('abc'));

module.exports = {
    findMax,
    factorialHelper,
    fibonacci,
    coinFlips,
    letterCombinations
}