let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        ToDoContainer.removeChild(paragraph);
    })
})