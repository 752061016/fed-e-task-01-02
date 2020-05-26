function test(fn) {
    console.log(fn())
}

function test2(params) {
    var name = 'lg'
    return name
}

test(function () {
    var name = 'lg'
    return name
})

// 性能有所提高
test(test2)