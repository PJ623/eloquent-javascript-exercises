let range = function range(start, end, step) {
    let arr = [];

    if (step == undefined)
        step = 1;

    if (start < end && step > 0) {
        for (let i = start; i <= end; i += step)
            arr.push(i);
    } else if (start > end && step < 0) {
        for (let i = start; i >= end; i += step)
            arr.push(i);
    }

    return arr;
}

let sum = function sum(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++)
        count += arr[i];

    return count;
}

console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(sum(range(5, 2, -1)));