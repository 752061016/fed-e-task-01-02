// reference count

const user1 = {age: 11}
const user2 = {age: 22}
const user3 = {age: 33}

const nameList = [user1.age, user2.age, user3.age]

function fn() {
    // num1和num2此时都是被挂载在全局上，所以引用次数都不为0
    num1 = 1
    num2 = 2
}

fn()

function fn2() {
    // num1和num2此时挂载在函数中
    // 当函数被调用结束时，两个变量的引用也为0
    const num1 = 1
    const num2 = 2
}

fn2()