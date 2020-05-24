// Task 处理异步任务

const fs = require('fs')
const {task} = require('folktale/concurrency/task')
const {split, find} = require('lodash/fp')

function readFile(filename) {
    return task(resolver => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) resolver.reject(err)

            resolver.resolve(data)
        })
    })
}

readFile('../../package.json')
    // 使用map对数据进行处理
    // 使用\n截取字符串
    .map(split('\n'))
    // 解析带有 version 的字符串
    .map(find(x => x.includes('version')))
    .run() // 开始执行
    .listen({
        // 设置失败回调
        onRejected: err => {
            console.log(err)
        },
        onResolved: value => {
            console.log(value) // "version": "1.0.0",
        }
    })