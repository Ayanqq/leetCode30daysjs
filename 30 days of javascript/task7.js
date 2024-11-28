var once = function(fn) {

    return function(...args){
        fn(...args)
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3))
