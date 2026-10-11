                                     //Pattern Programming

let prompt = require("prompt-sync")();
//Q 14. Right Angle Triangle.
// Print star (*)

var n = Number(prompt("Enter a number: "))

for( let i=1 ; i<=n ; i++){
    for(let j=1 ; j<=i ; j++){
        process.stdout.write("* ")
    }
    console.log()
}

// Print counting
var n = Number(prompt("Enter a number: "))

for( let i=1 ; i<=n ; i++){
    for(let j=1 ; j<=i ; j++){
        process.stdout.write(j+" ")
    }
    console.log()
}

// Print abcd
var n = Number(prompt("Enter a number: "))

for( let i=1 ; i<=n ; i++){
    let ascii = 65    // capital "A" = 65
    for(let j=1 ; j<=i ; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ")
        ascii++
    }
    console.log()
}
// Q 15. Inverted Right Angle Triangle

var n = Number(prompt("Enter a number: "))

for( let i=1 ; i<=n ; i++){
    for(let j=n ; j<=i ; j--){
        process.stdout.write("* ")
    }
    console.log()
}