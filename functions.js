// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2
}

addTwoNumbers(0, 0)
addTwoNumbers(1, 0)
addTwoNumbers(1, 1)

//works in the devTools but testing says something is wrong
function sayHello(name) {
  if (name === 'Will') {
    console.log(`No more testing ${name}!`)
  }
  else {console.log(`Hi there ${name}!`)}
}

//return `Hi there ${name}`
sayHello('Leta')
//sayHello('Casey')
//sayHello('Will')

module.exports = {
    addTwoNumbers,
    sayHello,
    // buildCar
}
