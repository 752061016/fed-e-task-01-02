// 实现curry原理

function curry (fn) {
    // 第一次传递的参数会被记录在args中
    return function curryfn(...args) {
        // 判断实参和形参的个数
        if (args.length < fn.length) {
            return function () {
                // 将保存的参数与当前函数参数合并到一起再返回一个新的函数
                return curryfn(...args.concat(Array.from(arguments)))
            }
        }
        // 参数个数相同则调用并返回
        return fn(...args)
    }
}

function getSum(a, b, c) {
    return a + b + c
}

const curried = curry(getSum)
console.log(curried(1, 2, 3)) // 6
console.log(curried(1)(2, 3)) // 6
console.log(curried(1, 2)(3)) // 6