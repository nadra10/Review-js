//How do we assign a value to a variable?
let n = 10;
console.log(n);
//How do we change the value of a variable?
i = 2;
console.log(n);
//How do we assign an existing variable to a new variable?
let newN = n;
console.log(newN);
//Remind me, what are declare, assign, and define?
let x; // declare
x = 3; // assign
let k = 5; //define
// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 10;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string
secondVariable = "Hi there";
console.log(secondVariable);
// What is the value of firstVariable?
console.log(firstVariable);
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Nadra R.";

let greeting = "Hello, my name is " + yourName;

console.log(greeting);

// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(!(false || false));
console.log(e == 'Kevin');
console.log(a !== b && b !== c); 
console.log(a === a && a !== d); 
console.log(Number('48') === 48); 

//The farm
let animal = "cow";
animal = "cat";
if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

//Driver's Ed
let age = 20;
age = 14;

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i += 10) {
  console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 40; i += 3) {
console.log(i); 
}

//Get even
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}


// saving account
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(`${bank_account}$`);

bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}
console.log(`${bank_account}$`);

// Accessing elements
const randomThings = [1, 10, "Hello", true];
//How do you access the 1st element in the array?
let firstEl = randomThings[0];
console.log(firstEl);
//Change the value of "Hello"to "World"
randomThings[2] = "World";
console.log(randomThings[2]);
console.log(randomThings);

//Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

let thirdEl = ourClass[2];
console.log(thirdEl);

ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

//Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("new");
myArray.shift(0);
myArray.unshift("Bob Marley");
myArray.pop();

console.log(myArray);

//Biggie Smalls
const number = 75;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

//Monkey in the Middle
const num = 7;

if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}


//IV. Functions
function printCool(name) {
  console.log(name + " is cool");
}

printCool("Captain Reynolds");


//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
function calculateCube(sideLength) {
  const volume = sideLength ** 3;
  console.log(volume);
}

calculateCube(5);

//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case
function isVowel(char) {
  const lowercaseChar = char.toLowerCase();
  return lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u';
}

console.log(isVowel("a")); 
console.log(isVowel("A")); 
console.log(isVowel("e")); 
console.log(isVowel("I")); 
console.log(isVowel("o")); 
console.log(isVowel("U")); 
console.log(isVowel("n")); 


//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  return [length1, length2];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//F. getMultipleLengths
function getMultipleLengths(arr) {
  const lengths = arr.map(str => str.length);
  return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));





