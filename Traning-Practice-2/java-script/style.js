//for of loop

const numbersArrayList1=[1,2,3,4,5,6,7,8];
 for (let item of numbersArrayList1){               // for of statement loops through the values of an iterable object
   console.log(item)
 }


 //for in loop 
 const person = {fname:"John", lname:"Doe", age:25};
 for (let item in person){                            //for in loop statement loops through the properties of an Object
    // console.log(person[item])
 }

//  const person1 = {fname:"John", lname:"Doe", age:25};
//  for (let item in person1){                            //for in loop statement loops through the properties of an Object
//      //console.log(item)
//  }

 //normal for loop
 let ArrayItems=["Saab", "Volvo", "BMW","John", "Doe", 46];      //loops through a block of code a number of times
 for (let i = 0; i < ArrayItems.length; i++) {
    // console.log(ArrayItems[i]);
 }



//Array Methods

//1) map method
 const numberList=[1,2,3,4,5,6,7,8];
 const modifiedArray=numberList.map(function(item){
     return item*2;
 })
// console.log(modifiedArray)

 const modifiedArray1=numberList.map((item)=>item*2
 )
// console.log(modifiedArray1)


//2) filter method
 const numberList1=[1,2,3,4,5,6,7,8];
 const EvenArray=numberList1.filter(function(item){
     return item%2===0;
 })
// console.log(EvenArray)

 const EvenArray1=numberList1.filter((item)=>item%2===0
 )
// console.log(EvenArray1)


 //3) forEach method
 const numberList2=[1,2,3,4,5,6,7,8];
 let totalSum=0;
 numberList2.forEach(function(item){
    totalSum=totalSum+item
    
 })

// console.log(totalSum)




 //4) reduce method
 const numberList3=[1,2,3,4,5,6,7,8];
 const Total=numberList3.reduce(function(acc,value){
     return acc+value
 })
 console.log(Total)

 const numberList3A=[1,2,3,4,5,6,7,8];
 const Total1=numberList3A.reduce((acc,value)=>
      acc+value
 )
 //console.log(Total1)



        //String Methods

const string="Welcome To JavaScript";
//1)split method
const splittedString=string.split(" ");
//console.log(splittedString)

//2)string length
//console.log(string.length)

//3)toLowerCase method
const lowerString=string.toLowerCase();
//console.log(lowerString)

//4)toUpperCase method
const upperCaseString=string.toUpperCase();
//console.log(upperCaseString)

//console.log(string)

//5)slice method
let slicedStr=string.slice(0,8);       //extracts a part of a string and returns the extracted part in a new string
//console.log(slicedStr) 

//6)subString method
let subString=string.substring(-3,8);       //The difference is that start and end values less than 0 are treated as 0 in substring()
//console.log(subString) 

//7)subString method
let subStr=string.substr(8,3);       //The difference is that the second parameter specifies the length of the extracted part
//console.log(subStr) 


let newStr="hello world, hello Javascript";
//8)replace method
let replacedStr=newStr.replace("hello","wellcome")
//console.log(replacedStr)

//9)replaceAll method
let replacedAllStr=newStr.replaceAll("hello","wellcome")
//console.log(replacedAllStr)

//10) concat method
let concatedStr=newStr.concat(" ",string)
//console.log(concatedStr)

//11)trim method

let textStr = "      Hello World!      ";
let trimStr = textStr.trim();
//console.log(trimStr);

//12)charAt method

let text1 = "HELLO WORLD";                   
let characted = text1.charAt(0);         //The charAt() method returns the character at a specified index (position) in a string
//console.log(characted);

//spread oparator
let array1=["hello",1,6,4];
let array2=["world",2,5,8];
let newArray=[...array1,...array2]
//console.log(newArray);


//rest parameter
function NumbersArray(...array){
    //console.log(array)         //The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
}

NumbersArray(1,2,3,4,5,6);


//object Destructuring
let object1={name:"Srinivas",lastname:"Polaveni",age:25}
let {name,lastname,age}=object1;
//console.log(name)


//Hoisting Method

num=10;
//num1=6;
Hoisting("srinivas")
console.log(num);
//console.log(num1);
//console.log(num2);

var num=10;
function Hoisting(name){
    
   //console.log(name)
}

let num1=0;
const num2=8;


//Array Sort method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // The sort() method sorts an array alphabetically
fruits.reverse(); // revers the array elements
//console.log(fruits)

const listOfArrayItems=[1,2,3,4,5,6,7,8];
listOfArrayItems.sort(function(num1,num2){  //sort an array Ascending
    return num1-num2;
});
console.log(listOfArrayItems)
listOfArrayItems.sort(function(num1,num2){ //sort an array descending
    return num2-num1;
});
//console.log(listOfArrayItems)

let arrayduplicates=[11,11,11,22,22,3,4,4,5,6,6,7,8];
//new Set(arrayduplicates)
let newOriginalArray=[...new Set(arrayduplicates)]
console.log(newOriginalArray)

//console.log(Math.max())