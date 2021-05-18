// function measureExecTime(fun, ...args) {
//   console.time('measure time')
//   fun(...args)
//   console.timeEnd('measure time')
// }

// function addNumber(...args) {
//   let total = 0
//   for (let n of args) {
//     total += +n
//   }
//   console.log(total)
//   return total
// }

// const result = measureExecTime(addNumber, [10, 3000, 2000, 120])
// console.log('result', result)

const allArgsValid = function (fn) {
  return function (...args) {
    if (args.length !== fn.length) {
      throw new Error('Only submit required number of params')
    }
    const validArgs = args.filter((arg) => Number.isInteger(arg))
    if (validArgs.length < fn.length) {
      throw new Error('Args can not be non integer value')
    }
    return fn(...args)
  }
}

function multiply(a, b) {
  return a * b
}

// const validMultiply = allArgsValid(multiply)

// console.log(validMultiply(10, 20, 30)) //throws error
// console.log(validMultiply(10, 20))
// console.log(validMultiply(10, '20')) //throws error

// function log(classObj, fn) {
//   return function () {
//     console.log('Execution of ' + fn.name)
//     console.time('fn')
//     let val = fn.call(classObj)
//     console.timeEnd('fn')
//     return val
//   }
// }

// class Book {
//   constructor(name, ISBN) {
//     this.name = name
//     this.ISBN = ISBN
//   }

//   getBook() {
//     return `[${this.name}][${this.ISBN}]`
//   }
// }

// let obj = new Book('HP', '1245-533552')
// let getBook = log(obj, obj.getBook)
// console.log(getBook())
//[HP][1245-533552]
