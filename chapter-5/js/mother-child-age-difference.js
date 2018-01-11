function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};

ancestry.forEach(function (person) {
    byName[person.name] = person;
});

function difference(parent) {
    let childBirthYear = 0;
    let parentBirthYear = 0;
    let results = [];
    for (let i = 0; i < ancestry.length; i++) {
        if (ancestry[i][parent] != null) {
            childBirthYear = ancestry[i].born;
            if (byName[ancestry[i][parent]] != undefined) {
                parentBirthYear = byName[ancestry[i][parent]].born;
                results.push(childBirthYear - parentBirthYear);
            }
        }
    }
    return results;
}

console.log(average(difference('mother')));
// → 31.2