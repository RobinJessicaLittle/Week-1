//this is a comment in java script

/*this is a 
multiline comment 
in java script */

//Var is how you name/call a variable in javascript
var Myname;
//= operator assigns a value to the variable
Myname = 6;
/*After a value is assigned to a variable using the assignment 
operator, you can assign the value of that variable to another variable using the assignment operator.*/
var Myjob;
Myjob = Myname;
/*It is common to initialize a variable to an initial value in 
the same line as it is declared.*/
var Myhome = 7
/*But you can also declare a string variable (inside the brackets is a string lietral) 
like this:*/
var FirstName = "Robin";
var LastName = "Little";
        // When JavaScript variables are declared, they have an initial value
        // of undefined. If you do a mathematical operation on an undefined
        // variable your result will be NaN which means "Not a Number". 
        // If you concatenate a string with an undefined variable, you
        // will get a literal string of undefined.
//This is an example of Camel case
var thisIsHowYouWriteInCamelCase;
/* let, can be used instead of var. It is easy when writing lots of code to 
accidentaly label a variable more than once, using let instead of var, as let
throws this up as an error where var would not */
let Yourname = "Dave";
/* You can also use const to assign a variable, const has all the awesome 
features that let has, with the added bonus that variables declared using 
const are read-only. They are a constant value, which means that once a variable
 is assigned with const, it cannot be reassigned:*/
 const Yourjob = "post man";
// below is how you make sums in java
const Date = 1 + 2  // addition
const Age = 1 - 2  // minus
const Num = 1 * 2 // times by
const Value = 1 / 2 // divided by
/* You can easily increment or add one to a variable with the ++ operator.
i++;
is the equivalent of
i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign.*/
I ++;
/* You can easily decrement or decrease a variable by one with the -- operator.
i--;
is the equivalent of
i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign.*/
I --;
/*We can store decimal numbers in variables too. Decimal numbers are sometimes
referred to as floating point numbers or floats.*/
const myDecimal = 5.7;
//The remainder operator % gives the remainder of the division of two numbers.
17 % 2 = 1; //(17 is Odd)
48 % 2 = 0; //(48 is Even)
//this writes straight text in your website
/*console.log ('Hello World');
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.
One such operator is the += operator.*/
var example = 4;
example += 5; //(instead of exaple = 4+5;)
//Like the += operator, -= subtracts a number from a variable.
let a = 11;
a -= 6;
//The *= operator multiplies a variable by a number.
let a = 5;
a *= 5//instead of a = a * 5;
//The /= operator divides a variable by another number.
//In JavaScript, you can escape a quote from considering 
//it as an end of string quote by placing a backslash (\)
// in front of the quote.
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
//This signals to JavaScript that the following quote is not the 
//end of the string, but should instead appear inside the string.
// So if you were to print this to the console, you would get:this to the console, you would get:
Alan said, "Peter is learning JavaScript".
/*String values in JavaScript may be written with single or 
double quotes, as long as you start and end with the same 
type of quote. Unlike some other programming languages, 
single and double quotes work the same in JavaScript.*/
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string'
/*However, this becomes a problem if you need to use the outermost 
quotes within it. Remember, a string has the same kind of quote at 
the beginning and end. But if you have that same quote somewhere in 
the middle, the string will stop early and throw an error.*/
//so istead of: const badStr = 'Finn responds, "Let's go!"'; 
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
/*Quotes are not the only characters that can be escaped inside a string.
There are two reasons to use escaping characters:

1. To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.*/
        // -\'	single quote
        // -\"	double quote
        // -\\	backslash
        // -\n	newline
        // -\r	carriage return
        // -\t	tab
        // -\b	word boundary
        // -\f	form feed
        
/*In JavaScript, when the + operator is used with a String value,
 it is called the concatenation operator. You can build a new string
  out of other strings by concatenating them together.*/
  const ourStr = "I come first. " + "I come second.";
  /*We can also use the += operator to concatenate a string onto the end 
  of an existing string variable. This can be very helpful to break a long 
  string over several lines.*/
  let ourStr = "I come first. ";
  ourStr += "I come second.";
  /*Sometimes you will need to build a string, Mad Libs style. 
  By using the concatenation operator (+), you can insert one or more 
  variables into a string you're building.
  Example:*/
  const ourName = "freeCodeCamp";
  const ourStr = "Hello, our name is " + ourName + ", how are you?";
      //ourStr would have a value of the string Hello, 
     // our name is freeCodeCamp, how are you?.
