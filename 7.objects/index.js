//Objects

//Qs 1. Create a Function
//Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named name. 
//Your task is to create a method inside this object named setter,such that this method will print the value of the data member named as name.
//Ans- 
function Check(obj1){
  obj1.setter = function(){
    console.log(this.name);
  };
}

// Sample Input
// Utkarsh

// Sample Output
// Utkarsh

// ==================================================================================================

//Qs 2. Delete a Property
//Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from the object and return the object.
// Ans - 
function Check(obj1) {
  if(delete obj1.rollno){
    return ("True");
  } 
  else{
    return ("False");
  }
}

// Sample Input
// Utkarsh
// 129

// Sample Output
// True

// =============================================================================

// Qs 3. Check whether the Package is Dream Package or not
////Complete the function in the editor. In which you are given an object as a parameter.In that object, there is one property 
//named as salary if the salary is maximum than 5 lakh then return "Dream" otherwise  return "NotDream".
//Ans-
function Check(obj1) {
  let money = (obj1.salary >= 500000) ? ("Dream"): ("NotDream");
  return (money);
}

// Sample Input
// 100000

// Sample Output
// NotDream

// ===========================================================================================

//Qs 4. Check whether the Object has a parameter or not
//Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" 
//if there is no parameter in the object otherwise return "true".
//Ans - 
function Check(obj1) {
  let param = Object.entries(obj1).length >= 1 ? ("true") : ("false");
  return (param);
}

// Sample Input
// 1

// Sample Output
// true

// ====================================================================================================================

// Qs 5. Merge the Objects
////Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two objects and return a single object.
// Ans= 
function Check(obj1,obj2) {
  let merge = Object.assign(obj1, obj2);
  return merge;
}

// Sample Input
// Utkarsh 
// 129
// Haryana
// 121009

// Sample Output
// Utkarsh 129 Haryana 121009

// ==================================================================================================

// //Qs 6. Object Multiplyer
//Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and
// houseno are defined as a data member. You have to multiply both the data members with a given digit N.
// Ans=
function Check(a,obj1) {
  obj1.id *= a;
  obj1.houseno *= a;
  return obj1;
}

// Sample Input
// 2
// 12
// 146

// Sample Output
// 24
// 292

// ================================================================================

//Qs 7. Find the  sum of Object Members
//You are given a function Check which takes an object obj as a parameter.Your taks is to find out the sum of the three data members of the object. The data members are named as p1, p2, p3.
//Note: You have to complete Check function. No need to take any input.
//Ans-
function Check(obj1) {
  let sum = obj1.p1 + obj1.p2 + obj1.p3;
  return sum;
}

// Sample Input
// 1
// 2
// 3

// Sample Output
// 6

// ======================================================================

//Qs 8.Check whether the Objects are same or not.
//Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
//Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
//Return "true" if new_name and id are same as objects name and id otherwise return  "false".
// Ans-
function check(obj1,a,b) {
  let checking =  obj1.name == a && obj1.id == b ? "true" : "false";
  return (checking);
}

// Sample Input
// Utkarsh 
// 2 
// Prepbytes 
// 3

// Sample Output
// false