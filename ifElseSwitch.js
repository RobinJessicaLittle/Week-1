

//If else example

let place = "manny";
let weather = "cloudy";

if (place == "manny" && weather == "Sunny") {
    console.log ("Check again");
}
else if (place == "manny" && weather == "Rain"){
     console.log ("obvs");
}
else {
     console.log ("it isn't raining??!")
}


//Logical opperators
//&& is the same as and
// || is the same as or 

// tip for activity 3 .length
// need to use &&

//Activity 1

const age = 26

if (age >= 17){
    console.log ("Yes, I can serve you")
}
else {
    console.log ("You aren't old enough.")
}

//Activity 1, stretch 

const country = "UK"

if (age >= 17 && country == "UK"){
    console.log ("Yes, I can serve you")
}
else {
    console.log ("You aren't old enough.")
}

//Activity 2
/*Create a variable for any pizza topping.
Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
Finally, for any topping you don’t like log “${topping} should not be on a pizza.”
JS*/

let pizzatopping = "Pepperoni";
let incorrecttopping = "Sweetcorn";

switch (pizzatopping) {
    case "Pepperoni":
    case "Mushroom":
    case "Ham":
        console.log ("These are important ingredients for my pizza.")
    break;
    case "Sweetcorm":
        console.log (`${incorrecttopping} should not be on a pizza.`)
}

//Activity 3 
/*Create a variable called password.
Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.*/

let password = "Strawberry";

 if (password.length > 8){
     console.log ("This password is too short")
 }
 else {
     console.log (password)
 }

//Activity 4
/*  Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else. */

const num = 9

if (num % 3 || 5) {
    console.log ("This number is divisible by 3 or 5")
}
else {
    console.log ("something else")
}

//Activity 5
/*Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, 
if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.*/

num = 18

if (num2 % 3) {
    console.log ("fizz")
}
else if (num % 5) {
    console.log ("buzz")
}
else if (num % 3 && 5) {
    console.log ("fizz buzz")
}
else {
    console.log (num2)
}

//Activity 6
/* Create a variable called num.
Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).*/

num = 67

if (num.reverse == num.reverse) {
    console.log ("this is a palindrome")
}
else {
    console.log ("this is not a palindrome") //THIS IS WRONG!
}
//CORRECT ANSWER BELOW

let nums = 7227;
let numString = nums.toString(); //the toString method basically makes javascript read the number as a string 
let reverseNumString = numString.split ('').reverse().join(''); //.split() splits a string into an array of substrings. (this variable is only useful for the variable that reverses num)
                                                                //.reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
                                                                /* .joinmethod creates and returns a new string by concatenating all of the elements in an 
                                                                array (or an array-like object), separated by commas or a specified separator string. If the 
                                                                array has only one item, then that item will be returned without using the separator.*/

if (num == reverseNumString) {
    console.log (`Yes ${num} is a palindrome`)
}
else {
    console.log (`No ${num} is not a palindrome`)
}




//Activity 7:
/*Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
Create an if statement that logs to the console where someone is at times of the day.
 E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.*/
const time = new Date();
const placeOfWork = "factory"
const townOfHome = "Manchester"

if (time <= 7) {
    console.log (`Im at home, ${townOfHome}`)
}
else if (time <=9)
    console.log (`Im commuting too the ${placeOfWork}`)
else {
    console.log (`Im at the ${placeOfWork}`)
}

//Activity 8:
/*Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
Find the index of a last vowel in the string.*/

let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let index = text.lastIndexOf ("i");
console.log (index);

//Activity 9:
/*Create a variable called word that takes a string. Create an if statement that checks if the last letter is the 
same as the first. If it is return true, otherwise return false.*/

let word = "ABBA";
if (word.charAt(0) == word.charAt(word.length-1)){  //charAt(0). This returns the first character in our string. 
                                                    //In other words, we retrieve the character with the index value 0.
  console.log("True")                               //charAt(word.length-1) is retrieving the last letter in the string
} else {
  console.log("False")
}
