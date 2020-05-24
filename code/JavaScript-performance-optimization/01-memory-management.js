// 内存管理

// 内存泄漏
// function fn() {
//     let arr = []
//     arr[10000] = 'code'
// }

// fn()

// 申请空间
let obj = {}
// 使用空间
obj.name = 'lg'
// 释放空间
obj = null