var getKthFromEnd = function (head, k) {
    let first = head
    let second = head
    while (k) {
        first.next
        k--
    }

    while (second) {
        second = second.next
        if (first) {
            first = first.next
        } else {
            return second
        }
    }
}