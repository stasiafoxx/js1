// let blueDivs = document.getElementsByClassName('blue');
// let h1 = document.getElementsByTagName('h1');
// let para = document.getElementById('para');
// let queryBlues = document.querySelector('h1');
// console.log(queryBlues.clientHeight);

// function queryDom(element, method) {
//   let elementToQuery = document.method('element');
//   console.log(elementToQuery);
// }
//
// let el = prompt("give me an element");
// let method = prompt("Give me a method");
//
// const button =
// document.querySelector('btn-danger');
//
// button.addEventListener('click', (e)
// => {
//   alert('ahhh dratz) ${e.target}');
// });
//
// div.addEventListener('mouseenter'),
// (e) => {
//   e.target.backgroundColor = 'red';
// }
//
// const myImg = document.querySelector('.img');
// function changeImg() {
// myImg.setAttribute('src', 'https://pics.me.me/windowsxp-vines-12324965.png')
// };
//
// myImg.addEventListener('click', ()=>
//   (changeImg()));





const body = document.querySelector('body');

for(let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if(i % 3 === 0 && i % 5 ===0) {
    p.textContent = 'FizzBuzz';
  } else if (i % 3 === 0) {
    p.textContent = 'Fizz';
  } else if(i % 5 ===0) {
    p.textContent = 'Buzz';
  } else {
    p.textContent = i;
  }
  body.appendChild(p);
}
