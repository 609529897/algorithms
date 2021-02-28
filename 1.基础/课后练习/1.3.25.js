function insertAfter(x, y, head) {

    if (head.key === y.key) {
        x.next = y.next
        y.next = x
        return
    }
    insertAfter(x, y, head.next)
}