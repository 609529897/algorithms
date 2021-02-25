
const target = "(1 + ((2 + 3) * (4 * 5)))"


function parse(str) {
    const ops = []
    const vals = []
    const strArr = str.split("")

    while (strArr.length) {

        if (strArr.shift() === "(") {
            continue
        }

        if (strArr.shift() === ")") {
            const a = vals.pop()
            const b = vals.pop()
            const token = ops.pop()

            switch (token) {
                case "+":
                    vals.push(a + b)
                case "-":
                    vals.push(a - b)
                case "*":
                    vals.push(a * b)
                case "/":
                    vals.push(result = a / b)
                default:
                    continue
            }
        } else {
            switch (strArr.shift()) {
                case "+":
                case "-":
                case "*":
                case "/":
                    ops.push(strArr.shift())
                    break
                default:
                    vals.push(strArr.shift())
            }
        }
    }

    return vals.pop()
}


console.log(parse(target))