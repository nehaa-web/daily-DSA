// While loop

let prompt = require('prompt-sync')();

// Q 11. reverse a number 
var n = Number(prompt("Enter a number: "));

let rev = 0;

while( n > 0){
    var rem = n % 10;
    rev = rev * 10 + rem;
    n= Math.floor(n / 10);
}

console.log("Reversed number is: " + rev);


// Q 12. check strong number
var n = Number(prompt("Enter a number: "));
let sum = 0;
let copy = n;

while(n > 0){
    var rem = n % 10;
    var fact = 1;

    for(let i = 1 ; i <= rem; i++){
        fact = fact * i;
    }

    sum = sum + fact;
    n = Math.floor(n / 10);
}
if(sum == copy){
    console.log("The number is a strong number");
}
else{
    console.log("The number is not a strong number");
}


// Q 13. Number Guessing Game 🎯

let random = Math.floor(Math.random()*100 + 1)
let guess = -1;

while(guess != random){

guess = Number(prompt("Guess a number : "));

if(isNaN(guess) || guess < 1 || guess >100){
    console.log("try again b/w 1 to 100")
    continue;
}
if(guess > random){
    console.log("Too high, try again");
}
else if(guess < random){
    console.log("too low , try again")
}
else{
    console.log("Congrats and number was  " , guess)
}

}
 