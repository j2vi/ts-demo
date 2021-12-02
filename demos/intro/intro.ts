/* File: intro.js */

const username = "Vitaly",
  year = 1992,
  month = "July",
  day = 30;

let userskills = [
  "Linux",
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "PHP",
  "MySQL",
  "WordPress",
];

let birthday = { day, month, year };

console.log("Hello, my name is", username);
console.log(
  "My birthday is",
  birthday.day,
  "of",
  birthday.month + ",",
  birthday.year,
  "year",
  "\n"
);

function mySkills() {
  console.log("My skills is:");
  for (let i = 0; i <= userskills.length - 1; i++) {
    console.log(userskills[i]);
  }
}
mySkills();
