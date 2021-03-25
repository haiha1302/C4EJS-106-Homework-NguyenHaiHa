// Read button
let btn = document.getElementById('upper_btn');
console.log(btn);

// Read input
let inputName = document.getElementById('name_input');
console.log(inputName);

// Read div
let div = document.getElementById('result_div');
console.log(div);

// Bắt sự kiện cho button
btn.addEventListener('click', upperName);

function upperName(clickCount) {
    clickCount += 1;
    console.log(`Upper It!!! Just Clicked`);
    console.log(`User's name: ${inputName.value}`);
    console.log(`User name uppercase: ${inputName.value.toUpperCase()}`);
    div.innerHTML = inputName.value.toUpperCase();
}

