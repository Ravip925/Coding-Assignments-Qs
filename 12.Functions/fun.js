//Functions -

//Qs 1. Create one function with zero parameter having a console statement.
function one(){
    console.log("Hello World!");
}
one();  //Hello World!

// ===============================================================================

//Qs 2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".
function addition(a,b){
    let sum = 0;
    sum = a + b;
    console.log(sum);
}
addition(3,4);  //7

// ==============================================================================

// Qs 3. Create one arrow function.
const myName = () => {console.log("My name is Ravi Patil.");}
myName();

// ====================================================================================

// Qs 4. 
//"Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//Output - Undefined.

// =========================================================================

// Qs 5. 
// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Output - undefined and 21

// ==========================================================================

//Qs 6. 
// "Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

// Output - Reference err - a and b not defined.

// ================================================================================================

// Qs 7. Write a function that accepts parameter n and returns factorial of n.
let fact = 1;
const factorial = (n) =>{
    if (n == 0 || n == 1){
        console.log(fact);
    }else{
        for(let i= n; i>=1; i--){
            fact = fact * i;
        }
        console.log(`Factorial of ${n} is ${fact}.`);
    }
}
factorial(3);//6