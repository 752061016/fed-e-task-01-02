// 函数组合

// 执行顺序 从右到左
function compose(f, g) {
    return function (val) {
        return f(g(val))
    }
}

function reverse(arr) {
    return arr.reverse()
}

function first(arr) {
    return arr[0]
}
// 将多个函数组合成一个函数
// 将一个函数的结果作为另一个函数的参数
// 当最后一个函数被处理结束后会被返回最终结果
const last = compose(first, reverse)

const arr = [1,5,6,9]
console.log(last(arr)) // 9