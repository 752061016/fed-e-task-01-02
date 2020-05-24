function fn() {
    const obj1 = {}
    const obj2 = {}

    obj1.name = obj2
    obj2.name = obj1

    return 'lg'
}

// 虽然在全局下已经找不到obj1
// 但是obj2还是存在name指向obj1
// obj1的引用数不为0
// 引用计数就无法将obj1回收，会造成内存浪费
fn()