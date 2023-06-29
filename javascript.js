// let message = "Hello World"
// let hello;

// hello = message



// alert(message)
// alert(hello)

// let admin
// let name = "John"

// admin = name

// alert(admin)

// let ourPlanet = "Earth";
// let currentVisitor = "Barth"

// const myInt = 5;
// const myFloat = 6.667;
// myInt;
// myFloat;
// console.log(typeof myInt);
// console.log(typeof myFloat) ;

// const lotsOfDecimals = 1.78935982375948234;
// const twoDecimalPlaces = lotsOfDecimals.toFixed(2)
// console.log(twoDecimalPlaces)

// let myNumber = "74";
// myNumber = Number(myNumber) + 3
// console.log(myNumber)
// myNumber += 3
// console.log(myNumber)

// myNumber++
// console.log(myNumber)
// myNumber--
// console.log(myNumber)

// let a=1, b=1;

// let c = ++a;
// console.log(c)
// let d = b++;
// console.log("d equals " + d)

// "" + 1 + 0
// "10"
// "" - 1 + 0
// -1
// true + false
// 1
// 6 / "3"
// 2
// "2" * "3"
// 6
// 4 + 5 + "px"
// "9px"
// "$" + 4 + 5
// "$45"
// "$"
// "4" - 2
// 2
// "4px" - 2
// NaN
// " -9 " + 5
// " -9 5"
// " -9 " - 5
// -14
// null + 1
// 1
// undefined + 1
// NaN
// " \t \n" - 2
// -2

// let a = prompt("First number?", 1)
// let b = prompt("Second number?", 2)

// alert(+a + +b)

// console.log(23 + 97)
// console.log(1 + 2 + 4 + 6 + 10 + 16)

// console.log((4 + 6 + 9) / 77)

// let a = 10;
// console.log(a)

// console.log(9 * a)

// let b = 7 * a
// console.log(b)

// let max = 57

// let actual = max-13

// let percentage = actual/max
// console.log(percentage.toFixed(4))

//STRINGS//

// const string = "The revolution will not be televised"

// console.log(string)

// const badString = string
// console.log(badString)

// const one = "Hello, "
// const two = "how are you is?"

// const joined = `${one}${two}`
// console.log(joined)

// const output = `I like the song.
// I gave it a score of 90%.`;
// console.log(output)


//CONDITIONALS //

// tellTime = () => {
// let hour = 18
// if (hour <10){
//   greeting = "good day"
// } else if (hour <19) {
//   greeting = "good afternoon"
// } else {
//   greeting = "good night"
// }

// console.log(greeting)
// }

// tellTime()

// let age = 94
// if (!(age <= 13 && age > 90)){
//   console.log("not middle-aged")
// }

// let user = prompt("Who's there?")

// if (user === "Admin"){
//   let password = prompt("What's your password?")
//   if (password === "TheMaster"){
//     alert("Welcome!")
//   } else if (password === "" || password === null){
//     alert("Canceled")
//   } else {
//     alert("Wrong Password")
//   }
// } else if (user === "" || user === null) {
//   alert("Canceled")
// } else {
//   alert("I don't know you")
// }

//MDN CONDITIONALS//
// const select = document.querySelector('select');
// const para = document.querySelector('p')

// select.addEventListener('change', setWeather)

// function setWeather() {
//   const choice = select.value
//   // if (choice === 'Cloudy') {
//   //   para.textContent = "It a cloud"
//   // } else if (choice === 'Sunny'){
//   //   para.textContent = "It a sun tho"
//   // } else {
//   //   para.textContent = ""
//   // }
//   switch(choice){
//     case 'Cloudy':
//       para.textContent = "It a cloud"
//       break;
//     case 'Sunny':
//       para.textContent = "It a sun tho"
//       break;
//     case 'clear':
//       para.textContent = "do it clear?"
//       break;
//     case 'overcast':
//       para.textContent = "you shall not pass!"
//       break;
//     default:
//       para.textContent = ""
//   }
// }

// const select = document.querySelector('select')
// const html = document.querySelector('html')
// document.body.style.padding = '10px'

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor
//   html.style.color = textColor
// }

// select.addEventListener('change', () => select.value === 'black'
// ? update('black', 'white')
// : update('white', 'black')
// );

//ACTIVE LEARNING CALENDAR MDN //
// const select = document.querySelector('select')
// const ul = document.querySelector('ul')
// const h1 = document.querySelector('h1')

// function createCalendar() {
//   const month = select.value
//   switch(month){
//     case 'january':
//   }
// }

// select.addEventListener('change', createCalendar)


// let answer = prompt("What's the official name of javaScript?", "")

// if (answer === "ECMAScript"){
//   alert("Right!")
// } else {
//   alert("You don't know? \"ECMAScript\"!")
// }

// let answer = prompt("Enter a Number", )

// if (answer > 0){
//   alert(1)
// } else if (answer < 0){
//   alert(-1)
// } else {
//   alert(0)
// }


