let a = 5;
let b = 6;
console.log(a, b);

// Ví dụ 1
let temp;
temp = a;
a = b;
b = temp;
console.log(a, b);

// Ví dụ 2
[a, b] = [b, a];
console.log(a, b);