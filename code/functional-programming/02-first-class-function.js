// 函数可以存储在变量中
let fn = function () {
    console.log('first-class-function')
}

// 示例
const obj = {
    index (posts) {
        return View.index(posts)
    },
    show (post) {
        return View.show(post)
    }
}

// 传入的参数与返回值的函数参数相同

// 优化后 代码量减少但功能不变
const obj = {
    index: View.index,
    show: View.show
}

