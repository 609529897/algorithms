class Node {
    constructor(key, value) {
        this.value = value
        this.key = key
        this.next = null
    }
}
class queue {
    constructor() {
        this.head = null
        this.last = null
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("the queue is empty")
        } else {
            const h = this.head
            this.head = this.head.next
            h.next = null

            if (this.head === null) {
                this.last = null
            } else {
                this.last.next = this.head
            }

            return h
        }
    }
    enqueue(node) {
        if (this.isEmpty()) {
            this.head = node;
            node.next = node
        } else {
            this.last = node
            this.last.next = this.head
        }
    }
    isEmpty() {
        return this.head === null
    }
}