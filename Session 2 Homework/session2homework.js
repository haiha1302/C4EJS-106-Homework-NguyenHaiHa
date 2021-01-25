/*
    Câu 1:
        1. var và const là kiểu khai báo biến trong JS
        2. Sự khác nhau giữa var và let:
            - Phạm vi sử dụng của var có thể trong hoặc ngoài funcion, toàn cục.
            - Phạm vi sử dụng của let là trong một block, xác định bằng cặp dấu {}.
        3. Sự khác nhau giữa var và const:
            - var có thể được cập nhật và khai báo lại trong phạm vi của nó, var có thể được khai báo mà không được khởi tạo.
            - const không thể cập nhật hoặc khai báo lại, const phải được khởi tạo trong quá trình khai báo.
        4. Trường hơp sử dụng:
            - Dùng var khi cần truy cập biến nhiều lần.
            - Dùng let khi cần biến truy cập một lần, hiệu quả trong một vòng lặp.
            - Dùng const khi cần định nghĩa một hằng số.
    
    Câu 2:
        1. Boolean là một kiểu dữ liệu
        2. Kết quả kiểu Boolean là một trong hai giá trị thường là "true" hoặc "false".
*/

// Câu 3a:
console.log("Câu 3a");
for(let i = 0; i <= 6; i++)
{
    console.log(i);
}

// Câu 3b:
console.log("Câu 3b");
let n = Number(prompt("Nhập n: "))
for(let i = 0; i < n; i++)
{
    console.log(i);
}

// Câu 3c:
console.log("Câu 3c");
let a = Number(prompt("Nhập n: "))
for(let i = 3; i < a; i++)
{
    console.log(i);
}

// Câu 3d:
console.log("Câu 3d");
let b = Number(prompt("Nhập c: "));
let c = Number(prompt("Nhập n: "));
for(let i = b; i < c; i++)
{
    console.log(i);
}

// Câu 3e:
console.log("Câu 3e");
let d = Number(prompt("Nhập c: "));
let e = Number(prompt("Nhập n: "));
for(let i = d; i < e; i+=3)
{
    console.log(i);
}

// Câu 3f:
console.log("Câu 3f");
let f = Number(prompt("Nhập c: "));
let g = Number(prompt("Nhập n: "));
let h = Number(prompt("Nhập s: "));
for(let i = f; i < g; i+=h)
{
    console.log(i);
}

// Câu 4:
let k = Number(prompt("Nhập n: "));
var giaithua = 1;
for(let i = 1; i <= k; i++)
{
    giaithua = giaithua * i;
}
alert(`The factocial of ${k} is ${giaithua}`);

// Câu 5:
let age = Number(prompt("How old are you ?"));
if(age >= 14)
{
    alert("Enjoy!");
}
else
{
    alert("You are not old enough to view this contents")
}

// Câu 6:
let x = Number(prompt("Enter a number: "));
if(x < 5)
{
    alert("Lower half of 9");
}
else
{
    alert("Higher half of 9");
}

// Câu 7:
let l = Number(prompt("x = "));
let m = Number(prompt("n = "));
if(l < m/2)
{
    alert(`${l} is lower half of ${m}`);
}
else
{
    alert(`${l} is higher half of ${m}`);
}

// Câu 8:
let y = Number(prompt("x = "));
if(y % 2 == 0)
{
    alert(`${y} is an even number`);
}
else
{
    alert(`${y} is an odd number`);
}

// Câu 9a:
for(let i = 0; i < 6; i++)
{
    if(i < 3)
    {
        console.log("L");
    }
    else
    {
        console.log("H");
    }
}

// Câu 9b:
let t = Number(prompt("Nhập n: "));
for(let i = 0; i < t; i++)
{
    if(i <= t/2)
    {
        console.log("L");
    }
    else
    {
        console.log("H");
    }
}

// Câu 9c:
for(let i = 0; i < 8; i++)
{
    if(i % 2 == 0)
    {
        console.log("0");
    }
    else
    {
        console.log("1");
    }
}

// Câu 9d:
let s = Number(prompt("Nhập n: "))
for(let i = 0; i < s; i++)
{
    if(i % 2 == 0)
    {
        console.log("0");
    }
    else
    {
        console.log("1");
    }
}

// Câu 10:
let weight = Number(prompt("Your weight in kg ?"));
let height = Number(prompt("Your height in cm ?"));
var bmi = (weight / Math.pow(height/100, 2));
alert(`Your BMI is ${bmi.toPrecision(3)}`);
if(bmi < 16)
{
    alert("You are severely underweight");
}
else if(16 <= bmi && bmi < 18.5)
{
    alert("You are underweight");
}
else if(18.5 <= bmi && bmi < 25)
{
    alert("You are normal");
}
else if(25 <= bmi && bmi < 30)
{
    alert("You are overweight");
}
else
{
    alert("You are obese");
}