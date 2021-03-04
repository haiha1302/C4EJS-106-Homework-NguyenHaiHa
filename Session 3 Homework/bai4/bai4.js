let clothes = ["Jean", "T-Shirt", "Socks"];
console.log(clothes);
while(true)
{
    let hi = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D) ? ");
    if(hi == "C" || hi == "c")
    {
        let addClothes = prompt("Enter the name of the new item ");
        clothes.push(addClothes);
        alert("Done");
    }
    else if(hi == "R" || hi == "r")
    {
        console.log("The current item are: ");
        for(i = 0; i < clothes.length; i++)
        {
                console.log(`${i + 1}. ${clothes[i]}`);
        }
    }
    else if(hi == "U" || hi == "u")
    {
        let updateClothes = prompt("Enter the position you want to update");
        let newClothes = prompt("Enter the new name");
        for(m = 0; m <= clothes.length; m++)
        {
            if(updateClothes == m)
            {
                clothes[m - 1] = newClothes;
            }
        }
        alert("Done");
    }
    else if(hi == "D" || hi == "d")
    {
        let del = prompt("Enter the position you want delete ");
        clothes.splice(del - 1, 1);
        alert("Done");
    }
    else
    {
        alert("This command is not supported");
        break;
    }
}