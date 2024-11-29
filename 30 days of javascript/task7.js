var once = function(fn) {
    let executed = false;
    return function(...args){
        if (!executed){
            executed = true;
            return fn(...args)
        } else {
            return undefined
        }
    }
};

let fn = (a,b,c) => (a * b * c)
let onceFn = once(fn)

console.log(onceFn(5,7,4))
console.log(onceFn(5,7,4))
