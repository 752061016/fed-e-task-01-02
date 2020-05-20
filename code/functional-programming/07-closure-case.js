// 示例 数字的次方
function makePower (power) {
    return function (number) {
        return Math.pow(number,power)
    }
}

let power2 = makePower(2)
let power3 = makePower(3)

console.log(power2(3)) // 9
console.log(power2(4)) // 16
console.log(power3(2)) // 8

// 加成
function makeSalary (num1) {
    return function (num2) {
        return num1 + num2
    }
}

let salary1200= makeSalary(1200)
let salary3200= makeSalary(3200)

console.log(salary1200(2000)) // 3200
console.log(salary3200(1000)) // 4200