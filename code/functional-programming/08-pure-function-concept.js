// 纯函数和不纯的函数

// slice / splice
let arr = [1, 2, 3, 4, 5]

console.log(arr.slice(0,2)) // [1, 2]
console.log(arr.slice(0,2)) // [1, 2]
console.log(arr.slice(0,2)) // [1, 2]

// 在函数中对数组进行改变，每次的输出也不同
console.log(arr.splice(0, 1)) // [1]
console.log(arr.splice(0, 1)) // [2]
console.log(arr.splice(0, 1)) // [3]

// 手写纯函数

function sum(n, m) {
    return n + m
}

console.log(sum(1,2)) // 3
console.log(sum(1,2)) // 3
console.log(sum(1,2)) // 3