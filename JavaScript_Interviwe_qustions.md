##  Javascript interviwe Questions 

Q )   What is HTML ?
HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
 
Q )    What is CSS?   
CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

Q )   Why JavaScript is called scripting language ?
Programs in JavaScript are called scripts. They need no compilation, you just write a script, append it to HTML-page and it works.

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few      lines of JavaScript code.)

JavaScript is loosely type language, So its not necessary to declare the variables before use it in JavaScript, But If you want to use the variables without declaring it, than first you have to assign some value to the variables

Below is the list of data types supported by Javascript:-

Primitive datatypes :- Boolean , String ,Numbers 

Composite datatypes :- Objects, array

special datatypes :- Undefined  ,    Null

In the browser level javascript there 2 types of 
BOM     browser object manegmant 
DOM    document object menegment 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Q )  What is negative infinity? (-1/0) = -Infinity
Negative Infinity is a number in JavaScript which can be derived by "dividing negative number by zero". 

Q )  what is "use strict" ?

https://www.youtube.com/watch?v=fXvgOG2XV_w
---------------------

It use the strict operating context of javascript programming , 

"use strict";

money = 10 ;
console.log(money);

//Error :- x is not defined 

Even in the function the variable has to provide the keyword in JS code 

----------------------------

Q )    What is the diffrence between Increment ++ and Decrement -- operator using before and after the variable 
Using the oprend after variable the value will be return before incrementing or decrementing the variable , 

var a = 9;
console.log(a++)   // 9
console.log(a)       // 10

