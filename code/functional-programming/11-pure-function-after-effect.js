
// 不纯的
let min = 18
function checkAge (age) {
    return age > min
}


console.log(checkAge(20)) // true
min = 25
console.log(checkAge(20)) // false

// 纯函数
function checkAge2(age) {
    let min = 18
    return age > min
}

console.log(checkAge2(20)) // true
console.log(checkAge2(20)) // true