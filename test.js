
// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
//question 1
function reverseThisString(string){
    const newStr = string.split('');
    console.log(newStr.reverse());
}

document.write(reverseThisString("Hello"));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
//question 2

function swapCase(string) {
var str = '';
for(var i = 0; i<string.length; i++ ){
if(string[i]==string[i].toUpperCase())
str += string[i].toLowerCase();
else 
    str += string[i].toUpperCase();

}
return str;

}
console.log(swapCase("Hello World"));


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
//question 3

function toCelcius(temp) {
var celsius = (temp-32) * (5/9) ;
return celsius;
}

var fahrenheit = [23, 32, 41, 50, 59];
var celcius = fahrenheit.map(toCelcius);

console.log(celcius);

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
//question 4

function passOrFail(num){
if (num >= 75)
return true;
else 
return false;
}
var num = [20, 30, 50, 80, 90, 100];
var test = num.map(passOrFail);
console.log(test);


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
//question 5
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    for(var i = 0; i<5; i++){
       console.log(`'${cardinalNumbers[i]} is ${germanNumbers[i]}'`);
 
}
}
console.log(germanNumbers());


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
//question 6
function returnPrimeNumbers(){
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    numbers = numbers.filter((num) =>
    {
    for (let i = 2; i <= num; i++) 
    {
        if (num % i == 0) 
        return false;
      else
      return true;
    }
});

    console.log(numbers);
};

console.log(returnPrimeNumbers())

////Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
//question 7

function print(){
    for( var i = 1; i <=100; i++){
        if (i%3 === 0){
            console.log('CSC225 RULES');
        }
        else if ( i%5 === 0)
        console.log('I LOVE JAVASCRIPT');
        else if(i%3 ===0 && i%5 ===0){
            console.log('CSC225 RULES I LOVE JAVASCRIPT')
        }
        else
        console.log(i);
    }
}
console.log(print())