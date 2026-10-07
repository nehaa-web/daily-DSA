                                                        //    Basics 

// Math object in JavaScript

console.log(Math.abs(10))
console.log(Math.ceil(10.2))
console.log(Math.floor(10.8))
console.log(Math.round(10.2))
console.log(Math.trunc(10.84343))
console.log(Math.pow(10,2))    // 10 ki power 2 = 100
console.log(Math.max(10, 20, 30, 40, 50))    // 50
console.log(Math.min(10, 20, 30, 40, 50))    // 10
console.log(Math.random())    // 0 to 1
console.log(Math.trunc(Math.random()*9000 + 1000));
console.log(Math.cbrt(27))    // 3 cube root of 27

let x = 34.565 
console.log(x.toFixed(2))    // 34.57

//  Q 1. calculate compound interest using formula A = P(1 + r/n)^(nt) - P 

var prompt = require("prompt-sync")()

let p = prompt("Enter principal ")
let r = prompt("Enter rate ")
let t = prompt("Enter time ")

console.log((p * Math.pow(1 + (r / 100), t) - p).toFixed(2))


// Type coercion in JavaScript
//  Q 2. Swap the values of two variables.

let a = 10;
let b = 20;
let c ;

// 1)
c = a 
a = b 
b = c

// 2)
[a, b] = [b, a]

console.log(a , b);


// Q 3. Check if a person is eligible to vote or not

var prompt = require("prompt-sync")()

let age = Number(prompt("Enter your age "))

if( isNaN(age)){
    console.log("Please enter a valid number")
}
else if(age < 18){
    console.log("You are not eligible to vote")
}
else{
    console.log("You are eligible to vote")
}