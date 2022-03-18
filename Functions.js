//FUNCTIONS LECTURE NOTES

//functions are used to break up code into smaller re-usable chunks

//example
//fatarrow (arrow function syntax)
   const pressGrindBeans = () => {
   console.log ("Grinding for 20 seconds")  //kind of like a variable that does something
}
pressGrindBeans();   //function needs to be called to work

//you can add if statements too functions
                        
letcoffeIsGrinding = false;
                        
const pressGrindBeans2 = () => {
   if (coffeeIsGrinding) {
    console.log ("Stopping the grind");
    coffeeIsGrinding = false;
}
   else {
   console.log ("Grinding is about to begin");
    coffeeIsGrinding = true;
}
}
pressGrindBeans2 ();
                        
//parameters and arguments can be added, providing the ability for functions to act based on data inputs
                        
//parameters
const cashwithdraw = (amount,accnum) => {
console.log (`Withdrawing ${amount} from account ${accnum}`)
                                                
cashwithdraw (300,1234567);
cashwithdraw (200,87654);    //Arguments
cashwithdraw (100,453689);
//global variables can be used within a function
                        
//return
                        
const addUp = (num1, num2) => {
return num1 + num2;
}
addUp (7,3);     //add up 2 numbers and return the answer
console.log (addUp (2,5));


//FUNCTIONS ACTIVITIES



//Activity 1:

const factorial = (n) => {
    if ((n === 0) || (n === 1)) { 
    return 1;
}
    else {
        return (n * factorial (n-1));
    }
}
console.log (factorial (33));

//Activity 2:
//Edit the below snippet to include two parameters and a running order count 
//updated when the function is called:

let orderCount = 0;

const takeOrder = (topping, drink, side) => {
    console.log (`Pizza with ${topping} and a ${drink}, aswell as a ${side}`);
    orderCount++;
}
takeOrder ("ham", "coke", "chips");

console.log (orderCount);

//Activity 3:
let piNnum = "1234";
let accountAmount = 32;


const cashwithdraw = (pinNum, withdrawAmount) => { 
    if ( pinNum=== "1234" && withdrawAmount <= accountAmount) {
        console.log (`Your pin number is correct and you have withdrawn £${withdrawAmount}, from your account.`);
        accountAmount - withdrawAmount
    }
    else if (pinNum !== "1234") {
    console.log (`You have enough money in your account but you have entered the wrong pin, try again.`);
    }
    else {
        console.log (`${withdrawAmount} is more than you have in your account, please enter a lower amount.`);
    }
}

//cashwithdraw (1234, 20);
