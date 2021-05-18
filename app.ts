//decorators decorate and returns a new function

@sealed
class Person {
  msg: string
  constructor(message: string) {
    this.msg = message
  }
  show() {
    return 'Hello, ' + this.msg
  }
}
