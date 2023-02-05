"use strict";

let userName = "";
let userAge = "";
let userGender = "";

let nameFlag = false,
  genderFlag = false,
  ageFlag = false;

userName = prompt("What's your name?");

if (userName) {
  alert(
    `${userName} Wow! It is very nice that you have a wonderful name. You should thank your parents for this name.`
  );
  nameFlag = true;
}
userGender = prompt(
  "What is your gender?  The answer should be either (male or female)."
);

if (
  userGender.toLowerCase() == "male" ||
  userGender.toLowerCase() == "female"
) {
  genderFlag = true;
  userAge = Number(prompt("What is your age?"));
  if (isNaN(userAge)) {
    alert("Please enter correct age :");
    userAge = prompt("What is your age?");
  }
  ageFlag = true;
} else {
  alert(
    "Unfortunately, it seems that you made a mistake!! Remember that in this world that God created, there are only two genders, 'male' and 'female' only!!"
  );
  genderFlag = false;
  userAge = Number(prompt("What is your age?"));
  if (isNaN(userAge)) {
    alert("Please enter correct age :");
    userAge = prompt("What is your age?");
  }
  ageFlag = true;
}

const result =
  nameFlag && ageFlag ? confirm("wants to skip the welcoming message ?") : null;

if (!result) {
  let temp;
  if (genderFlag) {
    userGender.toLowerCase() === "male" ? (temp = "Mr") : (temp = "Ms");
    alert(
      `Welcome to our website, " ${temp}.${userName} "! We're glad you're here. We hope you have a great experience and find everything you're looking for. If you need help, please don't hesitate to reach out to us.`
    );
  } else confirm("Are you sure to continue?");
}

!genderFlag && result ? confirm("Are you sure to continue?") : null;
