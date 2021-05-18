//class decorators in typescript

// function baseEntity(target: Function) {
//   target.prototype.id = Math.floor(Math.random() * 1000)
//   target.prototype.created = new Date()
// }

// @baseEntity
// class User {
//   constructor(name: string) {
//     console.log('name', name)
//   }
// }

// const amit = new User('amit')
// console.log('amit', amit)

//freezing using decorators so class can not be extended

// class-decorators

// function freeze(target: Function) {
//   Object.freeze(target)
//   Object.freeze(target.prototype)
// }

// @freeze
// class Animal {
//   private age
//   constructor(age: number) {
//     this.age = age
//   }
// }

// class Rabbit extends Animal {} // will throw error

interface IceCreamInterface {
  flavour: string
}
// property decorators
// function Emoji() {
//   return function (target: object, key: string) {
//     let val = target[key]
//     const getter = () => {
//       return val
//     }
//     const setter = (next: string) => {
//       console.log('updating flavor...')
//       val = `🍦 ${next} 🍦`
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }

// class IceCream implements IceCreamInterface {
//   @Emoji()
//   flavour = 'vanilla'
// }

// const motherdairy = new IceCream()
// console.log(motherdairy.flavour)

//method decorators
// Method Decorator
function Confirmable(message: string) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value
    console.log('original', original)

    descriptor.value = function (...args: any[]) {
      const allow = confirm(message)

      if (allow) {
        const result = original.apply(this, args)
        return result
      } else {
        return null
      }
    }

    return descriptor
  }
}
class IceCreamComponent {
  toppings: string[] = []

  @Confirmable('Are you sure?')
  @Confirmable('Are you super, super sure? There is no going back!')
  addTopping(topping: string) {
    this.toppings.push(topping)
  }
}

const i = new IceCreamComponent()
i.addTopping('chocolate syrup')
