// 柯里化

// 原函数
function checkAge(age) {
    let min = 18
    return age > min
}

// 修改
function checkAge2(age, min) {
    return age > min
}

console.log(checkAge2(18, 20)) // false
console.log(checkAge2(18, 24)) // false
console.log(checkAge2(22, 24)) // false

// 柯里化修改
function checkAge3(min) {
    return function (age) {
        return age > min
    }
}

let checkAge18 = checkAge3(18)
let checkAge20 = checkAge3(20)

console.log(checkAge18(20)) // true
console.log(checkAge18(24)) // true
console.log(checkAge20(18)) // false

// 柯里化 es6写法
let checkAge4 = min => (age => age > min)
// 先传递一部分参数，且这部分参数永远不会发生变化
let checkAge10 = checkAge4(10)
// 新的函数接收剩余参数并返回结果
console.log(checkAge10(20)) // true