var reduce = function (nums, fn, init) {
    let res = init
    for (let i = 0; i < nums.length; i++) {
         res = fn(res, nums[i])
    }
    return res
}

// 1. Задается output === ACCUM
// 2. Каждый раз цикл запускается по длине INIT
// 3. Соответственно - каждый раз ЗАПУСКАЕТСЯ ФУНКЦИЯ, которая плюсует OUTPUT (он пустой), и функция возвращает

let nums = []

function sum(accum, curr) {
    return accum + curr;
}

function sum1(accum, curr) { return accum + curr * curr; }

function sum2(accum, curr) { return 0; }

let init = 25

console.log(reduce(nums, sum2, init))