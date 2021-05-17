import { randomInt } from './random'

console.log(randomInt())
let userInput: unknown
let username: string

//unknown typ

userInput = 6
userInput = 'hello'
//unknown more type safe can assign to any type
//can acess any methods on it
if (typeof userInput === 'string') {
  userInput.trim()
}
// let HaveValue: boolean = userInput
// userInput = 'Jill'
// userInput = username
// if (typeof userInput == 'string') username = userInput

//unknown more strict than any

//never type for never returns
// function generateError(msg: string, code: number): never {
//   throw { message: msg, errorCode: code }
// }

// console.log(generateError('error', 500))

//practing few things

// function multiply(n1: number, n2: number) {
//   return n1 + n2
// }

// multiply(10, 30)

// union with type aliases creating types in typescript
type combinedType = string | number

//arays in typescript
const superHeroes = ['batman', 'superman', 'wonder womand']

//enumns
enum STROKE_SIZE {
  'SMALL',
  'MEDIUM',
  'BIG',
}

//defining objects in typescript
let student = {
  firstName: 'mahesh',
  lastName: 'kumar',
  class: 7,
}
//Object types

//function types tells to store a function and its return type
//combine value should hold a function with this signature
let combineValue: (a: number, b: number) => number

//functions types and callback
function computeAndGreet(cb: (message: string) => void) {
  cb('hello')
}

computeAndGreet(console.log)
