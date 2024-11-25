var createCounter = function(init) {

    let initialValue = init

    return {
        increment: function() {
            init++
            return init
        },
        reset: function() {
            init = initialValue
            return init
        },
        decrement: function() {
            init--
            return init
        }
    }
};

const counter = createCounter(0);
console.log(counter.increment())
console.log(counter.increment())

console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())
