1.> What is Node JS?============

Node.js is a cross-platform runtime library and environment for running JavaScript applications outside the browser. This is a free and open source tool used for creating server-side JS applications. 
Node made by googles v8 engine with c++ code by ryan dhal in 2009 to run the JS code outside the browser .
actually it is event-driven and single-threaded with background workers. The main event loop is single-threaded but most of the I/O works run on separate threads, because the I/O APIs in Node.js are asynchronous/non-blocking by design, in order to accommodate the event loop.

googlechrome :- v8 Engine
mozila :- spider monkey
IE :- Chakra 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. > Why Node.js?
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js is a non blocking and single threaded application builder .What we call it Asyncronus way 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. > When to use Node.js ?
Node.js is best for usage in streaming or event-based real-time applications like 
Chat Applications , Game Servers , Streaming servers

Node.js is good when you need high levels of concurrency but less amount of dedicated CPU time.

the only scenario where it should not be used is if there are long processing times which is required by the application. 
Node is structured to be single threaded. If any application is required to carry out some long running calculations in the background. So if the server is doing some calculation, it won't be able to process any other requests.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4.>What is Module and why do we use module instead of window object ?
Basically when we create an function that function is accesable for window object like below .

function saHello(){
}

window.sayHello();

But we do not defined the function with window object because the next object will overright the privious object ,to avoid the same problem we need Modularity .
Modularity avoids duplication and the function and variable will be defined from perticular Module .

5.> Define some inbuild Node.js module .
1. HTTP 
2. Event
3. fs
4. OS
5. Path
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
6.> What is Angular JS?-------------------
AngularJS is a structural framework for developing dynamic web apps. It allows developers to use HTML as template language and lets HTML's syntax to express application's components briefly but clearly. 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
7.> What The hack is Event Loop-----------------
The event loop is in the heart of Node.js / Javascript - it is responsible for scheduling asynchronous operations.
Before diving deeper, let's make sure we understand what event-driven programming is.
Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.

--So all the callback functions are queued in an loop, and will run one-by-one when the response has been received.

In practice, it means that applications act on events.
Also, as we have already learned in the first chapter, Node.js is single-threaded - from a developer's point of view. It means that you don't have to deal with threads and synchronizing them, Node.js abstracts this complexity away. Everything except your code is executing in parallel.

My defination :-
----------------
eventually Google's crhome v8 engine (javascript engine to conver the javascript code into machine lengvage) is build from c , c++ and javascript code which is divided into 2 parts 
1. Heap :- memory orgination for server 
2. callstack :- executes the javascript code one by one 

Example :-
console.log("Start Program")

setTimeout(function(req, res)=> {
   console.log("Callback function")
},2000)

console.log("End Program ")
-----------------------------------------------
Output 
Start porgram 
End Program 
Callback Function


The settimeout function will be passed as WebAPI (setTimeout(), DOM, AJAX) and will call the function after 2 secound , then will be passed in the event queue => event loop will take and print the message on console .

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
8.>What is REsTFull APIs ? How do we prefer them .
https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9

First, you’ll need to recognize the difference between serving static assets and serving data. Serving static files is serving your HTML, CSS and JavaScript pages as they are. The reason they’re called static files is because they are not changed by the server nor run, they’re merely sent back as files for your browser to parse through. This is what you’ve most probably been doing without even realizing.
Express is a really cool Node framework that’s designed to help JavaScript developers create servers really quickly. NodeJS may be server side, but it can do a whole lot more than just serve pages and data.

You might be wondering where the REST attribute comes in. REST stands for REpresentational State Transfer. This means there is no state between the client and the server. There are no webpages served to be parsed, just data. And this gives you all the freedom you need. All you need to do is write some logic on a specific URL that connects to a database, uses it’s logic to process the data and return it in JSON format. Your client can now be an Android app made in Java, or a Windows desktop app made in C# or an Arduino project.

This is the whole point of using REST, it makes the connection stateless therefore any client that utilizes the HTTP protocol can access this data. Now you can iterate through the data and display it anywhere you want.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
9.> What is REPL 
REPL means Read-Eval-Print-Loop. It is a virtual environment that comes with Node.js. We can quickly test our JavaScript code in the Node.js REPL environment.--------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
10.> What is Middlewere in nodejs ?
https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

    Execute any code.
    Make changes to the request and the response objects.
    End the request-response cycle.
    Call the next middleware in the stack.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11. > What is Callback function :- The callback functions works on asyncronous funtionality , they are the function will give the result once the data is ready to serve the client .

https://www.dashingd3js.com/lessons/javascript-callback-functions
function functionOne(){ 
    console.log("Hi") 
}
function functionThree(var1){
    console.log('There',var1);
    
}

function functionTwo(var1, cb, cb2){
  cb(var1);
  cb(var1);
  cb2(var1);
}

functionTwo(10, functionOne ,functionThree)

https://medium.com/@saurabhkumar_4718/node-js-callback-861f29642190

there are 2 types of callback function we can use the once with inbuild package like FS module and custom callback function.

