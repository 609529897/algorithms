function removeAfter(head, item, currentItem) {

    if (currentItem.key === item.key) {
        currentItem.next = null
        return
    }

    removeAfter(head, item, head.next)
}