console.log ("hello world");
console.log ("hello".toUpperCase());
console.log ("hello".toLowerCase());
console.log ("hello".length);
//IMPORT LIABRIES
console.log(Math.random()*10); //*random number times by 10 to make a number between 1-10

console.log(Math.floor (Math.random ()*10)); //rounds the number or you can do: console.log(Math.round(test)); //rounds to the nearing whole number

// //Logging a grid
// console.log ("  |    |  \n  |    |  \n  |    |  \n----------\n  |    |  \n  |    |  \n  |    |  \n----------\n  |    |  \n  |    |  ");

//Logging a grid using array
const verticalLine = " |    |  \n  |    |  \n  |    |  ";
const horizontalLine = "----------\n"

//console.log ("\n", verticalLine, "\n", horizontalLine, "\n", verticalLine, "\n", horizontalLine, "\n", verticalLine);

//Logging a grid using loops
for (let i = 0; i < 3; i++) {
    console.log ('\n', verticalLine, '\n', horizontalLine, '\n', verticalLine, '\n', horizontalLine, '\n', verticalLine);
}