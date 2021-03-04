let arrName = prompt("Enter a sequence of names ");
arrName = arrName.split(",");
let arrName_2 = [];
for(let i of arrName)
{
    i = `<${i}>`;
    arrName_2.push(i);
}
alert(`${arrName} => ${arrName_2}`);