**Inbuild module 'fs' (Below fs.stat to check if the file index.txt present in the conputer filesystem and whwat isthe size n bla bla)

const fs = require('fs');
fs.stat ('index.txt', function(err, stats ){
if(err){
  return console.error(err.stack);
}else{
   console.log(stats);
   console.log('Got the file info successfully');
 }
});

**Custom module :-

const checkFileType = function(arg,callback){
 if(typeof arg !== 'number'){
      return callback('Not a number');
        }
      callback(null,'Yes it is a number');
}

checkFiletype(15 ,function(err, data){
    if(err){

    console.log(err);
    }else{
    console.log(data);
    }
});

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
12.> What is callback-hell? how you can avoid them ?

When a callback will be called inside the callback and again repeting the same senario will become the Callback hell situation also called Crismas tree problem 

--modularization: break callbacks into independent functions
--use Promises
--use async await function 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Promise 




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async await 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is error-first callback ?
Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.
fs.readFile(filepath, function(err, data){
  if(err){
  //handle the error 
  }
  else {
 //use the data object  
 }
});
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Diffrence btw == and ===  ???
https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a

In short, '==' compares only value, while '===' checks value as well as type.
For example, if we defined x=5 then x==8 return false and x==5 return true.
While for '===' operator x==="5" return false and x===5  return true.

There are only six falsy values in JavaScript you should be aware of:

    false?—?boolean false
    0?—?number zero
    “”?—?empty string
    null
    undefined
    NaN?—?Not A Number
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is Tracing in Node.js
Tracing provides a mechanism to collect tracing information generated by V8, Node core and userspace code in a log file. Tracing can be enabled by passing the --trace-events-enabled flag when starting a Node.js application.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is package.json? What is it used for?
This file holds various metadata information about the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is libuv?
libuv is a multi-platform support library with a focus on asynchronous I/O. It was primarily developed for use by Node.js, but it’s also used by Luvit, Julia, pyuv, and others.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What are some of the most popular modules of Node.js?
There are many most popular, most starred or most downloaded modules in Node.js. Some of them are:
    express
    async
    browserify
    socket.io
    bower
    gulp
    grunt
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is MongoDB?
MongoDB is a Document database with the scalability and flexibility that you want with querying and indexing you need .
we dont have the concept of tables and schemas as relational database system 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
what is mongoose ?
mongooes is a package which gives a simple API to work with mongo DB .

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground');
   .then(()=> console.log('Connected to the database...'));
   .catch(err=> console.log('Could not connect to the database...',err));

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

What is diffrence between GitHub and BitBucket?
Both Bitbucket and Github are major competitors in this space. I have used both Github and Bitbuket. Both have their own advantages. I didn't find a lot of differences and that is why to a normal user both will look almost same.
Still some of the differences which I would like to point out here :-

1) Github provides you inline editing and network graphs whereas bitbucket doesn't provide you that.
2) Github's monthly price is cheap, but bitbucket is cheaper than Github.
3) Github doesn't provide any free private repositories whereas Bitbucket provides you unlimited free private repositories.
4) UI tool in both (not for people who love console :) ). 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Palindrom program :- 

function isPalindrom(string){
    return string.split('').reverse().join('');
}

const newWord = isPalindrom('Leve')
if(newWord == 'LeveL'){
    console.log('Yes')
}
else {
    console.log('No')
}
**************************************
function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome("A man, a plan, a canal. Panama");

***********************************************
function palin(){
   var a,no,b,temp=0;
   no=Number(document.getElementById("no_input").value);
   b=no;
 while(no>0){
      a=no%10;
      no=parseInt(no/10);
      temp=temp*10+a;
  }
if(temp==b)
{
console.log("Palindrome number");
}
else
{
console.log("Not Palindrome number");
}
}

palin()


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Fabonacci series program in nodejs 

console.log((size => {
if(size < 0)   return [];
if(size == 0)   return[0];
var fibonacci = [0,1];

for(i=2; i<size; i++) {
fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
return fibonacci;
}})

(process.argv[2]));

PS C:\Users\PranayRathor\Desktop\Node js\async-demo> node index 10
[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
To find the Number of letter in string which are multiple 

function count(params,string){
    let count = 0;

    for(i=0; i>string.length ;i++);
    if(string[i]===params){
        count++;
    };
    return count;
};
console.log(count("p","apple"))
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
To find the multiple no. in the array and print them 

function findDup(array){
  var dup = [];
  var obj = {};
  for(var i =0 ; i<array.length ; i++)
   if(!obj[array[i]]){
   obj[array[i]]= ;
   }
   else {
  dup.push(array[i]); 
  }
  return dup;
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
program to print a half pyramid 

var half_pyramid = function(rows){
  console.log('Half pyramid...\n');
  
  for (var i = 0; i < rows; i++){
    var stars = '';
    for(var j = 0; j <= i; j++){
      stars += '*'; 
    }
    console.log(stars);
  }
}

half_pyramid(5);




