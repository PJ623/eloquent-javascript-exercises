let deepEqual = function deepEqual(a, b) {

    if ((a == null && b != null) || (a != null && b == null))
        return false;

    for (let prop in a) {

        if (!(prop in b) || typeof a[prop] != typeof b[prop])
            return false;

        if (a[prop] !== b[prop] && (typeof a[prop] != 'object' && typeof b[prop] != 'object'))
            return false;

        if (typeof a[prop] == 'object' && typeof b[prop] == 'object') {
            if (deepEqual(a[prop], b[prop]) == false)
                return false;
        }
    }
    return true;

}

function printDeepEqual(a, b) {
    result = deepEqual(a, b);
    console.log("comparing", a, "to", b, ":", result);
}

var obj = { here: { is: "an" }, object: 2 };

printDeepEqual(obj, { here: 1, object: 2 }); // false
printDeepEqual(null, null); // true
printDeepEqual(obj, obj); // true
printDeepEqual(obj, { slam: true }); // false
printDeepEqual({ king: { disnt: 'vegetable' } }, { king: { is: 'vegetable' } }); // false
printDeepEqual(obj, { here: null, object: 2 }); // false
printDeepEqual(obj, null); // false
printDeepEqual(obj, { here: { is: "an" }, object: 2 }); // true
printDeepEqual(obj, { here: { is: { nothing: '!' } }, object: 5 }); // false
printDeepEqual(obj, [1, null, 3]); // false