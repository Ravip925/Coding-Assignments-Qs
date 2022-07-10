//Qs 1. Find the Smaller Angle.
//PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter 
//angle formed between hour and minute hand at any given time.
//Note: You have to complete Minimal_Angle function. No need to take any input.
//Ans - 
var Minimal_Angle = (h, m) => 
{
  const minute = m * 6;
  const hour = (h * 30) + (m * 0.5);
  const angle = Math.abs(hour - minute);
  return Math.min(angle, 360 - angle);    
};

// Sample Input 1
// 5 30

// Sample Output 1
// 15

// Sample Input 2
// 6 0

// Sample Output 2
// 180

// ============================================================================================

//Qs 2. Check whether the year is Leap year or not.
//Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.
//Note: You have to complete Check_Leap function. No need to take any input.
//Ans-
var Check_Leap = (year) => 
{
    const Feb = new Date(year, 1, 29).getDate() === 29;
    if (Feb) {
        return ("Leap Year");
    } else {
        return ("Non Leap Year");
    }
};

// Sample Input 1
// 1900

// Sample Output 1
// Non Leap Year

// Sample Input 2
// 2012

// Sample Output 2
// Leap Year

// ===========================================================================================================================

//Qs 3. Perfect Number Check.
//Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself. Now, You are given an integer 
//N, write a program to check whether the given number is a Perfect Number or not.
//Note: You have to complete Perfect _Check function. No need to take any input.
//Ans-
var Perfect_Check = (N) => 
{
  var sum = 0;
  for (var i = 1; i < N; i++) {
      if (N % i === 0) {
          sum +=  i;
      }
  }
  if (sum == N){
    return ("YES");
  }
  
  return ("NO");
  
};
 

// Sample Input 1
// 1

// Sample Output 1
// YES

// Sample Input 2
// 96345

// Sample Output 2
//NO

// =================================================================================

// Qs 4. Reverse a Number.
//Write a program which takes a numebr N as input from the user and You need to reverse the number.
//Note: You have to complete Reverse_Number function. No need to take any input.
//Ans-
var Reverse_Number = (N) => 
{
  return (parseFloat(N.toString().split('').reverse().join('')) * Math.sign(N));

};

// Sample Input 1
// 1900

// Sample Output 1
// 91

// Sample Input 2
// 2012

// Sample Output 2
// 2102

// ===============================================================================================

// Qs 5. Substring Check.
//You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.
//Note: You have to complete Substring_Check function. No need to take any input.
//Ans-
var Substring_Check = (S1, S2) => 
{ 
  if(S1.includes(S2)){
    return "YES";
  }
  else{
    return "NO";
  }
  
};

// Sample Input 1
// Hii this is Prepbuddy
// Prepbuddy

// Sample Output 1
// YES

// Sample Input 2
// Hii this is Prepbuddy
// Prepbytes

// Sample Output 2
// NO