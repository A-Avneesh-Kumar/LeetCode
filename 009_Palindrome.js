/**
 Given an integer x, return true if x is a palindrome, and false otherwise.
 @param {number} x
 @return {boolean}
 **/

 
var isPalindrome = function (x) {

    if(x<0) return false;

    let original = x;
    let reversedNum = 0;

    while(original>0){
        const lastDigit = original % 10;
        reversedNum = (reversedNum * 10) + lastDigit;
        original = Math.floor(original/10);
    }
    return x === reversedNum;
}

console.log(isPalindrome(121));