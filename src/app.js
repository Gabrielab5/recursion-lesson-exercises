/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

const { fallback_application_name } = require("pg/lib/defaults");

//Exercise 1
const findFactorial = function(num) {
  
  if (num==0 || num==1) return 1;
  return num*findFactorial(num-1)
}

//Exercise 2
const reverseString = function(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
};


//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2) {
  if (arr1.length==0) return arr2;
  arr2.push(arr1.shift())
  return swap(arr1,arr2)
}

console.log(findFactorial(8))
console.log(reverseString("hello",5))
swap(arr1,arr2)
console.log("arr1: ["+ arr1 +"] arr2: [" + arr2+"]")

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }