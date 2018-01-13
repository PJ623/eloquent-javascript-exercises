function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

let byCentury = {};

// Populate the byCentury object.
ancestry.forEach(function (element) {
    let lifeSpan = element.died - element.born;
    let century = Math.ceil(element.died / 100);

    if (!byCentury.hasOwnProperty(century)) {
        byCentury[century] = [];
    }

    byCentury[century].push(lifeSpan);
});

// Calculate the historical life expectancy.
function historicalLifeExpectancy(byCentury) {
    for (century in byCentury) {
        console.log(century + ': ' + average(byCentury[century]));
    }
}

historicalLifeExpectancy(byCentury);
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


// BONUS ANSWER BELOW

console.log('BONUS:');

// Bonus:
function groupBy(arr, fun) {
    let result = {};
    let group;

    for (let i = 0; i < arr.length; i++) {
        group = fun(arr[i]);

        if (!result.hasOwnProperty(group))
            result[group] = [];

        result[group].push(arr[i]);
    }
    return result;
}

// Modified this function for the bonus section.
function betterHLE(byCentury) {
    let lifeSpan;
    let arr = [];

    for (century in byCentury) {
        for (let i = 0; i < byCentury[century].length; i++) {
            lifeSpan = byCentury[century][i].died - byCentury[century][i].born;
            arr.push(lifeSpan);
        }
        console.log(century + ': ' + average(arr));
        arr = [];
    }
}

betterHLE(groupBy(ancestry, function (person) {
    return Math.ceil(person.died / 100);
}));
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94