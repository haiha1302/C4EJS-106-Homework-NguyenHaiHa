let congBtn = document.getElementById('cong-btn')
let count = document.getElementById('count')
let truBtn = document.getElementById('tru-btn')

congBtn.addEventListener('click', cong)
truBtn.addEventListener('click', tru)

var dem = 0

function cong() {
    dem++
    count.innerHTML = dem
}

function tru() {
    dem--
    count.innerHTML = dem
}