function memoize(fn) {

    const cache = []
    return function(...args) {
        return fn(...args);
    }
}

const sum = (a, b) => a + b
const memoizedSum = memoize(sum)

console.log(memoizedSum(2, 2))

// 1. Мемоизация
// 2. Приходит функция, пока из идей - в массив должен помещаться результат данных
// 3. И если в этом массиве уже есть ЭТО ЧИСЛО, то просто эм.. должен браться оттуда результат этот ?