//"Problem:
//You are given a string (STR) of length N, consisting of only the lower case English alphabet.
//Your task is to remove all the duplicate occurrences of characters in the string.
//Ans - 
let chars = "abcadeecfb";
let removeDuplicates = [...new Set(chars)];
console.log(removeDuplicates);

// Input:
// "abcadeecfb"

// Output:
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]


//Qs 2.
//You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
// Ans - 
let str = "abcadeecfb";
function countChrOccurence () {
 let charMap = new Map();
 let count = 0;
  for (const key of str) {
   charMap.set(key,count); 
  }

  for (const key of str) {
    let count = charMap.get(key);
    charMap.set(key, count + 1);
  }
  for (const [key,value] of charMap) {
    console.log(key,value);
  }
}
countChrOccurence();


//Input:abcadeecfb
//Output:
//a=2
//b=2 
//c=2
//d=1
//e=2
//f=1

