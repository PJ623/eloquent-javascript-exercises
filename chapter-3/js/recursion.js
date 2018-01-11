let isEven = function isEven(a) {
    if (a < 0)
        a = a * -1;

    if (a == 0)
        return true;
    else if (a == 1)
        return false;

    return isEven(a - 2);
}
let a = -6;
console.log('Is', a, 'even?', isEven(a));