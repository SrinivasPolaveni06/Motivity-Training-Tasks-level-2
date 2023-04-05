//Switch Statment

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

let stringLength='';
const Strword="Javascript"
switch(Strword) {
    case "HTML":
      // code block
      stringLength=0;
      break;
    case "CSS":
      // code block
      stringLength=0;
      break;
    case "Python":
        // code block
        stringLength=0;
        break;
    case "Javascript":
        // code block
        stringLength=Strword.length;
        break;
    case "Bootstrap":
        // code block
        stringLength=0;
        break;
    default:
      // code block
      stringLength=0;
  }
  //console.log(stringLength)


  //Promise Method

//   A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

//   "Producing Code" can take some time and "Consuming Code" must wait for the result.

  const myPromise = new Promise(function(Resolve, Reject) { //The value of this will become the new object when a new object is created
    setTimeout(function(){ 
        Resolve(); 
        Reject(); 
    }, 2000);
    // setTimeout(function(){ 
    //     //Resolve("Wellcome to Promise Object"); 
    //     Reject("Iam a Promise Error"); 
    // }, 3000);
  });
  
  myPromise.then(function() {
    console.log("Wellcome to Promise Object");
  })
  .catch(function(){
    //console.log("Iam a Promise Error")
  });


//Async and Await 

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise


 const url="http://localhost:3000/products";
 async function makeApiCall(){
    const response=await fetch(url);
    const responseJsonData=await response.json();
    console.log(responseJsonData)
}

 makeApiCall();

//Error handling

// const newUrl="http://localhost:3000";
//  async function makeApiCallNew(){
//     try{
//         const response=await fetch(newUrl);
//     const responseJsonData=await response.json();
//     //console.log(responseJsonData)
//     }catch(err){
//         //console.log("Hello Iam Error Message")
//     }
    
// }

// makeApiCallNew();




//While loop

//The while loop loops through a block of code as long as a specified condition is true.

let total=0
let iteration=0
while (iteration < 10) {
    if (iteration===5){
        iteration=iteration+1;
        continue
    }else{
        total=total+1;
        iteration=iteration+1;
    }
    
    
  }
//console.log(total)


//do while loop

//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

let num=0
do {
    //console.log("Iam number of "+num)
    num++;
  }
  while (num < 10); 




  //DOM Methods

// const para = document.createElement("p");
// // const node = document.createTextNode("This is new.");
// // para.appendChild(node);
// para.textContent="This is new para."
// const element = document.getElementById("div1");
// element.appendChild(para);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const para = document.createElement("p");
const node = document.createTextNode("This is new paragraph");
para.appendChild(node);
parent.replaceChild(para,child);


//get by tag name

// The getElementsByTagName() method returns an HTMLCollection object.

// An HTMLCollection object is an array-like list (collection) of HTML elements.

// The following code selects all <p> elements in a document:

const myCollection = document.getElementsByTagName("p");
myCollection[1].innerText='hello iam para 1'

//Nodes List Collections
// A NodeList and an HTMLcollection is very much the same thing.
// An HTMLCollection is a collection of document elements.

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

// HTMLCollection items can be accessed by their name, id, or index number.

// NodeList items can only be accessed by their index number.

// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// The querySelectorAll() method returns a static NodeList.

// The childNodes property returns a live NodeList.


const myNodeList = document.querySelectorAll("p");
myCollection[1].innerText='hello iam node para 1'


//Child Nodes List
// The childNodes property returns a collection (list) of an elements's child nodes.

// The childNodes property returns a NodeList object.

// The childNodes property is read-only.

// childNodes[0] is the same as firstChild.
// childNodes returns nodes: Element nodes, text nodes, and comment nodes.

// Whitespace between elements are also text nodes.
// The children property returns elements (ignores text and comments).
const nodeList = document.body.childNodes;

let text = "";
for (let i = 0; i < nodeList.length; i++) {
  text += nodeList[i].nodeName + "<br>";
}
document.getElementById("demo").innerHTML = text;