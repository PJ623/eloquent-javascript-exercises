// Following taken from book... START
function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function () {
    return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};
// END

function StretchCell(inner, width, height) {

    TextCell.call(this, inner.text[0]);

    function getBigger(a, b) {
        if (a > b)
            return a;
        return b;
    }
    this.width = getBigger(inner.minWidth(), width);
    this.height = getBigger(inner.minHeight(), height);
}

StretchCell.prototype = Object.create(TextCell.prototype);

StretchCell.prototype.minWidth = function minWidth() {
    return this.width;
};

StretchCell.prototype.minHeight = function minHeight() {
    return this.height;
};

let sc = new StretchCell(new TextCell('abc'), 1, 2);

console.log('sc =', sc); // StretchCell {text: Array(1), width: 3, height: 2}
console.log('sc.minWidth() =', sc.minWidth()); // 3
console.log('sc.minHeight() =', sc.minHeight()); // 2
console.log(sc.draw(3, 2)); // ["abc", "   "]