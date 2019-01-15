// EXTRA CREDITS
// HOISTING
/* What is Hoisting? Because var declarations are processed at the start of a function irrespective of it's position in the function(assuminng it is not a nested function). We say all var are "hoisted" or raised to the top of the function. This behavior is called "HOISTING". See example below */

function sayMe () {
  console.log(content)
  var content
}
sayMe() // Undefined This results to undefined because the var is hoisted to the top of the function and exist but not defined.

// Below are the differences between the three keywords used in declaring variables in Javascript.

/* The VAR keyword is used in declaring variables in Javascript and was commonly used in ES5 (ECMASCRIPT released 2009) before it became deprecated in ES6 (ECMASCRIPT released 2015).
One major feature of the VAR keyword is that it is function scoped meaning that when you declare a variable within a function it can not be accessed from outside the function only within. However, when you declare a global variable using the VAR keyword, the variable can be used anywhere within the current scope.
see below */

var firstName = 'Richard'
console.log(firstName) // Richard  This is a global variable and the variable can be used anywhere within the current scope.

var lastName = 'Daniel'
function sayHi () {
  console.log('Hello' + ',' + ' my last name is' + ' ' + lastName)
}

sayHi() // Hello, my last name is Daniel The variable lastName is declared on a global scope and is used in a function.

// Declaring a variable within a function see below code

function sayMyLastName () {
  var myLastName = 'Daniel'
  console.log('Hello' + ',' + ' my last name is' + ' ' + myLastName)
}

sayMyLastName() // Hello, my last name is Daniel
console.log(myLastName) // ReferenceError: myLastName is not defined
// As you can see above that declared variable within a function can not be used outside the function. So, we say that VAR is function-scoped.

/* The LET keyword is blocked-scoped in that when a variable is created with LET, it will exist within the block. Example of a block is shown below */

/* {
  // block scope
}

if (true) {
  // block scope
}

while (true) {
  // block scope
}

function () {
  // block scope
} */

for (let i = 1; i < 10; i++) {
  console.log(i)
  setTimeout(function () {
    console.log(i)
  }, 2000)
};

/* Just like LET keyword, the CONST keyword used for declaring variables acts just the same as LET in the lexical environment term as it is also blocked-scoped except for the fact that it can not be reassigned when used to declare an initial variable. See example below */

const myName = 'Richard'
myName = 'John'
console.log(myName) // TypeError: Assignment to constant variable.

let myNickName = 'Ricardo'
myNickName = 'Codejaro'
console.log(myNickName) // Codejaro  It allowed the variable myNickName to be reassigned with another value.
