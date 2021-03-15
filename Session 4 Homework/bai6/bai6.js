let tasks = [
    {
        id: 1,
        name: 'HTML',
        complete: false
    },
    {
        id: 2,
        name: 'CSS',
        complete: false
    },
    {
        id: 3,
        name: 'Basics of JavaScript',
        complete: false
    },
    {
        id: 4,
        name: 'Node Package Manager (npm)',
        complete: false
    },
    {
        id: 5,
        name: 'Git',
        complete: false
    }
];

// 6.1: In ra console
// console.log('Hi there, this is your learning tasks to front-end developer career: ');
// for(let key of tasks) {
//     console.log(`${key.id}. ${key.name}`);
//     console.log(`   Complete: ${key.complete}`);
// }
// console.log('-------------------------------------------------------------------');

let inputUser = prompt('Enter your command (New, Delete, Update, Complete) ');
// 6.2: Người dùng nhập thêm task
if(inputUser == 'New') {
    console.clear();
    let nameOfNewTask = prompt('Enter new task: ');
    nameOfNewTask = {
        id: 6,
        name: nameOfNewTask,
        complete: false
    }
    tasks.push(nameOfNewTask);
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('-------------------------------------------------------------------');
}
// 6.3: Người dùng sửa task
else if(inputUser == 'Update') {
    let position = Number(prompt('Enter position:'));
    let title = prompt('Enter new title');
    tasks[position].name = title;
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('-------------------------------------------------------------------');       
}

// 6.4: Người dùng hoàn thành complete
else if(inputUser == 'Complete') {
    let position = Number(prompt('Enter position:'));
    tasks[position - 1].complete = true;
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('-------------------------------------------------------------------');
}
// 6.5: Xóa task
else(inputUser == 'Delete');{
    let delete_position = Number(prompt('Enter position: '));
    tasks.splice(delete_position - 1, 1);
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('-------------------------------------------------------------------');
}
