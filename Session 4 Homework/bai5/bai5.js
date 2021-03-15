let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger'
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone'
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone'
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone'
    }
];

// // 5.1
for(let product in products) {
    console.log(`----------------------------------`);
    console.log(`Name: ${products[product].name} \nPrice: ${products[product].price}`);
}

// // 5.2
let nums = 1;
for(let key in products) {
    console.log(`#${nums++}. ${products[key].name} \n    Price: ${products[key].price}`);
}
let inputPosition = Number(prompt('Enter product position: '));
console.clear();
for(let key_position in products) {
    if(inputPosition == Number(key_position) + 1) {
        console.log(`Name: ${products[key_position].name} \nBrand: ${products[key_position].brand} \nPrice: ${products[key_position].price} \nColor: ${products[key_position].color} \nCategory: ${products[key_position].category}`);
    }
}

// 5.3
let input_Product = prompt('Enter your category? ').toLowerCase();
for(let id_category of products) {
    if(id_category.category.toLowerCase() == input_Product) {
        console.log('----------------------------------');
        console.log(`Name: ${id_category.name} \nPrice: ${id_category.price}`);
    }
}
 
// 5.4
providers = ['Phukienzero Dientuccc', 'Tgdd Ddghn VhStore', 'Tgdd', 'Tgdd'];
let i = 1;
let add = 0;
for(let addProvider of products) {
    addProvider['provider'] = providers[add++];
    //console.log(`#${i++}. ${addProvider.name} \n    Price: ${addProvider.price} \n    Provider: ${addProvider.provider} `);
}

// 5.5
let input_Provider = prompt('Enter provider ');
for(let id_provider of products) {
    if(id_provider.provider.includes(input_Provider) == true) {
        console.log('----------------------------------');
        console.log(`Name: ${id_provider.name} \nBrand: ${id_provider.brand} \nPrice: ${id_provider.price} \nColor: ${id_provider.color} \nCategory: ${id_provider.category} \nProviders: ${id_provider.provider}`);
    }
}