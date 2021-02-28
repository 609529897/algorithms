function max(head, maxValue) {

    if (current.value > maxValue) {
        maxValue == current.value
        return
    }

    max(head.next, maxValue)
}