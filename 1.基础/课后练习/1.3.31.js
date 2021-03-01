class DoubleNode {
    constructor(key, value) {
        this.next = null
        this.previous = null
        this.key = key
        this.value = value
    }
}

class DoubleLink {
    constructor() {
        this.head = null
        this.len = 0
    }

    unshift(node) {
        if (this.head === null) {
            this.head = node
            node.next = null
            node.previous = this.head
        } else {
            this.head.previous = node
            node.next = this.head
            node.previous = null
        }
    }

    push(node) {
        const current = this.head

        while (current.next !== null) {
            current = current.next
        }

        current.next = node
        node.previous = current

        this.len++
    }

    shift() {
        const item = this.head

        this.head = this.head.next
        this.head.previous = null

        return item
    }

    pop() {
        const current = this.head
        while (current.next.next !== null) {
            current = current.next
        }
        const item = current.next;
        current.next = null
        return item
    }

    afterInsert(item, node) {
        const current = this.head
        while (current.key !== item.key) {
            current = current.next
        }
        node.next = current.next
        current.next = node
        node.previous = current
        node.next.previous = node
    }

    delete(node) {
        const current = this.head
        while (current.next.key !== node.key) {
            current = current.next
        }
        current.next = current.next.next
        current.next.previous = current
    }

    afterDelete(node) {
        const current = this.head
        while (current.key === node.key) {
            current = current.next
        }
        current.next = current.next.next
        current.next.previous = current
    }

    isEmpty() {
        return this.len === 0
    }
}