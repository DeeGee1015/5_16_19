// stack -> LIFO
// queue -> FIFO
// tree -> data structers that look like trees

array = [ 'devin', 'ash', 'jason', 'freddy', 'michael']

class Stack {
  constructor(arr) {
    this.list = arr
  }
get() {
  let item = this.list.pop()
  this.list.push(item)
  return item
}

add(item) {
  this.list.push(item)
}
}

class Queue {
  constructor(arr) {
    this.list = arr
  }

get() {
  return this.list[0]
}

add(item) {
return this.list.push()
}
}

let stack = new Stack(array)
let queue = new Queue(array)

let Kingdom = {
  king: {name: 'lisa', kinghts: { k1: 'james', k2: 'Sumsh'} }
}