On opposite the value will be return after the after its incremented or decremented .
var a =9
console.log(++a)  //10
console.log(a)      //10

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
"""String methods and properties ""
  
- length         (Property to check the numbe of index )

- charAt()    :- to check the perticular index word 

var a = "you are the one to get them in the flam"
console.log(a.length);                                                 //38
console.log(charAt(0))                                               //y
console.log(a.charAt(a.length-1));                              //m

- toLowerCase()

- toUpperCase()

var a = "you are the one to get them in the flam"
console.log(a.toLowerCase());                                     
console.log(a.toUpperCase());                                    
                     
- indexOf

var a = "you are the one to get them in the flam"
console.log(a.indexOf('get'));                     //19

- subString(firstindex, lastindex )

var string = "JavaScript Hive";  alert(string.substring(3));   //aScript Hive

var string = "JavaScript Hive";  alert(string.substring(0,3)); //Jav

- substr(StartIndex, [length])  length decides how many character will exctracted from the string , its a littile diffrent from sunstring method

diffrence :- The substring() method the second parameter is the index to stop the search, whereas the second parameter of substr() is the maximum length to return.
	
var string = "JavaScript Hive";
 alert(string.substr(0, 3)); // Jav
 alert(string.substr(3)); // aScript Hive

- slice(StartIndex, [EndIndex])  Returns the part of the string from the StartIndex position to, but not including the EndIndex position, Same as the substring().

var string = "JavaScript Hive"; 
alert(string.slice(8, 12)); // pt H 
alert(string.substring(8,12)); // pt Hive

- slice 

alert(string.slice(3,-3)); //aScript H

topic for array may be 
diffrence between splice and slice method is the splice method will change the current array ans slice will not change 
var array=[1,2,3,4,5];
console.log(array.splice(2));

This will return [3,4,5]. The original array is affected resulting in array being [1,2].

var array=[1,2,3,4,5]
console.log(array.slice(2));

This will return 3,4,5. The original array is NOT affected with resulting in array being [1,2,3,4,5].

************************************************************************************************************************************
""Numbers "":-

---Scientific form 
var n1 = 5e3;
alert(n1); // 5000

var n1 = 5e-3;
alert(n1); // 0.005

---any number divided by zero the result will be infinity 

--- NaN : 

var numberString = "A9A"; 
var number = parseInt(numberString); 
alert(number); // NaN

alert(isNaN(NaN)); // true 
var numberString = "A9999"; 
var result = parseInt(numberString); 
alert(isNaN(result)); // true

---parseInt()  :- to convert the valid string number into integer number 

var string = "123"; 
var number = parseInt(string); 
alert(number); // 123

---parseFloat() :- to convert the valid decimal string number into the decimal number 
var string = "123.456"; 
var number = parseFloat(string); 
alert(number); // 123.456

Math.floor() function will convert the floating-point number into the nearest lower number.

var number = 5.4;
alert(Math.floor(number)); // 5

--Math.ceil() function will convert the floating-point number into the nearest higher number.
var number = 5.4;
alert(Math.ceil(number)); // 6

--Math.round() function will convert the floating-point number into the nearest higher or lower number. Math.round() will choose the vary nearest number.
alert(Math.round(5.4)); // 5
alert(Math.round(5.5)); // 6
alert(Math.round(5.6)); // 6

Math.random() function will help us to get the random number
alert(Math.random());
alert(Math.random());
==============================================================================================================================

""Objects"" 
Objects in JavaScript is used for two purpose.

     Objects are used as the associative array. Which has the key and value pairs.

    -Below Both the ways we can create the empty object ,Object store the values by key which we can assign or delete using “dot notation“.
         
var obj = new Object();
//or
var obj = {};
    

    Objects are used for object-oriented programming.

There are 4 ways to create an object in javascript 
1 . Using object Litreal syntax 
2. Using the Object() function 
3. Using Constructor Function 
4. Using the Object.create Method 

1 . Using object Litreal syntax   :- The Object littreal syntax way to create an object 

var human = {
    name: "Pranay",
    surname: "Rathor",
    fullname : function(){
        return this.name+" "+this.surname
    }
}

console.log(human.fullname())


2. Using the Object() function 

var human = new Object()
console.log(human);// Creates an empty object

3. Using Constructor Function 

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

console.log(human.fullname())
var viratKohli = new Human("Virat", "Kohli");
var sachinTendulkar = new Human("Sachin", "Tendulkar");

4. Using the Object.create Method   (Object.create(prototype_object, propertiesObject))

Object.create methods accepts two arguments.

    prototypeObject: Newly created objects prototype object. It has to be an object or null.
    propertiesObject: Properties of the new object. This argument is optional

           ##Create object with Object.create with no prototype

var person = Object.create(null);

typeof(person) // Object
console.log(person) // Object with prototype object as null

// Set property to person object
person.name = "Virat";

console.log(person) // Object with name as property and prototype as null

Note :- Here, we have created a new object person using Object.create method. As we have passed null for the prototypeObject. person object does not have any prototype object.

            ## Create object with prototype:

prototypeObject = {
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}
var person = Object.create(prototypeObject)

console.log(person) // Object with prototype object as prototypeObject and no properties

// Adding properties to the person object
person.firstName = "Virat";
person.lastName = "Kohli";

person.fullName() // Virat Kohli



#####Prototype object of the constructor function is shared among all the objects created using the constructor function.######

Understand protype fully :- https://hackernoon.com/prototypes-in-javascript-5bba2990e04b

##########Consider another example to display the issue with proptotypes when the prototype object contains a property of reference type

//Create an empty constructor function

function Person(){
}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create objects using the Person constructor function
var person1= new Person();
var person2 = new Person();

//Add a new element to the friends array
person1.friends.push("Amit");

console.log(person1.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends);// Output: "Jadeja, Vijay, Amit"

Note  :- we pushed "amit" in only person1 but it got chnaged in person2 also?  why ?
Because the friends array exists on Person.prototype, not on person1, the changes made in the friends property by person1 objects are also reflected on person2.friends (which points to the same array).

------To solve above both problmens, we can define all the object specific properties inside the constructor and all shared properties and methods insdie the prototype as shown below:

//Define the object specific properties inside the constructor
function Human(name, age){
	this.name = name,
	this.age = age,
	this.friends = ["Jadeja", "Vijay"]
}
//Define the shared properties and methods using the prototype
Human.prototype.sayName = function(){
	console.log(this.name);
}
//Create two objects using the Human constructor function
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");

//Lets check if person1 and person2 have points to the same instance of the sayName function
console.log(person1.sayName === person2.sayName) // true

//Let's modify friends property and check
person1.friends.push("Amit");

console.log(person1.friends)// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends)//Output: "Jadeja, Vijay"









=======================================================================================================================================
""Arrays""

=======================================================================================================================================
""Functions"

JavaScript also provides you the functionality to create a function. In JavaScript we can create a function in three ways.

    Function Declaration.
    Function Expression.
    Create a function using the new keyword with Function class.


1. Function Declaration

Function declaration is professional and good practice to declare the function in JavaScript. 

function addition(num1, num2) {
    console.log(num1 + num2);
}
 
addition(10, 5);

2. Function Expression

In Function Expression we can assign the function to any variable like we assigning the string and numbers to the any variable. After that we can call that function using the that variable name.

var MyFunction = function (msg) {
    alert(msg);
}
 
MyFunction("Function Expression!!!");

3. Function Constructor

var myFunction = new Function('msg', 'alert(msg)');
 
myFunction("Wow, It's worked!!!");

--self closing functions 
     
   (function () {
    alert("Hello world");
    })();




=======================================================================================================================================
Object conversion using ToString and valueOf

=======================================================================================================================================
DOM :- DOM represents the whole HTML page as a tree. This tree is made up of parent-child relationships, a parent node can have one or more child nodes.

While accessing the HTML tag in the JavaScript we have to use the document object.
document object is a global object, we can use it from anywhere in the HTML page.
document object provides the multiple properties and the methods that allow us to search the specific elements in the HTML page.

1. We can get the topmost HTML tag using the "document.documentElement" property.

2. document.body tag is a special property which points to the BODY tag of the HTML document, so by using the document.body we can access the BODY tag of the HTML page.
Note :- That the document.body tag cannot be used in the head tag as first head tag will be executed and then body , it will return null value 

3. ChildNode(document.chileNodes) :- The DOM keeps the references of the it’s all children into the childNodes property.childNodes is array and it have the links of the every children.
childNodes also keeps the links of the white-space.

<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversing</title>
</head>
<body>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
    <div>Four</div>
    <div>Five</div>
 
    <script type="text/javascript">
        var bodyChilds = document.body.childNodes;
 
        for (var i = 0; i < bodyChilds.length; i++) {
            console.log(bodyChilds[i].nodeName);
        }
    </script>
</body>
</html>
 
// #text
// DIV
// #text
// DIV
// #text
// DIV
// #text
// DIV
// #text
// DIV
// #text
// SCRIPT

4. children(document.body.children) :- children property is the same as the childNodes property, but the difference is only that children property does not store the white-space or text node, it only store the elements nodes.
<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversing</title>
</head>
<body>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
    <div>Four</div>
    <div>Five</div>
 
    <script type="text/javascript">
        var bodyChilds = document.body.children;
 
        for (var i = 0; i < bodyChilds.length; i++) {
            console.log(bodyChilds[i].nodeName);
        }
    </script>
</body>
</html>
 
// DIV
// SCRIPT


5 . firstChild property return the link of the first children.
     lastChild property return the link of the last children.


<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversing</title>
</head>
<body>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
 
    <script type="text/javascript">
 
        var body = document.body;
 
        console.log(body.firstChild.nodeName); // #text
 
        console.log(body.lastChild.nodeName); // SCRIPT
    </script>
</body>
</html>

6. parentNode, previousSibling and nextSibling

parentNode property return the link of the parent node.
previousSibling return the link of the previous element or the left hand side element.
nextSibling return the link of the next element or the right hand side element.

<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversing</title>
</head>
<body><div>First</div><div>Second</div><div>Third</div>
 
    <script type="text/javascript">
 
        var firstChild = document.body.firstChild;
        var secondChild = firstChild.nextSibling;
        var thirdChild = secondChild.nextSibling;
 
        console.log(firstChild.innerText); // First
        console.log(secondChild.innerText); // Second
        console.log(thirdChild.innerText); // Third
 
        secondChild = thirdChild.previousSibling;
        firstChild = secondChild.previousSibling;
 
        console.log(firstChild.innerText); // First
        console.log(secondChild.innerText); // Second
 
        var parent = firstChild.parentNode; // BODY tag
        parent = secondChild.parentNode; // BODY tag
        parent = thirdChild.parentNode; // BODY tag
    </script>
</body>
</html>

-- DOM Node Properties :- A DOM node is an object with methods and properties containing information about node itself. Some of the properties are read-only and some can be update.

nodeType  :- nodeType property is the read-only property, Simply we can not modify nodeType property.

const ELEMENT_NODE                  = 1;
const ATTRIBUTE_NODE                = 2;
const TEXT_NODE                     = 3;
const CDATA_SECTION_NODE            = 4;
const ENTITY_REFERENCE_NODE         = 5;
const ENTITY_NODE                   = 6;
const PROCESSING_INSTRUCTION_NODE   = 7;
const COMMENT_NODE                  = 8;
const DOCUMENT_NODE                 = 9;
const DOCUMENT_TYPE_NODE            = 10;
const DOCUMENT_FRAGMENT_NODE        = 11;
const NOTATION_NODE                 = 12;

================================================================
############################# JavaScript Events and Event Handlers ######################################################
Q ) What is Event bubeling in Javascriipt 

https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e


JavaScript have many type of the events:    ""An event is a signal from the browser that something has happens.""

    DOM Events: Events which are initiated by DOM-elements. For example: a click event happens when an element is clicked or the mouseover when a mouse pointer comes over an element.
    Window Events: Events which are related to the browser windows. For example: resize – when a browser window is resized.

Ways of assigning events to elements

1. Using an attribute of HTML-tag.

<input type="button" id="btnSubmit" value="Submit" onclick="alert('Hello World!!!');" />

We can also call the function from the “onclick” attribute. For that we just have to pass the function name into the onclick attribute.

<input type="button" id="btnSubmit" value="Submit" onclick="HelloWorld();" />
and in script tag we will have to create an function 

function HelloWorld() {
    alert('Hello World!!!');
}

2. Using DOM object property

<input type="button" id="btnSubmit" value="Submit" />

var btnSubmit = document.getElementById("btnSubmit");
 
btnSubmit.onclick = function () {
    alert("Hello World");
};

We can also use the existing function as the handler, So we can assign the any existing function to the property.

<input type="button" id="btnSubmit" value="Submit" />

function SayHello() {
  alert("Hello World");
}

var btnSubmit = document.getElementById("btnSubmit")

btnSubmit.onClick = Sayhello;

3. DOM element’s Handlers method

element.addEventListener("event-type", handler, phase);

element.removeEventListener("event-type", handler, phase);

Example:

<input type="button" id="btnSubmit" value="Submit" />


function ShowMessage() {
    alert("Now, Click event will be removed.");
 
    btnSubmit.removeEventListener("click", ShowMessage, false);
}
 
var btnSubmit = document.getElementById("btnSubmit");
 
btnSubmit.addEventListener("click", ShowMessage, false);

=======================================================================================================================================

This keyword

https://hackernoon.com/this-in-javascript-8e8d4cd3930
1 . Global Context

When functions are executed in the global scope, value of this is windows object.

var myFunciton = function(){
  console.log(this);                               // winow object
  console.log(this=== window);            // true
}

myFunction();// Output: Window object. In strict mode value will be undefined 
 
Note that The above function was not executed inside any other function or object hence, by default myFunction was called on the global object.
myFunction() is equivalent to window.myFuntion()


2. As an object method
When a function is called as a method of an object, it’s this is set to the object the method is called on.

var val = 37;
var myObj = {
	val : 10,
	someFunction : function(){
		console.log(this.val);//Output: 10 since tha value of this is equal to myObj
		console.log(window.val); //Output: 37
		console.log(this === myObj) // true
		console.log(this)//Output: myObj object
	}
}

myObj.someFunction();

Anotherexample for an object method 

//Variable defined in global scope
var val = 37;

var myObj = {
	val : 10
}

var someFunction = function(){
		console.log(this.val);
		console.log(window.val);
		console.log(this === myObj);
		console.log(this);
		console.log(this === window) 
}

myObj.objectFunc = someFunction;
myObj.objectFunc();  
/*
Output:
	1. 10
	2. 37
	3. true
	4. myObj
	5. false
*/

someFunction();
/*
Output:
	1. 37
	2. 37
	3. false
	4. window
	5. true
*/

In above code we called myObj.objectFunc method which return the value but when calling someFunction() we get another value 

3. As a constructor 

function ConstructorFunc(value){
	this.someValue = value;
}

var obj1 = new ConstructorFunction(20);
console.log(obj1.someValue)//Output: 20

Here, we have defined ConstructorFunc to create new objects. When

var obj1 = new ConstructorFunction(20) is executed, value of this will be equal to the new object that is created.





=======================================================================================================================================


For ...in loop Vs For ...Of loop

For…of loop is comes with the JavaScript ES6. Only new and updated modern browser is supports the For…of loop. Wherever JavaScript supports the For…in loop from long time.

For…in loop is loop on the key of the array, where as the for…of loop is loop on the value of the array.

var array = ["A", "B", "C", "D", "E"];

console.log("For In loop returns: Key ");
for (var key in array) {
  console.log(key + ", ");
}

console.log("<br/>For Of loop returns: Value ");
for (var value of array) {
  console.log(value + ", ");
}

//For In loop returns: Key
//0, 1, 2, 3, 4,
//For Of loop returns: Value
//A, B, C, D, E,
 
- 

For ..in loops are itrable for array and object both but For .. of loop only for array not an object 


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
what is close()?
 In Javascript close() method is used to close the current window. You must write window.close() to ensure that this command is associated with a window object and not some other JavaScript object.

function openWin() {
    myWindow = window.open("", "myWindow", "width=200, height=100");   // Opens a new window
}

function closeWin() {
    myWindow.close();   // Closes the new window
} 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

What is the difference between let and var?
Both var and let are used for variable/ method declaration in javascript but the main difference between let and var is that var is function scoped whereas let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.

Have a look towards below example 
function start(){
   for(let i = 0; i< 5; i++)  //with let keyword the second console will print the error 
    console.log(i)
  
 console.log(i) 
}


function start(){
   for(var i = 0; i< 5; i++)  //with var keyword the second console will print the value 5 coz var if not block scope but its function scope 
    console.log(i)
  
 console.log(i) 
}


//var => function-scoped 
//ES6 :let => block scoped 

----------------------------------------------------------------------------------------------------------------------------------------------------
Q )  Explain hoisting and scopping in JavaScript?
****Scoping 

Variables in JavaScript are not defined in block scope(if-else,for loop,another loop), but in a function scope, that means if a variable is defined inside a function, its not accesable outside of the function.
But if the variable is defined globally it can be accesable inside the function .

var global = 'I am declared in global scope';

function testScope(){
    var inner = 'I am declared inside a function scope';
    console.log(global);
    console.log(inner);
}

testScope();  //this will print both the global and inner value 

console.log(inner)// this will print inner is not defined because this variable is not defined glocally its defined in the function 

****Hoisting 
https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1

var a = 123;

function f() {
    console.log(a);
    var a = 1;
    console.log(a);
}

f();

//undefined 
//123
--------------------------------------
When a variable decleared inside the function and globally by default hoisting happens inside the function for variable decleration .

Hoisting means any decleared variable inside function will sit at top of the code in function (only decleration ,not the assined value) ,which will act to next console.log as a undefined 
Note :- in hoisting inside function cannot access the global variable due to hoisting happen and variable act as a undefined value 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is Higer order function in JavaScript ?
A higer order function is a function that takes one or more function as an argument . Wait...what ?didn't get anything ?

using function decleration 

function outer(param) { 
    function inner(theinput) {
        return theinput * 2; 
    }
    return 'The result is ' + inner(param); 
}

using function expression 

var outer = function (param) {
    var inner = function (theinput) {
        return theinput * 2; 
    };
    return 'The result is ' + inner(param); 
};

output :- 
outer(2); //"The result is 4"
outer(8); // "The result is 16"
inner(2); // ReferenceError: inner is not defined

inner functions are alse called privet functions which only can be accessable with outer function ,where we call the function is higer order function 
according to MDN freecode there are multiple way to write an higer order function using .map() and using .reduce() method 




------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is the use of let & const?

In modern javascript let & const are different ways of creating variables.Earlier in javascript, we use the var keyword for creating variables. let & const keyword is introduced in version ES6 with the vision of creating two different types of variables in javascript one is immutable and other is mutable.
const:      It is used to create an immutable variable. Immutable variables are variables whose value is never changed in the complete life cycle of the program.
let:          let is used to create a mutable variable. Mutable variables are normal variables like var that can be changed any number of time.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is event loop in Javascript ?

https://www.youtube.com/watch?v=8aGhZQkoFbQ

https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Explain Closures in JavaScript? 
A closure is a function having access to the parent scope, even after the parent function has closed.

var addTo = function(passed){

  var add = function(inner){
  return passed+inner;
  };
  return add;

};

var addThree = new addTo(3);
var addFour = new addTo(4);

console.log(addThree(1))
console.log(addFour(1))





In below program outer functions counter variable have access in inner function which is a great example of clousers .

 var add = (function () {
    var counter = 0;
    return function () {
    counter += 1; 
    return counter
   }
})();

add();
add();
add();

// the counter is now 3 
==========================================================================================================================
What is a “closure” in JavaScript? Provide an example
(https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z)

A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.

The closure has access to variables in three scopes:

    Variables declared in their own scope
    Variables declared in a parent function scope
    Variables declared in the global namespace

var globalVar = "abc"; 

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    }// end of scope innerFunction)(5); // Pass 5 as parameter 
}// end of scope outerFunction )(7); // Pass 7 as parameter 

innerFunction is closure that is defined inside outerFunction and has access to all variables declared and defined in the outerFunction scope. In addition, the function defined inside another function as a closure will have access to variables declared in the global namespace.

Thus, the output of the code above would be:

outerArg = 7
outerFuncVar = x
innerArg = 5
innerFuncVar = y
globalVar = abc

===========================================================================================================================================

