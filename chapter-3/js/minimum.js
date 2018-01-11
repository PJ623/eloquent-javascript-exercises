let minimum = function minimum(a, b) {
    if (a < b)
        return a;
    else
        return b;
}

let a = 32;
let b = -40;

console.log("Comparing numbers", a, 'and', b);
console.log("Smallest number is", minimum(a, b));