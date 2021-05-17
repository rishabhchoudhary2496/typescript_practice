// union types
type Combineable = number | string

function combine(n1: Combineable, n2: Combineable) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2
  } else {
    return n1.toString() + n2.toString()
  }
}

const result = combine(9, 9)

console.log('result', result)
