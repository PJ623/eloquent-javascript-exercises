var arrays = [[1, 2, 3], [4, 5], [6]];

// Made my own reduce function so I could see how reduce would work.
Array.prototype.myReduce = function myReduce(todo) {
    let accumulator = [];

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]))
            accumulator = todo(accumulator, this[i]);
    }

    return accumulator;
}

console.log(arrays.myReduce(function (a, b) { return a.concat(b); }));
// → [1, 2, 3, 4, 5, 6]