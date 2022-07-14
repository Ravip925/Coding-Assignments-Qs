let studentRecords =[ 
{name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ];


// Qs 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

let onlyNames = [],
i = 0;
while(i < studentRecords.length){
    onlyNames.push(studentRecords[i].name.toUpperCase());
    i++;
}
console.log(onlyNames);

//o/p = (4) ['JOHN', 'BABA', 'YAGA', 'WICK']

// ===================================================================================================================

// Qs 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let toppers = studentRecords.filter(item => item.marks >= 50);
console.log(toppers);

//o/p = {name: 'John', id: 123, marks: 98}
//      {name: 'Wick', id: 115, marks: 75}

// ==========================================================================================================

// Qs 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let toppersAnd_Ids = studentRecords.filter(item => (item.marks >= 50) && (item.id >= 120));
console.log(toppersAnd_Ids);

//o/p = {name: 'John', id: 123, marks: 98}

// ============================================================================================================

// Qs 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sumOfMarks = studentRecords.reduce((acc,curr) => acc += curr.marks,0);
console.log(sumOfMarks);

// o/p = 241

// ===================================================================================================

// // Qs 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let onlyName = [],
j = 0;
while(j < studentRecords.length){
    if(studentRecords[j].marks> 50){
        onlyName.push(studentRecords[j].name);
    }
    j++;
}
console.log(onlyName);

// o/p = ['John', 'Wick']

// =============================================================================================================

//Qs 6: This time we are required to print the sum of marks of the students with id > 120.

let totalMarks = 0,
x = 0;

while(x < studentRecords.length){
    if(studentRecords[x].id > 120){
        totalMarks += studentRecords[x].marks;
    }
    x++;
}
console.log(totalMarks);

// o/p = 143

// =====================================================================================================

// Qs 7. This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let marginalPass = 0,
z = 0;
while(z < studentRecords.length){
    if(studentRecords[z].marks < 50){
        marginalPass += studentRecords[z].marks + 15;
    }
    z++;
}
console.log(marginalPass);

// 98

// =============================================================================================================

// Qs 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

function students(studName, studClass, rollno){
        this.studName = studName;
        this.studClass = studClass;
        this.rollno = rollno;  
}
const studentOne = new students("Ravi", "A", "25");
const studentTwo = new students("Omi", "B", "26");
const studentThree = new students("Vaibhav", "C", "30");
const studentFour = new students("Pruthvi", "D", "35");
const studentFive = new students("Suraj", "E", "40");
const studentSix = new students("Roy", "F", "60");

let stud_Array = [studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix];
console.log(stud_Array);





