function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function plus(vector){
    return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function minus(vector){
    return new Vector(this.x - vector.x, this.y - vector.y);
}

Object.defineProperty(Vector.prototype, "length", {
    get: function length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});

let myVector = new Vector(1,2);

console.log('myVector =', myVector);
console.log('myVector.plus(new Vector(2,3)) =', myVector.plus(new Vector(2,3)));
console.log('myVector.plus(new Vector(2,3)) =', myVector.minus(new Vector(2,3)));
console.log('new Vector(3, 4).length =', new Vector(3, 4).length);