const items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);

let ul = document.getElementById('item_list_ul');
let li = document.getElementsByTagName('li');
let input = document.getElementById('item_input');
let add_btn = document.getElementById('add_btn');
console.log(ul);
console.log(input);
console.log(add_btn);

ul.removeChild(li[0]);
ul.removeChild(li[0]);

function showList() {
    for (let i of items) {
        ul.insertAdjacentHTML('beforeend', `<li><span>${i}</span>  <button class="remove_btn">Remove</button></li>`);
    }
}
showList();

add_btn.addEventListener('click', addList);

function addList(count) {
    count += 1;
    console.log(`Add button clicked`);
    items.push(input.value);
    ul.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`);
    input.value = '';
    console.log(`${input.value}`);
    console.log(items);
    console.log(ul);
}

let remove = document.getElementsByClassName('remove_btn');
remove.addEventListener('click', countRemove)

function countRemove(x) {
    x += 1;
    console.log('Remove');
}