/*Just as we can build a string over multiple lines out of string literals,
we can also append variables to a string using the plus equals (+=) operator.
Example:*/
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
/*You can find the length of a String value by writing -.length 
after the string variable or string literal.*/
console.log("Alan Peter".length);
/*Bracket notation is a way to get a character at a specific index within a string.
Most modern programming languages, like JavaScript, don't start counting at 1
like humans do. They start at 0. This is referred to as Zero-based indexing.
For example, the character at index 0 in the word Charles is C. So if const 
firstName = "Charles", you can get the value of the first letter of the string 
by using firstName[0].
Example:*/
/*const firstName = "Charles";
const firstLetter = firstName[0];
You can also use bracket notation to get the character at other positions within 
a string.Remember that computers start counting at 0, so the first character is 
actually the zeroth character.
Example:*/
const firstName = "Ada";
/*const secondLetterOfFirstName = firstName[1]; //secondLetterOfFirstName would have a value of the string d.
In order to get the last letter of a string, you can subtract one from the string's length.
For example, if const firstName = "Ada", you can get the value of the last letter of the string
by using firstName[firstName.length - 1].
Example:*/
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1]; //lastLetter would have a value of the string a.
/*You can use the same principle we just used to retrieve the last character in a string to retrieve
the Nth-to-last character.For example, you can get the value of the third-to-last 
letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]
Example:*/
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3]; //thirdToLastLetter would have a value of the string s.
//Example of adding variables to a string
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
 
const wordBlanks = "I was walking my " + myNoun + ". He was very " + myAdjective + ". He got scared and he " + myVerb + " away, " + myAdverb;
/*With JavaScript array variables, we can store several pieces of data in one place.
You start an array declaration with an opening square bracket, end it with a closing 
square bracket, and put a comma between each entry, like this:*/
const sandwich = ["peanut butter", "jelly", "bread"];
//You can also nest arrays within other arrays, like below:
const teams = [["Bulls", 23], ["White Sox", 45]]; //This is also called a multi-dimensional array.
/*We can access the data inside arrays using indexes.
Array indexes are written in the same bracket notation that strings use, except
that instead of specifying a character, they are specifying an entry in the array.
Like strings, arrays use zero-based indexing, so the first element in an array has
an index of 0.
Example*/
const array = [50, 60, 70];
array[0];
const data = array[1];
array[0] is now 50, and data has the value 60.
            /*Note: There shouldn't be any spaces between the array name 
            and the square brackets, like array [0]. Although JavaScript is 
            able to process this correctly, this may confuse other programmers 
            reading your code.*/
/*Unlike strings, the entries of arrays are mutable and can be changed freely,
even if the array was declared with const.
Example:*/
const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].//ourArray now has the value [15, 40, 30].
            /*Note: There shouldn't be any spaces between the array name and 
            the square brackets, like array [0]. Although JavaScript is able 
            to process this correctly, this may confuse other programmers reading your code.*/
/*One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets
to access your array, the first set of brackets refers to the entries in the outer-most 
(the first level) array, and each additional pair of brackets refers to the next level of entries inside.
Example*/
            
            const arr = [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
              [[10, 11, 12], 13, 14]
            ];
            
            arr[3];
            arr[3][0];
            arr[3][0][1];
                //arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.
/*An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.
Examples:*/
                
                const arr1 = [1, 2, 3];
                arr1.push(4);
                //OR
                const arr2 = ["Stimpson", "J", "cat"];
                arr2.push(["happy", "joy"]);
                        //arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
/*Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array. We can store
this popped off value by assigning it to a variable. In other words, .pop()
removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.*/
                        
                        const threeArr = [1, 4, 6];
                        const oneDown = threeArr.pop();
                        console.log(oneDown);
                        console.log(threeArr);
                            //The first console.log will display the value 6, and the second will display the value [1, 4].
