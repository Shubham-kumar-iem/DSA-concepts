/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr = init;
    let increment = () => {
        curr = curr + 1;
        return curr;
    }
    let decrement = () => {
        curr = curr - 1;
        return curr;
    }
    let reset = () => {
        curr = init;
        return curr;
    }
    return {increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */