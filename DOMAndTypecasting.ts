const a = document.querySelector('a')! //not reutnring null ! in typescript

console.log('a', a.tagName)

//explicit type casting to HTMLFormElement
const form = document.querySelector('#formi') as HTMLFormElement
console.log('from', form.children)

const types = document.querySelector('#num1') as HTMLInputElement

console.log('types', types)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  console.log('submit', types.valueAsNumber)
})
