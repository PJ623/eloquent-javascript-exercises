function ArraySeq(arr) {
    this.arr = arr;
    this.index = 0;
    this.current = this.arr[this.index];
}

ArraySeq.prototype.next = function () {
    if (this.index < this.arr.length) {
        this.index++;
        this.current = this.arr[this.index];
    } else {
        this.current = null;
    }
}

function RangeSeq(from, to) {
    this.to = to;
    this.current = from;
}

RangeSeq.prototype.next = function () {
    if (this.current < this.to)
        this.current++;
    else
        this.current = null;
}

function logFive(sequence) {
    for (let i = 0; i < 5; i++) {
        if (sequence.current != null && sequence.current != undefined) {
            console.log(sequence.current);
            sequence.next();
        }
    }
}

console.log("logFive(new ArraySeq([1, 2])):");
logFive(new ArraySeq([1,2]));
console.log("logFive(new ArraySeq([5, 6, 7, 8])):");
logFive(new ArraySeq([5, 6, 7, 8]));

console.log("logFive(new RangeSeq(-3, 10)):");
logFive(new RangeSeq(-3, 10));
console.log("logFive(new RangeSeq(100, 1000)):");
logFive(new RangeSeq(100, 1000));