// let a = 4
// let b = 1

// let result = (a + b < 4) ? "Below" :  "Over";
// alert(result)

// let login = prompt("Pls login lol", "")

// let message = (login == "Employee") ? alert("Hello") :
// (login == "Director") ? alert("Greetings") :
// (login == "") ? alert("No login") : alert("")

// MDN Functions Lessons //
// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);

// const btn = document.querySelector('button');
//     const canvas = document.querySelector('canvas');
//     const ctx = canvas.getContext('2d');

//     let WIDTH = document.documentElement.clientWidth;
//     let HEIGHT = document.documentElement.clientHeight;

//     canvas.width = WIDTH;
//     canvas.height = HEIGHT;

//     function random(number) {
//       return Math.floor(Math.random()*number);
//     }

// const myNumber = Math.random(5);
// console.log(myNumber)

// function draw() {
//   ctx.clearRect(0,0,WIDTH,HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = 'rgba(255,0,0,0.5)';
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }
// btn.addEventListener('click', draw)
// draw()

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);

// function checkAge(age) {
//  return (age>18) ? true : confirm('Did parents allow you?')
// }

// console.log(checkAge(18))
// function checkAge(age) {
//   return (age>18) || confirm('Did your parents allow you?')
// }
// console.log(checkAge(15))

// function min(a, b) {
//   return (a>b) ? `the least of the two numbers is ${b}` : `the least of the two numbers is ${a}`  
// }

// console.log(min(4,3))

// function pow(x,n){
//   let result = x
//   for (let i = 1; i < n; i++){
//     result *= x
//   }
//   return result
// }

// let x = prompt('x?', " ")
// let n = prompt('n?', " ")

// if (n < 1 ) {
//   alert(`Power ${n} is not supported, use a positive integer`)
// } else {
//   alert ( pow(x, n))
// }

// console.log(pow(2,3))

// const contacts = ['Buddy:223223', 'Pookie:3452343', 'Roge:2513243', 'Marty:675849', 'Gurlin:923848'];
// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   const searchName = input.value.toLowerCase();
//   input.value = '';
//   input.focus();
//   para.textContent = '';
//   for (const contact of contacts){
//     const splitContact = contact.split(':');
//     if (splitContact[0].toLowerCase() === searchName) {
//       para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//       break;
//     }
//   }
//   if (para.textContent === '') {
//     para.textContent = 'Contact not found.'
//   }
// })

// const addTwo = () => {
// for (let i = 0; i <=10; i ++ ){
//   alert(i)
// }}

// addTwo()

// const container = document.querySelector('#container');
// const bul = document.createElement('div');
// bul.classList.add('bul');
// bul.textContent = 'AHHH';

// container.appendChild(bul);

// const para = document.createElement('p')
// para.classList.add('newPara')
// para.textContent = "this is a new paragraph"
// para.setAttribute('style', 'color: red')


// const smallHead = document.createElement('h3')
// smallHead.classList.add('smallHead')
// smallHead.textContent = "I'm a blue h3!"
// smallHead.setAttribute('style', 'color: blue')

// bul.appendChild(para)
// bul.appendChild(smallHead)

// const newDiv = document.createElement('div')
// newDiv.classList.add('newDiv')
// newDiv.setAttribute('style', 'background-color: pink; border: 2px solid black')

// const newH1 = document.createElement('h1')
// newH1.classList.add('newH1')
// newH1.textContent = "I'm in a div"

// const realPara = document.createElement('p')
// realPara.classList.add('realPara')
// realPara.textContent = "ME TOO!"
// realPara.setAttribute('style', 'background-color: green; border: 2px solid red; text-align: center')

// newDiv.appendChild(newH1)
// newDiv.appendChild(realPara) 
// container.appendChild(newDiv)

// const btn = document.querySelector('#btn')
// btn.onclick = () => alert('allo gov worl')

// const btn2 = document.querySelector('#btn2')
// btn2.addEventListener('click', () => {
//   alert("OIOIOIOIOIOIOI")
// })

// function alertFunction() {
//   alert("WOW YOU ARE GOOD")
// }

// // btn2.addEventListener('click', alertFunction)
// btn2.addEventListener('click', function (e) {
//   console.log(e.target);
//   e.target.style.background = 'chartreuse'
// })

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//   button.addEventListener('click', ()=> {
//     alert(button.id)
//   })
// })
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

// let user = {}

// user.name = "John"
// user.surname = "Smith"
// console.log(user.name)
// user.name = "Perry"
// console.log(user.name)

// delete user.name

// const isEmpty = (obj) => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {}

// console.log(isEmpty(schedule))

// schedule["8:30"] = "wake up"
// console.log(isEmpty(schedule))

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sum(obj){
  let sum = 0
  for (let key in obj){
    sum += obj[key]
  }
  return sum
}

console.log(sum(salaries))