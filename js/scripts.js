// let favoriteMovie = [];
//
// let firstFavorite = ['The Fundamentals of Caring', 'Trevor Conklin', 2016];
// let secondFavorite = ['10 Things I hate About You', 'Patrick Verona', 1999];
// let thirdFavorite = ['Lords of Dogtown', 'Tony Alva', 2005];
// let fourthFavorite = ['Ready Player One', 'Parzival', 2018];
// let fifthFavorite = ['Jarhead', 'Jake Gyllenhaal', 2005];
//
// let favoriteMovie = [];
// favoriteMovie.push(firstFavorite, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);
//
// for (let i = 0; i < favoriteMovie.length; i++) {
//   if(favoriteMovie[i][0] === 'The Fundamentals of Caring'){
//   alert(favoriteMovie [i][0], favoriteMovie [i][2]);
//   }
// }
// .....

//
// const titles = [];
// const faveAndLeastFave = [];
//
// titles.push(movie1[0], movie2[0], movie3[0], movie4[0], movie5[0]);
// console.log(favoriteMovie);
//
// alert(favoriteMovie);


// Homework

let todos = [];

let todo1 = [prompt("What do you want to do first?", "Eat")];
let todo2 = [prompt("What do you want to do second?", "Eat")];
let todo3 = [prompt("What do you want to do third?", "Eat")];
// EDGE CASING GOES HERE

todos.push(todo1, todo2, todo3);

for(let i = 0; i < todos.length; i++) {
  let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");
  timeline = !isNaN(parseInt(timeline)) ?
  parseInt(timeline) : 2;
  todos[i].unshift(timeline);
}

let longest = todos[0];
let j = 0;
while(j < todos.length) {
  if todos [j][0] > longest [0] ? longest =
  todos[j] : longest = longest; //Ternary Version
  console.log(todos[j][1]);
  j++;
}
console.log(longest);
longest.push('this');

let z = 0;
do{
  if(todos[z][todos[z].length - 1] !=="this") {
    todos[z].push("done");
  }
  z++
}
