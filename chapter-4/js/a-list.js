let arrayToList = function arrayToList(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        var list = {
            value: arr[i],
            rest: list
        };

        if (i == arr.length - 1)
            list.rest = null;
    }

    return list;
}

let listToArray = function listToArray(list) {
    let arr = [];
    while (list != null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

let prepend = function prepend(ele, list) {
    list = {
        value: ele,
        rest: list
    }
    return list;
}

let nth = function nth(list, n) {
    if (n > 0)
        return nth(list.rest, n - 1);
    else
        return (list != null ? list.value : undefined);
}

let list = arrayToList([1, 2, 3]);
console.log("list = arrayToList([1,2,3])");
console.log("arrayToList(list) =", list);
console.log("listToArray(list) =", listToArray(list));
console.log("prepend(list, 5) =", prepend(list, 0));
console.log("nth(list, 2) =", nth(list, 2));