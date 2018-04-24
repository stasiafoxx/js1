// let favoriteMovie = [];

let firstFavorite = ['The Fundamentals of Caring', 'Trevor Conklin', 2016];
let secondFavorite = ['10 Things I hate About You', 'Patrick Verona', 1999];
let thirdFavorite = ['Lords of Dogtown', 'Tony Alva', 2005];
let fourthFavorite = ['Ready Player One', 'Parzival', 2018];
let fifthFavorite = ['Jarhead', 'Jake Gyllenhaal', 2005];

let favoriteMovie = [];
favoriteMovie.push(firstFavorite, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);

for (let i = 0; i < favoriteMovie.length; i++) {
  if(favoriteMovie[i][0] === 'The Fundamentals of Caring'){
  alert(favoriteMovie [i][0], favoriteMovie [i][2]);
  }
}



// const titles = [];
// const faveAndLeastFave = [];
//
// titles.push(movie1[0], movie2[0], movie3[0], movie4[0], movie5[0]);
// console.log(favoriteMovie);
//
// alert(favoriteMovie);
