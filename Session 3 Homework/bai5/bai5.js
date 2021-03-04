var num = prompt("Enter a squence of Number, separated by commas (,) ");
num = num.split(",");
let sum = 0;
for(let i of num)
{
    sum += Number(i);
}
alert(`The sum of them is ${sum}`);
