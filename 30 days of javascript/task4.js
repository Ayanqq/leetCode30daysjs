var map = function(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;

};

const plusI = (n) => {
    return n + 1
}

function plusone(n) { return n + 1; }
function plusIndex(n, i) { return n + i; }
function constant() { return 42; }

const newArray = map([1,2,3], plusIndex)
console.log(newArray)

// 1. Приходит массив
// 2. в функцию должен приходить по сути каждый элемент массива
// 3. Пример -> map([1,2,3], plusI)
// 4. plusI(n) => return n+1