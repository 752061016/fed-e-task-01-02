// 面向过程的方式
let arr = [1, 2, 3, 4]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // 1 2 3 4
}


// 高阶函数
function filter(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

// 不需要考虑代码内部是怎样实现的
// 代码更加简洁
filter(arr, function (i) {
    return i % 2 === 0
}) // [2, 4]