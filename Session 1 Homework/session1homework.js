/*
    Bài 1:
        1. Những trường hợp báo tên biến Invalid Names:
 	        - Tên biến bắt đầu bằng số
 	        - Tên biến chứa ký tự đặc biệt (ngoại trừ “_” và “$”)
 	        - Tên biến trùng với từ khóa keywords trong JavaScript
 	        3 ví dụ Invalid variable names
                let 2tong = “Hello”;
                let tong% = “Hello”;
 	            let class = “Hello”;
        2. Cách kiểm tra kiểu dữ liệu của biến: sử dụng toán tử typeof()

    Bài 2:	1 – b, 2 – a, 3 – e, 4 - c
*/

//Bài 3a:
var message = "Coding is great";
console.log(message);

//Bài 3b:
let studentCount = 0;
console.log(studentCount);

//Bài 4a:
var message1 = "Coding is great";
message1 = "Coding might not be easy, but still great";
console.log(message1);

//Bài 4b:
let studentCount1 = 0;
studentCount1 = 0 + 16;
console.log(studentCount1);

//Bài 4c:
var message2 = "Coding is great";
message2 = "Coding might not be easy, but still great";
console.log(message2.toLowerCase());

//Bài 4d:
let studentCount2 = 0;
studentCount2++;
console.log(studentCount2);

//Bài 5:
alert("You look beautiful today");

//Bài 6:
let a = prompt("Hi there, your name please?");
alert("Hi " + a);

//Bài 7:
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter you last name");
alert(`Hi ${lastName} ${firstName}`);

//Bài 8:
let length = prompt("Enter your length of the square");
length *= length;
alert("The square area is " + length);

//Bài 9:
let radius = prompt("Enter the radius of the circle");
let area = radius ** 2 * Math.PI;
alert("The circle area is " + area);

//Bài 10:
let c = prompt("Enter the temperature in Celcius");
c = Number(c);
let f = 9 / 5 * c + 32;
alert(`${c} (C) = ${f} (F)`);
