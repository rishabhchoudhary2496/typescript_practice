//functions ts

function add(n1: number, n2: number) {
  return n1 + n2
}

function greet(greeting: string): void {
  console.log(greeting)
}

//function type
// let combinValue:Function
// let combineValue: (a: number, b: number) => number
// combineValue = add
// combineValue = 5 //coudl throw error
// console.log(combineValue(10, 30))

//funciton type and callback
function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  let result = n1 + n2
  cb(result)
}

addHandle(11, 23, console.log)
