var arr = []
arr[1000] = 'icoder'

// 每次都需要获取arr数组的长度再进行判断，影响性能
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 只获取一次arr数组的长度，性能有所提高
for (let i = arr.length; i; i--) {
    console.log(arr[i])
}