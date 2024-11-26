Array.prototype.newFilter = function (arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr;

};
let arr = [10, 20, 30]

function greaterThan10(n) {
    return n > 10;
}

function firstIndex(n, i) {
    return i === 0;
}

function plusOne(n) {
    return n + 1
}

console.log(arr.newFilter(arr, greaterThan10))

// const newArray = filter(arr, plusOne)
// console.log(newArray);


// 1. Приходит массив
// 2. В массив должен приходить те элементы, которые подходят условию


let someArray = arr.filter((x) => x > 3)
// console.log(someArray);