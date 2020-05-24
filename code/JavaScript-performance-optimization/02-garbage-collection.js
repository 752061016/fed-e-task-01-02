// 垃圾回收中的引用和可达

// 这个对象被obj所引用
// obj是可以在根上被访问，obj也是个可达对象
// let obj = {
//     name: 'xm'
// }

// let al = obj
// // 虽然obj被改为了null，但al还是引用着这个对象，所以还是一个可达对象
// obj = null

function objGroup(obj1, obj2) {
    obj1.next = obj2
    obj2.prev = obj1

    return {
        o1: obj1,
        o2: obj2
    }
}

let obj = objGroup({name: 'obj1'}, {name: 'obj2'})
console.log(obj)
// {
//     o1: { name: 'obj1', next: { name: 'obj2', prev: [Circular] } },
//     o2: { name: 'obj2', prev: { name: 'obj1', next: [Circular] } }
// }