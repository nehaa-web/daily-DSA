                                            // For Loop
// Switch Case Statement
// Q:6 Using Switch (Check consonants and vowels in a string)

let prompt = require('prompt-sync')();
let s = prompt('Enter a string: ');

let consonants = 0 , vowels = 0;

for ( let i = 0 ; i<s.length ; i++ ) {
    let ch = s.charAt(i).toLowerCase();
    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':  vowels++;
         break;
        default: consonants++;

    }
}
console.log("consonants: " + consonants);
console.log("vowels: " + vowels);


// Q:7 Print multiplication table of a number 

var n = Number(prompt('Enter a number: '));

for( let i = 1 ; i <= 10 ; i++){
    console.log(n +"*" + i + "=" + (n*i));
}


// Q:8 Sum up to n natural numbers 

var n = Number(prompt('Enter a number: '));

let sum = 0; //SUM  ,  let sum = 1; // Factorial

for( let i = 1 ; i <= n ; i++){
    sum = sum + i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);


// Q: 9 Sum of even and odd numbers between two numbers 

let a = Number(prompt('Enter first number: '));
let b = Number(prompt('Enter second number: '));

let evenSum = 0 , oddSum = 0;

if(a > b){
    let temp = a;
    a = b;
    b = temp;
}

for( let i=a ; i<=b ; i++){

    if(i%2 == 0) evenSum += i;
    else oddSum += i;
    
}
console.log("even sum = " + evenSum);
console.log("odd sum = " + oddSum);

// Q:10 Check whether a number is prime or not 

var n = Number(prompt('Enter a number: '));

let count = 0;

for( let  i=1 ; i<=n ; i++){
    if(n%i == 0) count++;
}

if(count == 2) console.log(n + " is a prime number");

else console.log(n + " is not a prime number");





