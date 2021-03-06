let reverseArray = function reverseArray(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--)
        newArr.push(arr[i]);

    return newArr;
}

let reverseArrayInPlace = function reverseArrayInPlace(arr) {
    let hold;

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        hold = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = hold;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([5, 4, 3, 2, 1]));
console.log(reverseArrayInPlace([]));