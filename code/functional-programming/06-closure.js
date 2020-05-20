// 闭包

// 函数作为返回值，且返回的函数调用了函数的变量
function mater() {
    let msg = 'hello'
    return function () {
        // 函数内没有定义msg，访问了外部函数中的msg
        console.log(msg)
    }
}

const fn = mater()
fn() // hello


// once 延长了外部函数变量的作用范围
function once(fn) {
    let done = false
    return function () {
        if (!done) {
            done = true
            return fn.apply(this, arguments)
        }
    }
}

let pay = once(function (num) {
    console.log(num)
})

pay(1) // 1 执行完done为true，无法再执行
pay(2) 
pay(3) 