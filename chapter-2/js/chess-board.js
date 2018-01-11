let size = 8;
let row = '';
let board = '';

for (let i = 1; i <= size; i++) {
    if (i % 2 == 0) {
        for (let j = 1; j <= size; j++) {
            if (j % 2 == 0)
                row += ' ';
            else
                row += '#';
        }
    } else {
        for (let k = 1; k <= size; k++) {
            if (k % 2 == 0)
                row += '#';
            else
                row += ' ';
        }
    }
    board += (row + '\n');
    row = '';
}
console.log(board);