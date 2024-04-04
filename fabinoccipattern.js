// Problem 21: Fibonacci Pattern
// 1
// 1 1
// 1 1 2
// 1 1 2 3
// 1 1 2 3 5

const size = 5;

let a = 1;
let b = 1;

for (let i = 0; i < size; i++) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        if (i <= 1) {
            row += '1 ';
        } else {
            row += a + ' ';
            let temp = a;
            a = b;
            b = temp + b;
        }
    }

    console.log(row);
}
