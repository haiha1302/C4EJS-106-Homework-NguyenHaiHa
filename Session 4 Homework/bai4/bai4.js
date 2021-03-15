let dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
};

console.log(dictionary);

// 4.1
alert("Hi there, this is dev dictionary");
while(true) {
    let inputKey = prompt("Enter a keyword");
    if(Object.keys(dictionary).includes(inputKey) == true) {
        alert(`${inputKey} \n${dictionary[inputKey]}`);
        break;
    }
    else {
        let inputExplanation = prompt(`We could not find your word: ${inputKey}, leave your explanation`);
        dictionary[inputKey] = inputExplanation;
        alert('Done');
    }

}
