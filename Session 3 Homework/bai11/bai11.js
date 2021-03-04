let arrNum = prompt("Enter a sequence number ");
arrNum = arrNum.split(",");
let result = arrNum.filter(num => num % 2 != 0);
alert(`${arrNum} => ${result}`);

// let arrNum = prompt("Enter a sequence number ");
// arrNum = arrNum.split(",");
// let arrNum_2 = [];
// for(let i of arrNum)
// {
//     if(i % 2 != 0)
//     {
//         arrNum_2.push(i);
//     }
// }
// alert(`${arrNum} => ${arrNum_2}`);