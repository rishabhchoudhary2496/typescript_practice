// const person: {name:string,age:number} = {
//     name: 'Ricky',
//     age:28
// }
const person:{name:string,age:number,hobbies:string[],role:[number,string]} = {
    name: 'Ricky',
    age:28,
    hobbies:['sports','cooking'],
    role:[2,'author']
}

// person.role[0] = 'hello'
person.role.push(10)
let favActivity:string[]
favActivity = ['sports']
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

enum COLORS {'RED','BLUE'}


console.log(COLORS.BLUE)
//tuple types

console.log(person.name)