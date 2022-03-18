//LOOPS AND ARRAYS LECTURE NOTES

// Array Syntax

let coffeeOrder = [
    "Alex- Cortado",
    "Ben- Cortado",
    "Charlie- Whatevers new"
]


console.log (coffeeOrder);
console.log (coffeeOrder[2]) //this will print Charlie as everything starts at 0 with js

coffeeOrder [1] = "Robin- Hot Chocolate"; //this updates your array removing the number selected
console.log (coffeeOrder);

console.log (coffeeOrder.length); //checks the length

coffeeOrder.push ("Robin-Hot Chocolate");  //adds to the end your array
console.log (coffeeOrder);

coffeeOrder.pop ()  //removes last element in the array
console.log (coffeeOrder); 

//Activity 1, tring it out

let threeSongs = [
    "Vienna, Billy Joel",
    "Black Hole Sun, Sound Garden",
    "White Room, Cream"
]
console.log (threeSongs);

threeSongs.push ("Purple Rain- Prince");
threeSongs.push ("Life on Mars- David Bowie");
coffeeOrder.pop ();

//LOOPS

let coffeeOrder2 = [
    "Alex- Cortado",
    "Ben- Cortado",
    "Charlie- Whatevers new",
    "Robin- Hot Chocolate"
];

for (let i = 0; i <coffeeOrder2.length; 1++) { //i is just the name of the variable, it could literally be anything but industry standard is to use i
    console.log(coffeeOrder2[i]);
}

//loop that prints multiples of 2
let multiplesTwo = [];
for (let i = 0; 1 <20; i++){
    if (i % 2 ==0){
        multiplesTwo.push (i);
    }
}

console.log (`Numbers divisible by 2 between 0 and 20 ae; ${multiplesTwo}.`)

//WhileLoops

let age = 15;

while (age < 18){
    console.log ("You are a child")
    age ++
}
console.log ("you are an adult")

//
let cards = ["Diamonds", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {  //!= is not equal
    console.log (currentCard);
    currentCard = cards [Math.floor (Math.random ()*4)];
}

console.log (currentCard);

//LOOPS AND ARRAYS ACTIVITIES

//Activity 1
/*Create an array that lists your favourite films, up to
5 elements.
Add 2 more using a method.
Use a loop to cycle through the array*/

let favFilms = [
    "Spirited Away",
    "Girl Interupted",
    "Encanto",
    "Eternal Sunshine of the Spotless Mind"
]
favFilms.push ("Susperia")
favFilms.push ("The Devils Advocate")

for (let i = 0; i < favFilms.length; i++){
     console.log (favFilms[i]);
}


//Activity 2
/*Generate 6 random numbers between 1-50 and log them to the console.*/

let randNum = [Math.random()];
for (let i =0; 1 < 50; i++){
    if (i % 1 ==0) {
        randNum.push (i);
    }
}

console.log (randNum)*/

for (let i= 0; i < 6; i++) {
    console.log (Math.floor(Math.random, ()*49+1)
}


//Activity 3:
/*If we can create a loop to put 0-9 on the screen, how can we count from 9-0? 
Create a program that does this.*/

for (let i = 0; 1 < 9; i++){
    if (i % 1==0) {
        randNum.push (i)
    }
}

//Activity 4:
/*Displays 4 films stored in an array.
Use a for loop to show each film in the array.
Use an if statement to check if the 3rd film in the array is Ghostbusters.
If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!*/

let fourFilms = [
    "Incredibles",
    "Thor",
    "Iron Man",
    "Resevoir Dogs"
]


for (i = 0; i <fourFilms.length; i++){
    console.log (fourFilms[i])
}
if (fourFilms[2]== "Ghostbusters"){
    console.log ("Yay it's Ghostbusters")
}
else {
    console.log ("Boo! We want Ghostbusters")
}

//Activity 5:
/*Generate a random number between 1 and 30 six times.
For each random number generated, check if this number of divisible by 7 or not. 
Log out a message to the console if it is divisible by 7 or not.*/



for (let i = 0; i < 6; i++){
    let numCheck = Math.floor(Math.random () * 29 +1)
    if (numCheck % 7 == 0){
        console.log (`${numCheck} is divisible by 7`)
    }
    else{
        console.log (`${numCheck} is not divisible by 7`)
    }
}

//Activity 6
/*Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place
4 names as strings. Make sure there are 2 names that are in BOTH arrays.
Using a nested loop iterate over both arrays and console.log out the matching follower.*/

let bobFollowers [
    "Janet",
    "Muhammed",
    "Barbie",
    
]   //*Again got to a point beyond my understanding will come back to these activities
