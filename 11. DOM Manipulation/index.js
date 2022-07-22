// DOM Manipulation
//QS.1
// Write the code to access element which is having id as "text"

let eleOne = document.getElementById("text");
console.log(eleOne);    //<span id="text">Hi! Whatsup!!</span>

// ===============================================================================

// Qs.2
// Write the code to access element which is having tag as "h1"

let eleTwo = document.getElementsByTagName("h1");
console.log(eleTwo[0]);  //<h1>Hello World!</h1>

// ========================================================================================

// Qs.3
//Write the code to access element which is having class as "box"

let eleThree = document.getElementsByClassName("box");
console.log(eleThree[0]);   //<p class="box">...</p>

// ===============================================================================

// Qs.4
// "<h1>Hello </h1>
//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

let eleFour = document.getElementsByTagName("h2")
eleFour[0].innerHTML = "Hello World!";
console.log(eleFour);   //Hello  ---> //Hello World!.

// ==========================================================================================

// Qs.5
// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function clickForVertical(){
    let boxOne = document.getElementById("cards");
    boxOne.style.flexDirection = "column";
}
function clickForHorizontal(){
    let boxOne = document.getElementById("cards");
    boxOne.style.flexDirection = "row";
}

// ================================================================================================

// Qs.6
// What’s the difference between window vs document?
//Window - Window Object: The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. 
//Whenever a window appears on the screen to display the contents of the document, the window object is created. 
//syntax
//window.property_name;

// Document - The document object represent a web page that is loaded in the browser. By accessing the document object, 
// we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page.
// The document object can be accessed with a window.document or just document.
// syntax - 
//document.property_name;

// ===============================================================================================================================

// Qs.7
// "<h1>Hello </h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let tagOne = document.getElementsByTagName("h1");
console.log(tagOne[1]);
tagOne[1].style.fontStyle = "italic";
tagOne[1].style.color = "red";
tagOne[1].id = "myId";
tagOne[1].setAttribute("value","Heading");

// <h1 id="myId" value="Heading" style="font-style: italic; color: red;">Hello</h1>

// ============================================================================================

// Qs.8
// Create an HTML page having content as Hello world and a button named Replace Text. 
//When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changeMe(){
    const textOne = document.getElementById("textChange");
    textOne.innerText = "Welcome to Elevation Academy";
    textOne.style.color = "blue";
    textOne.style.fontWeight = "bold";
}

// ===========================================================================================================================

// Qs.9
// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function ShowTime(){
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let session = document.getElementById("session")

    if(hrs >= 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }
    if(hrs > 12){
        hrs -= 12;
    }
    

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}
setInterval(ShowTime,1000);

// =========================================================================================

// Qs.10
//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

let divOne = document.getElementById("drop");
let select = document.querySelector("#select");
let spanOne = document.getElementById("span1");

function clickMe(){
    spanOne = select.options[select.selectedIndex].value;
    document.querySelector('#span1').textContent = spanOne;
}

// =======================================================================================

function myform(){
    let birth = document.getElementById("bYear").value;
    let minyear = "1995";
    let a = document.getElementById("myemail").value;
    console.log(a);
    let b =a.substring(a.indexOf('@') + 1);
    console.log(b);
    if(birth >= minyear && b.includes("prepbytes.com")){
        return true;
    }else{
        alert("validation failed (Pls check your email, phone and birth year)");
        return false;
    }
    
}