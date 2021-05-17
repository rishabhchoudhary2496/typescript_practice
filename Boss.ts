import { Enemy } from './classes'

class Boss extends Enemy {
  private specialAttack: string
  constructor(
    hp: number,
    mp: number,
    level: number,
    type: string,
    specialAttack: string
  ) {
    super(hp, mp, level, type)
    this.specialAttack = specialAttack
  }

  format() {
    return 'hello'
  }
}

const heisenberg = new Boss(2000, 2000, 50, 'boss', 'magentism')

console.log(heisenberg)
