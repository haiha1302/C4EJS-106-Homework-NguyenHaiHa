let timeSheetData = [
    {
        project: 'Learn front-end',
        task: 'Learn HTML',
        time: 6 
    },
    {
        project: 'Learn front-end',
        task: 'Learn CSS',
        time: 8
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS Variables and Data Types',
        time: 6
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        time: 2
    }
];

console.log(timeSheetData);

// Read the table body from the DOM and
let tbody = document.getElementById('ts_tbody')
console.log(tbody);

// Insert all data into th table body
// for (let i of timeSheetData) {
//     tbody.innerHTML += `<tr><td>${i.project}</td><td>${i.task}</td><td>${i.time}</td></tr>`
// }

// Remove test
let tr = document.getElementsByTagName('tr')
tbody.removeChild(tbody.firstElementChild)
let inputProject = document.getElementById('input-project')
let inputTask = document.getElementById('input-task')
let inputTime = document.getElementById('input-time')
let addBtn = document.getElementById('add-btn')

render()

addBtn.addEventListener('click', add)

function add() {
    timeSheetData.push({
        project: `${inputProject.value}`,
        task: `${inputTask.value}`,
        time: `${inputTime.value}` 
    })

    console.log(timeSheetData);
    render()
   
}

var newColumn = tbody.insertColumn(tbody.column.length)

function render() {
    // for (let i of timeSheetData) {
    //     tbody.innerHTML += `<tr><td>${i.project}</td><td>${i.task}</td><td>${i.time}</td></tr>`
    // }
    // let line = 1
    // tbody.innerHTML = `<tr id="title"><td>Project</td><td>Task</td><td>Time Spent</td><td>Actions</td></tr>`
    // for (let x of timeSheetData) {
    //     tbody.innerHTML += `<tr></tr>`
    //     let tr = tbody.children[line++]
    //     for (let i in x) {
    //         tr.innerHTML += `<td>${x[i]}</td>`
    //     }
    //     tr.innerHTML += `<td><button class='remove-list-btn'>X</button> <button class='update-list-btn'>U</button></td>`
    // }
}
