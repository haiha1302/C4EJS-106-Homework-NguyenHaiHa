// 8.1. Tạo mảng và log ra console
const flockOfSheep = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello, my name is Hải Hà and here is my sheep sizes:  `);
console.log(...flockOfSheep);
console.log("\n");

// 8.2. Tìm size lớn nhất trong mảng
let max = Math.max.apply(Math, flockOfSheep);
console.log(`Now my biggest sheep has size ${max}, let's shave it `);
console.log("\n");

// 8.3. Trả size lớn nhất về giá trị defaul = 8
let maxSheep = flockOfSheep.indexOf(max);
flockOfSheep[maxSheep] = 8;
console.log(`After shearing, here is my flock`);
console.log(...flockOfSheep);
console.log("\n");

// 8.4. Sau 1 tháng, tất cả size cộng thêm 50
let new_flockOfSheep = [];
for(let i of flockOfSheep)
{
    i += 50;
    new_flockOfSheep.push(i);
}
console.log("MONTH 1");
console.log("One month has, passed, my sheeps have grown, here are their sizes ");
console.log(...new_flockOfSheep);
console.log("\n");

// 8.5. Làm 4 tháng tiếp theo, hoặc tùy người nhập
let month = Number(prompt("Nhập số tháng bạn muốn: "));
for(a = 2; a <= month; a++)
{
    // Tìm size max trong array mới
    let max_1 = Math.max.apply(Math, new_flockOfSheep); 
    console.log(`Now my biggest sheep has size ${max_1}, let's shave it `);
    console.log("\n");

    // Trả size max về giá trị defaul = 8
    let maxSheep_1 = new_flockOfSheep.indexOf(max_1);
    new_flockOfSheep[maxSheep_1] = 8;
    console.log(`After shearing, here is my flock`);
    console.log(...new_flockOfSheep);
    console.log("\n");

    // Cộng tất cả giá trị thêm 50
    for(b = 0; b < new_flockOfSheep.length; b++)
    {
        new_flockOfSheep[b] += 50;
    }
    console.log(`MONTH ${a}`);
    console.log("One month has, passed, my sheeps have grown, here are their sizes ");
    console.log(...new_flockOfSheep);
    console.log("\n");
}

// 8.6. Tính tổng kích thước và giá tiền
let sum = 0;
for(let c of new_flockOfSheep)
{
    sum += Number(c);
}
console.log(`My flock has size in total: ${sum}`);
let tich = sum * 2;
console.log(`I would get ${sum} * 2$ = ${tich}`);