function remove(linkList, key, current) {

    if (current.key === key) {
        current.next = current.next.next
    }

    if (current === null) {
        return
    }
    remove(linkList, key, current.next)
}