/*pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), except it removes the first 
element instead of the last.
Example:*/
                            
                            const ourArray = ["Stimpson", "J", ["cat"]];
                            const removedFromOurArray = ourArray.shift();
                                //removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].
/*Not only can you shift elements off of the beginning of an array, you can also 
unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end 
of the array, unshift() adds the element at the beginning of the array.
Example:*/
                                
                                const ourArray = ["Stimpson", "J", "cat"];
                                ourArray.shift();
                                ourArray.unshift("Happy");
                                    //After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].
/*In JavaScript, we can divide up our code into reusable parts called functions.
You can call or invoke this function by using its name followed by parentheses, 
like this: functionName(); Each time the function is called it will print out the
 message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.
Here's an example of a function:*/
function functionName() {
  console.log("Hello World");
}
/*Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
When a function is defined, it is typically defined along with one or more parameters. The actual values that are input 
(or "passed") into a function when it is called are known as arguments.
Here is a function with two parameters, param1 and param2:*/
function testFun(param1, param2) {
  console.log(param1, param2);
}
               /* Then we can call testFun like this: testFun("Hello", "World");. We have passed two string 
                arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2
                will equal the string World. Note that you could call testFun again with different arguments
                and the parameters would take on the value of the new arguments.*/
/*Create a function called functionWithArgs that accepts two arguments and 
outputs their sum to the dev console.
Call the function with two numbers as arguments.*/
function functionWithArgs (Y, X) {
    console.log (Y -X )
  }
  functionWithArgs (10, 3)
/*We can pass values into a function with arguments. You can use a return statement 
to send a value back out of a function.
Example*/ 
function plusThree(num) {
return num + 3;
}
  
const answer = plusThree(5);
answer has the value 8. 
                /*plusThree takes an argument for num and returns a value equal 
                to num + 3.*/
/*We can pass values into a function with arguments. You can use a return statement to send
a value back out of a function.
Example*/              
function plusThree(num) {
return num + 3;

}
const answer = plusThree(5);
answer has the value 8.
                //plusThree takes an argument for num and returns a value equal to num + 3.
/*In JavaScript, scope refers to the visibility of variables. Variables which are defined outside 
of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are declared without the let or const keywords are automatically created in the global scope. 
This can create unintended consequences elsewhere in your code or when running a function again.
You should always declare your variables with let or const.*/
let myGlobal = 10 // as this variable is not decalared as part of a fnction it is a global variable
function fun1() {
    oopsGlobal = 5 // Even though this variable is declared within a function, it's still a global variable 
                 //Because it does not use let or const when decalred
}
/*Variables which are declared within a function, as well as the function parameters, have local scope. That means
they are only visible within that function.
Here is a function myTest with a local variable called loc.*/
function myTest() {
  const loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
                         /*The myTest() function call will display the string foo 
                         in the console. The console.log(loc) line (outside of the myTest 
                            function) will throw an error, as loc is not defined outside of the 
                            function.*/
/*It is possible to have both local and global variables with the same name. When you do this,
 the local variable takes precedence over the global variable.
In this example:*/
const someVar = "Hat";
function myFun() {
const someVar = "Head";
}
                            //The function myFun will return the string Head because the local version
                            // of the variable is present.
/*A function can include the return statement but it does not have to. In the case that the 
function doesn't have a return statement, when you call it, the function processes the inner 
code but the returned value is undefined
Example:*/
                            
let sum = 0;
function addSum(num) {
sum = sum + num;
}
addSum(3);
                        //addSum is a function without a return statement. The function will
                        // change the global sum variable but the returned value of the function is undefined
/*If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is
resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
Assume we have pre-defined a function sum which adds two numbers together, then:*/

ourSum = sum(5, 12);  //will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.
/*Another data type is the Boolean. Booleans may only be one of two values: true or false. 
They are basically little on-off switches, where true is on and false is off. 
These two states are mutually exclusive.
Note: Boolean values are never written with quotes.
The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
For example:*/
function welcomeToBooleans() {
    return false; 
}