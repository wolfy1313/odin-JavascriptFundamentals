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

let login = prompt("Pls login lol", "")

let message = (login == "Employee") ? alert("Hello") :
(login == "Director") ? alert("Greetings") :
(login == "") ? alert("No login") : alert("")