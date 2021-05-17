//interface enforce rules
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(money: number): number
}

const me: IsPerson = {
  name: 'shawn',
  age: 30,
  speak(text: string) {
    console.log(text)
  },
  spend(amount: number) {
    console.log('i spent', amount)
    return amount
  },
}

const greeting = (person: IsPerson) => {
  console.log('hello', person.name)
}

console.log(greeting(me))
