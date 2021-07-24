
// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// I declared the variable called 'name' and set it to 'Dane' as string
// I checked if name is equal to 'Mary'
// 'Dane' is not equal to 'Mary' so,
// I console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// I declared variable called secret with no value
// I also declared a variable called code and set it equal to 123 as a number
// I checked if code is equal to 123. code is equal to 123, and set variable secret equal to 'super' as string.
//I then multiplied code variable by 2. code is now 246
// I checked if code is greater than 250, and also set variable secret equal to 'duper' as string, but this become false because code is now less than 250
// I console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// I make variable called isStudent and set it's value true as a boolean
// I declared variable called age and set it's value 34 as a number
// I also make variable called zip and set it equal to 55407 as a number
// I checked if isStudent is equal to true and zip is greater than 80000. I checked if isStudent is equal to false or age is less than 30. I also checked isStudent is equal to true. isStudent is equal to true so,
// I  console.log 'Welcome to Prime!', and the code will excute before it goes the else code block


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// it should be let colorOne = 'blue'
let colorOne = 'red';
// should be let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // Fix missing colorTwo = 'purple'

}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - temp is higher than 39 or time is greater than or equal to 4, but the instructions asks to make temp is higher than 39 and time is greater than or equal to 4.
// Should be if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - minAge is less than or equal to age, but the instructions asks to make age is greater than or equal minAge. It should also console.log 'enter' in the if code block.
// Should be if(age >= minAge) {
  console.log('enter');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

*/
