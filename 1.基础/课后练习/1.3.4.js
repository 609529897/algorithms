function parentheses(tokenStr) {
    const stack = [];
    const tokenStrArray = tokenStr.split("");

    for (let token of tokenStrArray.values()) {

        if (token === "(" || token === "{" || token === "[") {
            stack.push(token)
            continue
        }

        const leftToken = stack[stack.length - 1];

        if (token === ")" && leftToken === "(") {
            stack.pop()
            continue
        }

        if (token === "]" && leftToken === "[") {
            stack.pop()
            continue
        }

        if (token === "}" && leftToken === "{") {
            stack.pop()
            continue
        }

        return false
    }

    return stack.length === 0
}

console.log(parentheses("[{[{}]}]"))