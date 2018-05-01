// console.log("hello world") //Method which is a type of function

// function sayHEllo(name, greeting) {
//   return `Hello ${name}, ${greeting}!`;
//   }
//
//   let myGreeting = sayHello("Connie", "You're the greatest!");
//
//   alert(myGreeting);
// let dogsAge = parseInt(prompt("Let's find out how old your furry friend is in dog years! \n\n What is your dog friend's current age (in human years)?", "3"));
//
// function dogAgeCalculator(age) {
//   return age * 7;
// }
//
// if(!isNaN(dogsAge)) {
//   alert(dogAgeCalculator(dogsAge));
// }
//
//
// alert(`Your pupper is ${dogAge} years old!! Heckin CUTE!`);

function calcLifetime(cheeseAge, amountPerDay) {
  const yearsLeft = 80 - cheeseAge
  return (yearsLeft * 365) * amountPerDay
}

let ageOfUser = parseInt(prompt("Let's figure out much cheese you would need for your WHOLE LIFE! \n\n First of all, how old are you?", "23"));
let dailyUsage = parseInt(prompt("Now, how much cheese are you eating per day? (in lbs of course)"));

if(!isNan(ageOfUser)&&)
