// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2
}

//Don't need these as they're already stated in the test
/*addTwoNumbers(0, 0)
addTwoNumbers(1, 0)
addTwoNumbers(1, 1)*/

//works in the devTools but testing says something is wrong
function sayHello(name) {
  if (name === 'Will') {
    return `No more testing ${name}!`
  }
  else {return `Hi there ${name}!`}
}


//return `Hi there ${name}`
//sayHello('Leta')
//sayHello('Casey')
//sayHello('Will')

function buildCar(color, type) {
  var emptyObject = {}

  if (color || type) {
    return {
        color: color,
        type: type,
    }
  }
  else {
  return emptyObject
  }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
