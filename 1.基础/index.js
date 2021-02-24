
const target = "(1 + ((2 + 3) * (4 * 5)))"

const ops = []
const vals = []


const compose = f => g => x => f(g(x))

const calc = compose(stringJoin)

function stringJoin(str) {
    return str.join("")
}