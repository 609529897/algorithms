function deleteItem(k, head) {

    if (k = 0 && head.next) {
        head.next = null
    } else {
        return
    }

    deleteItem(k--, head.next)
}