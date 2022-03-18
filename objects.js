
//OBJECTS LECTURES NOTES

//objects are containers using key value pairs

//activity trying it out 1
const person = {    //the variable
    name: "Robin",  //the key
    age: 26
};
console.log (person);
// or to get just one of the keys
console.log (person.name);  
//you can also do that this way
console.log (person["name"]);  

//activity trying it out 2
let day = "Saturday";
let alarm = "";

const alarmActivity = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

if (day == "Saturday" || "Sunday") {
    console.log (weekendAlarm);
}
else if (day == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday"){}
     console.log (weekdayAlarm)
}
// THIS IS INCORRECT

// *Actual answer*

let day1 = "Monday";

const alarmClock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};

if (day1 == "Saturday" || day1== "Sunday"){
    alarm = alarmClock.weekendAlarm;
    console.log(`Hello Myles: ${alarm}`)
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(`Hello Myles: ${alarm}`)
}

//Objects can be changed just like let and var variables

//activity trying it out 3 adding a list

const person2 = {    //the variable
    name: "Robin",  //the key
    age: 26,
    favSongs: [
        "song1",
        "song2",
        "song3",
        "song4"
    ]
};
console.log (person2.favSongs);

// Using Functions with Objects
//tips from Chris for for activity 3: look at the return keyword, look at methods 

//ACTIVITIES

//Activity 1
//A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

const person4 = {    //the variable
    name: "Robin",  //the key
    age: 26,
    favSongs: [
        "song1",
        "song2",
        "song3",
        "song4"
    ],
    sayHi: ()=> {
        return (`hello my name is ${person4.name}`)
    }

};
console.log (this.sayHi());  // or console.log (name.sayHi());



//Activity 2
/* Create an object called pet with the key values of: name,
typeOfPet, age, colour. And methods called eat and drink. 
They should return a string saying [Your Pet Name] is eating/drinking.*/
let eat = "cat food";
let drink = "water";

const pet = {
    namePet: "Shay",
    typeOfPet: "Cat",
    Colour: "Black",
    eatAndDrink: () => {
        return (`${pet.namePet} is drinking ${drink} and eating ${eat}.`)
    }
}

console.log (pet.eatAndDrink());

//Activity 3
/*Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered.
They should return a string saying [Your order] is ... with all items chosen with costs and total costs.*/
let 
const coffeeShop = {
    branch: "Tree House",

} //This one is entirely confusing and I'll come back to it