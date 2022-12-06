// import { string } from "prop-types";

// import { resolve } from "url";
// import { rejects } from "assert";


// let givemile = prompt("please enter the distance in miles");

// let formula= (givemile/1.60934);

// parseInt(givemile);
// console.log(formula);



// document.write(`The distance of `+givemile + ` kms is equal to ` + formula);





// let heighInInches = prompt("please enter of height in inches");

// let weightInPounds = prompt("please enter of weight in pounds");


// parseInt(heighInInches);
// parseInt(weightInPounds);

// let centimeters = heighInInches*2.54
// let kg = weightInPounds*0.45359237;

// console.log(heighInInches);
// console.log(weightInPounds);
// console.log(centimeters);
// console.log(kg);

// let metters = (centimeters/39.37);

// // let result = kg/centimeters;

// let finalResult = kg/(Math.SQRT1_2(metters))
// console.log(finalResult);

// document.write();
// let result = 3 + 4 * 2 / 8;
// console.log(result);

// let box = document.getElementById("Name");

// console.log(box);
// function add (){

//     let firstvalue = 
//     parseInt(
//         (document.getElementsByName('input1')[0].value)
//     );

//     let secondvalue = 
//     parseInt(
//         ( document.getElementsByName('input2')[0].value)
//         );

//     console.log(firstvalue);
//     let result= (firstvalue+secondvalue);

//     document.getElementsByName('display')[0].value=result;

// }

// add();


// let shoppingList = ["oil","Maida","tamotos","potatos","lusun"];

// shoppingList.pop("milk","bread","apples");

// console.log(shoppingList);




// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }); // You can omit the 0

// console.log('Test 1');

// for (let i = 0; i < 10000; ++i) {
//     console.log(doSomeStuff());
// }

// console.log('Test 2');

// // The 'I am an asynchronous message' will be displayed when the main thread reach here

// function doSomeStuff() {
//     return 1 + 1;
// }

// let counter = 0;

// let timer = setInterval(function() {
//     console.log('I am a asynchronous message');
//     counter += 1;
    
//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 1000);
// console.log(timer);

// console.log('I am a synchronous message');

// let fs = require('fs');

// fs.readFile('test.txt', 'utf8', function(error, data) {
//     if (error) {
//          throw error;
//     }

//     console.log("Asynchronous message. Content of test.txt:", data);
// });

// console.log('Synchronous message');

// const  getMangoJuice = new Promise(()=>{
//     setTimeout(()=>{
//         let mangojuice=3;
//         if(mangojuice <= 2){
//             console.log("hello")
//         }else{
//             return console.log(`error`)
//         }
//     })
// })

// try{
//     getMangoJuice();
// }
// catch{((e)=>{
//     console.log(e)
// })}

// function makeFryAnda(callback){
//     setTimeout(() => {
//         callback("Egg Fried");
//     }, 2000);
// }

// function toastbread(cb){
//     setTimeout(()=>{
//         cb("Toast Bread");
//     },1000);
// }
// toastbread(function(paramiter){
//     console.log(paramiter);
//     makeFryAnda(function(paramiter){
//         console.log(paramiter);
//     })
// });

// ----------------------------------------

function makePaniHot(x){
    // console.log(x)
    setTimeout(()=>{
        x("Water Heated");
    },1000)
}

function makeRice (x){
    // console.log(x);
    setTimeout(() => {
        x("Rice Done")
    }, 2000);
}

makePaniHot(function(x){
    console.log(x);
    makeRice(function(x){
        console.log(x);
    })
});


// -------------------------------------

function hello(arg){
    setTimeout(() => {
        arg("hello")
    }, 1000);
}

function world(arrg2){
    setTimeout(() => {
        arrg2("world");
    }, 1000);
}

hello(function(arrg3){
    console.log(arrg3)
   world(function(arrg3){
    console.log(arrg3)
   })
})

const loginUserPromise = (email,pass)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if (email=== "ashfaqaku@gmail.com" && pass ===1234){
                resolve(email)
            }else{
                reject("invalid email or password")
            }
        }, 2000);
    })
}

const getUserVedio= (email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (email){
                resolve(["video1","video2","video3"])
            }else{
                reject("Please provide email")
            }
        }, 3000);
    })
}

loginUserPromise("ashfaqaku@gmail.com",1234)
.then((e)=>{
    console.log(e)
})


let arrr = ["he","hello","li"];
let arr4 = ["foo"];
let arr5 = arrr.concat(arr4);

let findValue = arr5.find(function(e){return e==="li"});


console.log(findValue);
console.log(arr5);

arr5.splice(2,2);
delete arr5[0];
console.log(arr5);

let arrayNumber = [55,98,58,21,54,87,55,9,8,7,6,5,4,3,2,1,0];
let findElemint = function(arrayNumber){
    return Math.min.apply(Math,arrayNumber);
}
console.log(Math.min(...arrayNumber));

console.log(typeof arrayNumber);




let myCar = {
    Name:   "Honda",
    color:  "Blue",
    model:  2022,
    active: true
};

let myCarColor = myCar["color"];

console.log(myCarColor);


myCar.forScale= 2.3;

console.log(myCar);
let activity= prompt("kindly update your activity");

switch(activity) {
    case "Get up":
    console.log("It is 6:30AM");
    break;
    case "Breakfast":
    console.log("It is 7:00AM");
    break;
    case "Drive to work":
    console.log("It is 8:00AM");
    break;
    case "Lunch":
    console.log("It is 12:00PM");
    break;
    case "Drive home":
    console.log("It is 5:00PM");
    break;
    case "Dinner":
    console.log("It is 6:30PM");
    break;
    }

