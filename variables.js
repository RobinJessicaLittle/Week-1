//NOTES FROM LECTURE 

//Variable types
let firstName = "Robs";

const secondName = "Little";

var middleName = "Jessica";

console.log (firstName, secondName, middleName)

//
let i = 10;
console.log (i)
i = 1+2; 
console.log (i)

// instead

1 += 2;
console.log (i)

//

let favouriteDrink = "Coffee";

console.log (favouriteDrink);

console.log ("my fave drink is" + favouriteDrink);


//String Template literals, to make things less messy when making strings with variables

console.log (`Hi my name is ${firstName} and my favourite drink is ${favouriteDrink}`);





//ACTIVITIES

// Task 1
let myName = "Robin";
let myAge = "26";
let favColour = "green";

console.log (`Hi my name is, ${myName}, and I am ${myAge}. My favourite colour is ${favColour}.`);


//Stretch

 myName = "Rob";
myAge = "27";
favColour = "purple";

console.log (`Hi my name is, ${myName}, and I am ${myAge}. My favourite colour is ${favColour}.`);

//Task 2

let breakfast = "Crumpets";
let lunch = "Teriyaki Fish";
let dinner = "Roast Chicken";

console.log (`Today for breakfast, I ate ${breakfast}. I plan on having ${lunch}, and ${dinner}.`);

//Stretch

breakfast = "Toast";
lunch = "Soup";
dinner = "Mushroom Pizza";

console.log (`Today for breakfast, I ate ${breakfast}. I plan on having ${lunch}, and ${dinner}.`)

//Task 3 *This answer is wrong check below for actual answer


const birthday=new Date(2022, 24, 12);
let now=new Date();
let difference=now-birthday;
difference/=(10006060*24)
difference=Math.floor(difference);

console.log(`It has been ${difference} days since my birthday`);

//Task 4

let space1 = "X"
let space2 = "O"
let space3 = "X"
let space4 = "X"
let space5 = "O"



console.log("     |       |   ")
console.log(`  ${space1}  |  ${space2}    |   `)
console.log("     |       |   ")
console.log("-----------------")
console.log("     |       |   ")
console.log(`   ${space3} |  ${space4}    |   `)
console.log("     |       |   ")
console.log("-----------------")
console.log("     |       |   ")
console.log(`   ${space5} |       |   `)
console.log("     |       |   ")

// *Activity 3 actual answer*
// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2022,11,05")
const todaysDate = new Date("2022, 02, 15");
// This calculates the difference but IN milliseconds.
let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);
console.log(`Your birthday is in: ${diffInDays} days.`)