const num = [1, 2, 3, 4, -13];
let input = Number(prompt("Enter a number "));
let check = num.indexOf(input);
if(check != -1)
{
    alert(`${input} is FOUND in my array at index ${check}`);
}
else
{
    alert(`${input} is NOT found in my array`);
}