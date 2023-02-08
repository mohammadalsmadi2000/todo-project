"use strict";
// let test = confirm("Do you want to try the trial version");
// if (!test) {
//   let userName = "";
//   let userAge = "";
//   let userGender = "";

//   let nameFlag = false,
//     genderFlag = false,
//     ageFlag = false;

//   userName = prompt("What's your name?");

//   if (userName) {
//     alert(
//       `${userName} Wow! It is very nice that you have a wonderful name. You should thank your parents for this name.`
//     );
//     nameFlag = true;
//   }
//   userGender = prompt(
//     "What is your gender?  The answer should be either (male or female)."
//   );

//   if (
//     userGender.toLowerCase() == "male" ||
//     userGender.toLowerCase() == "female"
//   ) {
//     genderFlag = true;
//     userAge = Number(prompt("What is your age?"));
//     if (isNaN(userAge)) {
//       alert("Please enter correct age :");
//       userAge = prompt("What is your age?");
//     } else if (userAge <= 0) {
//       alert("Please enter correct age :");
//       userAge = prompt("What is your age?");
//     } else ageFlag = true;
//   } else {
//     confirm(
//       "Are you sure to continue?"
//     );
//     genderFlag = false;
//     userAge = Number(prompt("What is your age?"));
//     if (isNaN(userAge)) {
//       alert("Please enter correct age :");
//       userAge = prompt("What is your age?");
//     } else if (userAge <= 0) {
//       alert("Please enter correct age :");
//       userAge = prompt("What is your age?");
//     } else ageFlag = true;
//   }

//   const result = confirm("Wants to skip the welcoming message ?");

//   if (!result) {
//     let temp;
//     if (genderFlag) {
//       userGender.toLowerCase() === "male" ? (temp = "Mr") : (temp = "Ms");
//       alert(
//         `Welcome to our website, " ${temp}.${userName} "! We're glad you're here. We hope you have a great experience and find everything you're looking for. If you need help, please don't hesitate to reach out to us.`
//       );
//     } else alert(
//       `Welcome to our website, "${userName} "! We're glad you're here. We hope you have a great experience and find everything you're looking for. If you need help, please don't hesitate to reach out to us.`
//     );
//   }

//   !genderFlag && result ? confirm("Are you sure to continue?") : null;
// } 
// else {


//   // Below-the-line code is an improved way of writing code----------

//   let name = prompt("Please enter your name:");
//   let gender = prompt("Please enter your gender (male or female):");
//   let age = parseInt(prompt("Please enter your age:"));

//   if (age <= 0 || isNaN(age)) {
//     alert("Invalid age entered");
//   } else {
//     let skipMessage = confirm(`Do you want to skip the welcoming message?`);

// if (!skipMessage) {
//   if (gender === "male") {
//     alert(`Welcome Mr. ${name}`);
//   } else if (gender === "female") {
//     alert(`Welcome Ms. ${name}`);
//   } else {
//     alert(`Welcome ${name}`);
//   }
// }

//   }
// }



// update task05


let userName = prompt("Please enter your name:");
let userGender = prompt("Please enter your gender (male or female):");
let userAge = parseInt(prompt("Please enter your age:"));
let flagAge = checkUserAge();

function checkUserAge() {
  if (userAge <= 0 || isNaN(userAge)) {
    alert("Invalid age entered");
    return false;
  } else return true;
}

while (!flagAge) {
  userAge = parseInt(prompt("Please enter your age:"));
  flagAge = checkUserAge();
}

let skipMessage = confirm(`Do you want to skip the welcoming message?`);

if (!skipMessage) {
  if (userGender.toLowerCase() === "male") {
    alert(`Welcome Mr. ${userName}`);
  } else if (userGender.toLowerCase() === "female") {
    alert(`Welcome Ms. ${userName}`);
  } else {
    alert(`Welcome ${userName}`);
  }
}

//task 06




// Add new three (Yes/No) questions.
//These questions will help me in the future to know user behavior to improve the site later.

let question1 = prompt('Did you like the design of the website?  (Yes or No)');
let question2 = prompt('Did you like the colors of the website?  (Yes or No)');
let question3 = prompt('Were you able to differentiate links easily?  (Yes or No)');


//Function is used to check the validity of answers
function checkUserAnswers(question) {
  if (question.toLowerCase()==="yes"||question.toLowerCase()==="no") {
    return question;
  } else return "invalid";
}

//Check the validity of the answers
question1 = checkUserAnswers(question1);
question2 = checkUserAnswers(question2);
question3 = checkUserAnswers(question3);

//putting all the answers into the Array
let answersArray = [];

// Add the answers to the Array.
answersArray.push(question1);
answersArray.push(question2);
answersArray.push(question3);


//Function used to print the contents of the array
function printArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

printArray(answersArray);

//My code is following the single responsibility rule. (S)OLID
//All functions and variables have a meaningful name.
