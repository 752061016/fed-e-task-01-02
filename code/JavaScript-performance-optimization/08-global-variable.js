var i,str = ''
for (i = 0; i < 1000; i++) {
    str += i
}

// 局部性能比全局性能要高得多
for (let i = 0; i < 1000; i++) {
    let str = ''
    str += i
}