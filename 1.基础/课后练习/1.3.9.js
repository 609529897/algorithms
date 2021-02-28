// `(( 1 + 2 ) * ((3 - 4 ) * (5 - 6 )))`
const target = "1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )";

function parse(target) {

    const operators = []
    const vals = []

    for (let i = 0; i < target.length; i++) {

        let v = target[i];

        if (v === " ") {
            continue
        }


        if (isOp(v)) {
            operators.push(v);
        } else if (v === ")") {

            const val = vals.pop();
            const op = operators.pop();

            vals.push("(" + vals.pop() + op + val + ")")
        } else {
            vals.push(v)
        }

    }

    return vals.pop();

}

function isOp(target) {
    return ["/", "*", "+", "-"].includes(target)
}

console.log(parse(target))