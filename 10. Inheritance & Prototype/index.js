//Inheritance and Prototype.
//Qs.1
//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

const employeesProto = {
    details(){
        console.log(`The employee's name is ${this.fName} ${this.lName}, with the employee ID ${this.jobId} joined in ${this.year}`);
    },
    courses(fname,lname,location,){
        this.fname = fname;
        this.lname = lname;
        this.location = location;
    }
}

let employeeOne = Object.create(employeesProto);
employeeOne.fName = "Ravi",
employeeOne.lName = "Patil",
employeeOne.jobId = "BT102",
employeeOne.year = "2020",

employeeOne.details();
// The employee's name is Ravi Patil, with the employee ID BT102 joined in 2020


const myCourses = Object.create(employeesProto);
myCourses.courses("Python","Java","DJango");
console.log(myCourses);
// {fname: 'Python', lname: 'Java', location,: 'DJango'}

// =======================================================================================================================================

//Qs.2
//Write code to explain prototype chaining.

const myProto = {                           //parent object
    detailOne(fname,lname,location){
        this.fname = fname;
        this.lname = lname;
        this.location = location;
    },
    details(){
        console.log(`Hi, I am ${this.fname} ${this.lname} and my current location is ${this.location}`);
    },
};

const myName = Object.create(myProto);          //myName is inheriting methods from myProto
myName.detailOne("Ravi","Patil","Belgaum");
console.log(myName);
myName.details();

const myFriend = Object.create(myProto);            //myFriend is assigned to parent proto

myFriend.detailTwo = function(fname,lname,location,course){
    myProto.detailOne.call(myFriend, fname,lname,location);     //calling parent method detailOne and assigned to myFriend.
    this.course = course;                                       //added extra parameter to show how we can add needed parameter only.
}
myFriend.intro = function(){
    console.log(`My friend is ${this.fname} ${this.lname} and he opted ${this.course} course from PrepByte.`);  //here this is pointing towards omkar.
}

const omkar = Object.create(myFriend);          //created an object to inherite methods from myFriend object which inturns inhering from parent object
omkar.detailTwo("Omkar","Jadhav","Belgaum",'Python');  //these arguments are catching myFriend detailTwo parameters
omkar.intro();      //calling intro
omkar.details();        //calling datails fn.


// ==============================================================================================


//Qs.3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.
let sum = 0;
function addition (arr){
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(`The sum of array elements are ${sum}`);
}

let myArray = [2,3,5,7,8,6];
addition(myArray);//31

let myArrayTwo = [12,15,10,11,9,8,1,12,18];
addition(myArrayTwo);//127


// ====================================================================

//Qs.4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
  
// Person.prototype.nationality = "English";
// const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather);
// console.log("The nationality of my father is " + myFather.nationality);

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender
}

let myObjectOne = new Person("Vaibhav", 25,'male')
console.log(`Name of the person is ${myObjectOne.name} whose age is ${myObjectOne.age} and gender is ${myObjectOne.gender}`);
let myObjectTwo = new Person("Roy", 27,'male')
console.log(`Name of the person is ${myObjectTwo.name} whose age is ${myObjectTwo.age} and gender is ${myObjectTwo.gender}`);


let secondObj = {
    name: "Josh",
}

secondObj.__proto__ = myObjectOne;//inheriting properties of myobjectOne

console.log(secondObj.name, secondObj.gender,secondObj.age);
