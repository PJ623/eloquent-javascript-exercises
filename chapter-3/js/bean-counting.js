let countChar = function countChar(str, target) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == target)
            count++;
    }
    return count;
}
let str = 'Beats by Noel Brown';
let target = 'B';
console.log("'" + target + "'", 'occurs in', '"' + str + '"', countChar(str, target), 'times.');