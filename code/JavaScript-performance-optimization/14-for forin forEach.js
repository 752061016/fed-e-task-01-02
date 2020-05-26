var arr = new Array(1, 2, 3, 4, 5)

// 性能最优
arr.forEach(function (i) {
    console.log(i)
})

// 性能第二
for (let i = arr.length; i; i--) {
    console.log(arr[i])
}

// 性能最差
for (const i in arr) {
    console.log(arr[i])
}