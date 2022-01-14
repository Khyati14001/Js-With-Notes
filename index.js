document.write("HI this is khyati here")
//1 . Ways to print javascript
//console.log("Hello world!!!");
//alert("ME");
//document.write("HI this is khyati here")

//2. Javascript console API
// console.log("Hello world!!!", 4 + 6, "Another log");
// console.warn("This is warning")
// console.error("This is an error")

//3 . Javascript variables
// what are variablels?- container to  store data values

// for single line comment press ctrl + / 
// shift + alt +A for multiline comments

// for opning console in browser press ctrl+shift+i
var number =34;
var number2 =56;
// console.log(number + number2);

// 4. Data types in js
// copying a line to below shift+alt+up/down
// string
var str1 = "This is string"
var str2 = 'This is also a string'

// number
var num = 456;
var num1=9632.235;

// objects
//key-value pair
var marks = {
    revi : 56.36,
    shubh : 56.32,
    harry : 98.965

}
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a,b);

//Undefined
var und1;
// console.log(und1);
var und = undefined;
// console.log(und);

// null 
var n = null;
// console.log(n);

// Two types of data types: Primitive - undefined,number,null,string,boolean,symbol and 
// Reference data types  : Arrays and objects

//Arrays
var arr = [1,2,34,"Hi",6,7]
// console.log(arr)

// operators
var a = 34;
var b = 96;
// // arithmetic operator
// console.log("The value of a+b is ",a+b);
// console.log("The value of a+b is ",a-b);

//Assignment operator
var c = b;
//console.log(c);

// comparison operator
//console.log(a==b);

// logical operator
// && || !
// console.log(true || false)
// console.log(true && true)
// console.log(!false)
 
// operator : applied on two functions

// Javascript function
//DRY - Do not repeat yourself
function avg(a,b){
    return (a+b)/2;
}

c = avg(9,5)
c2 = avg(14,16)
// console.log(c , c2);

// in console blue color is a number & black color is a string

// conditional in js
var age = 3;
//if - else statement
if (age  >8){
    //console.log("You are not a kid")
}
else{
    //console.log("You are a kid")
}
//Single if also valid
//if -else ladder
if(age>2){
    //console.log("U r not a kid");
}
else if(age>65){
    //console.log("You are not a kid")
}
else{
    //console.log("you are a kid")
}

// functions
 var arr = [1,2,3,4];
// console.log(arr)
// // 1. for loop
// for(var i = 0 ;i<arr.length;i++){
//     console.log(arr[i])
// }
//2. foreach
arr.forEach(function(element){
    //console.log(element);
})

// Let means block scope upto the curly braces
let j = 0;

const ac = 0; // constant variable
// 3. while loop
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
//4. do while
/*
let k = 0;
 do{
    console.log(arr[k]);
    k++;
}while(j<arr.length);*/

// break and continue

// break and continue are used only in loops
// methods of array
let myarr = ["Fan","camera",34,null,true];
//console.log(myarr.length)
myarr.pop()
//console.log(myarr)
myarr.push("Khyati")
// console.log(myarr)

// String method in javascript
 let str = "Hello!How's the day? the"
//  console.log(str.length)
//  console.log(str.indexOf("the"))
//  console.log(str.lastIndexOf("the"))
//  console.log(str.slice(0,3))
//  console.log(str.replace("Hello","HI"))

//  Date 
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

//Dom manipulation
// Dom --> Document object model means the document is  visible 
// with some method of dom the html code changes dynamically
// document --> write in console it gives the document html code
// DocumentFragment.location --> Gives the full location means path

// document.getElementById('Click').style.border = '2px solid blue'
let elem = document.getElementById('Click');
// console.log(elem)

let elemclass = document.getElementsByClassName('container')
// console.log(elemclass)
//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
// elemclass[0].classList.add("text-success");
//elemClass[0].innerHTML --> for inner html code
// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemclass[0].innerHTML)
// console.log(elemclass[0].innerText)
tn = document.getElementsByTagName('button')
console.log(tn)
tnn = document.getElementsByTagName('div')
console.log(tnn)
// created a child by append method of dom
createdElement = document.createElement('p');
createdElement.innerText = "This is a  created para" 
tnn[0].appendChild(createdElement)
//Replace method of dom
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a  created bold" 
tnn[0].replaceChild(createdElement2,createdElement)

// removeChild(element) --> Remove an element
// tnn[0].removeChild(createdElement2)

// Selecting using query 

// sel = document.querySelector('.container')
// console.log(sel)

// sel = document.querySelectorAll('.container')
// console.log(sel)

//Events in js
// Events like clicking by User, pointing by user etc . Inshort the things are which is running right now 
// function clicked(){
//     console.log("The button was clicked")
// }
// window.onload = function(){
//     console.log("The document was loaded")
// }
// Events for mouse
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = " <b> We have clicked </b>"
//     console.log("clicked on container")
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouseover done")
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouseout done")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on container")
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("mouse down when clicked on container")
// })


// Arrow functions
// function summ(a,b){
//     return a+b;
// }
// Generally functions can be written as above
summ = (a,b)=>{
    return a+b;
}

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
//setTimeout and setTimeInterval
setTimeout(logkaro, 2000);  //logkaro-> function ,2000-> ketla time pachhi run thay(2000 ml second)
clr = setInterval(logkaro, 2000);  // for working repeatedly , give clr to clearInterval(clr) for stopping setInterval / clearTimeout(clr) for clearing setTimeout

// local storage in js --> helps to store data of user as a string (All this work done in console)
//localstorage.setItem('name',khyati)
//localstorage 
//localstorage.getItem('name')
//localstorage.removeItem('name')
// localstorage.clear() , for clear whole local storage

// JSON -> Javascript object notation , open source file format
        // -> used  for data exchange 

obj = {name:'khyati',lenght:1,a:{this:'tha"t'}}
jso = JSON.stringify(obj) //obejct is converted to streing
console.log(jso)

// convert string to json -- if thing is become string then it is easy to transpot
parsed = JSON.parse(`{"name":"khyati","lenght":1,"a":{"this":"that"}}`)
console.log(parsed);

//Javascript version
//Backticks also knows as teplate literals
a= 34;
console.log(`this is my ${a}`)