// 非函数式
let num1 = 2
let num2 = 3
let sum = num1 + num2


// 函数式
function sum(a, b) {
    return a + b
}

// 函数式编程：当输入相同时输出也相同
// 特点：可以重复使用
let num1 = sum(2, 3)
console.log(num1) // 5

let num2 = sum(2, 3)
console.log(num2) // 5

let num3 = sum(2, 3)
console.log(num3) // 5