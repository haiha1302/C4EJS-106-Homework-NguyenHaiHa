const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
for (let x in product) {
    console.log(x);
}

// x nhận thuộc tính của product
for(let i in product)
{
    console.log(`${i}: ${product[i]}`);
}