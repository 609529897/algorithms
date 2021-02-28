function linkListTail(first) {
    const current = first
    while (current.next.next) {
        current = current.next
    }
    current.next = null
}

function tail(first, current) {
    const current = first;
    if (!current.next.next) {
        current.next = null
        return
    }
    tail(first, current.next)
}