function find(linkList, key) {
    if (linkList.item === key) {
        return true
    }

    if (linkList.next === null) {
        return false
    }

    find(linkList.next, key)
}