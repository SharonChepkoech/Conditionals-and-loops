// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for(i = 1; i <=100; i++){
    if(i%3===0 & i%5===0){
        console.log("FizzBuzz")
    }
    else if(i%3 ===0){
        console.log("Fizz")
    }
    else if(i%5===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0
for(num=0; num<1000; num++){
    
    if(num%3===0 || num%5===0){
        sum += num;
    }
}
console.log(sum)

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for(var a=0;a<=20; a++){
    if(a%2===0){
        console.log(a + " is even")
    }
    else{
        console.log(a + " is odd")
    }
}

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
let numbers = [-2, 4,-5, 6,0]
let largest = numbers[0];

for(x=0; x<numbers.length; x++){
    if( largest < numbers[x] ){
        largest = numbers[x]
    }
}
console.log(largest)

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let f = 10, j = 40
if(f> j){
    console.log(f)
}
else{
    console.log(j)
}

// Write a JavaScript program to find leap years from 2000 to 2022

for(year = 2000; year <= 2022; year++){
    if(year% 4 ===0 && year % 100 !== 0 || year % 400 === 0){
        console.log(year + " is a leap year")
    }
}