let clothes = ["Jean", "T-Shirt", "Socks"];
while(true)
{
    let hi = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D) ? ");
    if(hi == "C")
    {
        let addClothes = prompt("Enter the name of the new item ");
        clothes.push(addClothes);
        console.log(clothes);
    }
    else if(hi == "R" && hi == "r")
    {
        console.log(clothes);
    }
    else
    {
        alert("This command is not supported");
        break;
    }
}