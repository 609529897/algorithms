function reverse(head) {
    if (head.next === null) return head
    let last = reverse(head.next)
    head.next.next = head
    head.next = null
    return last
}