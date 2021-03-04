let num = prompt("Enter a squence of numbers, separated by ","");
num = num.split(",");
let min = Math.min.apply(Math, num);
alert(`The smallest number is ${min}`);

// let num = prompt("Enter a squence of numbers, separated by "," ");
// num = num.split(",");
// let min = num[0];
// for(i = 0; i <= num.length; i++)
// {
//     if (min > num[i])
//     {
//         min = num[i];
//     }
// }
// alert(`The smallest number is ${min}`);