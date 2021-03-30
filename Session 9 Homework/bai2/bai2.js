// let startBtn = document.getElementById('start')
// let stopBtn = document.getElementById('stop')
// let inputTime = document.getElementById('input-time')
// let outputTime = document.getElementById('output-time')

// startBtn.addEventListener('click', start)
// stopBtn.addEventListener('click', stop)

// let time = inputTime.value

// function start() {
//     if(time == '') {
//         time = 5
//         outputTime.innerHTML = time
//     }
//     else {
//         time--
//         outputTime.innerHTML = time
//     }
// }



// function stop() {
//     clearInterval(set)
// }

let startBtn=document.getElementById('start')
let stopBtn=document.getElementById('stop')
let newNumber=document.getElementById('number')
let numberInput=document.getElementById('number-input')

let time
function count(){
    let number=numberInput.value
    newNumber.innerHTML=number
    time=setInterval(function(){
        newNumber.innerHTML=number--
    },1000)

}
startBtn.addEventListener('click',count)

function stop(){
    clearInterval(time)
}
stopBtn.addEventListener('click',stop)
