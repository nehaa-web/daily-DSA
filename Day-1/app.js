                                                        //    Basics 

// Math object in JavaScript

console.log(Math.abs(10))  // Returns the absolute value
console.log(Math.floor(10.8))   //11 // Rounds a number down to the nearest integer
console.log(Math.round(10.2))  //10  // Rounds a number to the nearest integer
console.log(Math.trunc(10.84343)) // Removes the decimal part
console.log(Math.pow(10, 2)) // Returns a number raised to a power 10^2
console.log(Math.max(10, 20, 30, 40, 50)) // Returns the largest value
console.log(Math.min(10, 20, 30, 40, 50)) // Returns the smallest value
console.log(Math.random())    // Returns a random number between 0 and 1
console.log(Math.cbrt(27))    // Returns the cube root of a number
let x = 34.565
console.log(x.toFixed(2))    


// 4-digit OTP generator
console.log(Math.trunc(Math.random() * 9000 + 1000)) 


//  Q 1. calculate compound interest using formula A = P(1 + r/n)^(nt) - P 

let prompt = require("prompt-sync")()

let p = prompt("Enter principal ")
let r = prompt("Enter rate ")
let t = prompt("Enter time ")

console.log((p * Math.pow(1 + (r / 100), t) - p).toFixed(2))

// Type coercion in JavaScript
//  Q 2. Swap the values of two variables.

let a = 10;
let b = 20;
let c ;

c = a 
a = b 
b = c
console.log(a , b);
// OR  
[a, b] = [b, a]
console.log(a , b);

// Conditional statements in JavaScript
// Q 3. Check if a person is eligible to vote or not

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

// Q 4. Calculate the discount based on the amount entered by the user.

let amount = Number(prompt("Enter amount "))

let discount = 0;

if(amount>0 && amount <= 5000) discount = 0;
else if( amount>5000 && amount <= 7000) discount = 10;
else if( amount >7000 && amount <= 9000) discount = 15;
else discount = 20;

console.log("Discount: " + discount + "%")
console.log("payable amount " + (amount - (discount*amount/100)))


// Nested ternary operator in JavaScript
// Q 5. Check if a number is positive, negative or zero using nested ternary operator.

let num = Number(prompt("Enter a number "))

console.log( num>0 ? "positive" : num<0 ? "negative" : "zero");
