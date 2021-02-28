class Node {
    constructor(key, value) {
        this.value = value
        this.key = key
        this.next = null
    }
}

const first = new Node(1, "a");
const second = new Node(2, "b");
const third = new Node(3, "c")

let head = first

first.next = second
second.next = third
third.next = first

class LoopLinkList {
    constructor() {

    }
    static create() {
        
    }
    shift() {
        head = first.next
        third.next = head
        return first.value
    }
    push(node) {
        node.next = head
        third.next = node
    }
}