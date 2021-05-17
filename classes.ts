export class Enemy {
  private hp: number
  private mp: number
  private level: number
  private type: string
  constructor(hp: number, mp: number, level: number, type: string) {
    this.hp = hp
    this.mp = mp
    this.level = level
    this.type = type
  }

  heal() {
    this.hp += 5
    this.mp += 5
    console.log(`HP ${this.hp} and MP ${this.mp} after healing`)
  }

  damage() {
    this.hp -= 5
    this.mp -= 5
    console.log(`HP ${this.hp} and MP ${this.mp} after taking damage`)
  }
}

const darkElf = new Enemy(100, 60, 5, 'dark elf')
let enmiesList: Enemy[] = [darkElf]

console.log(darkElf.damage())
console.log(darkElf.heal())

//readonly on read only in inside or outside
//private accesable in inside not outside

//abstract classes typescript
abstract class Transaction {
  deposit(amout: number) {}
  withdraw(amount: number) {}
  returnStatement() {}
}

class Bank extends Transaction {}

const newBank = new Bank()
newBank.deposit(100)
