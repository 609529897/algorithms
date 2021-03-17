var kthToLast = function (head, k) {
    let first = head
    let second = head

    while (k) {
        first = first.next
        k--
    }

    while (first) {
        first = first.next
        second = second.next
    }

    return second.val
}