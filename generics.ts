//generics handle multiple types

const addUid = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000)
  return { ...obj, uid }
}

let peson = addUid({ age: 53 })
console.log(peson.age)

const lastElement = <T>(array: [T]) => {
  return [array.length - 1]
}

console.log(['hey', 'ther', 'you'])
console.log([1, 2, 3])

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return { ...obj, fullName: obj.firstName + ' ' + obj.lastName }
}

console.log(makeFullName({ firstName: 'ramesh', lastName: 'suresh', age: 34 }))

// generics with interface

interface Tab<T> {
  id: string
  position: number
  data: T
}

type numberTab = Tab<number>
type stringTab = Tab<string>
