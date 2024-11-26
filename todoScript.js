document.getElementById('addTask').addEventListener('click', () => {
    
    
    const taskInput = document.getElementById('teskInput')
    const task = taskInput.value.trim();

    if (task == '') {
        alert("Enter a task")
        return;
    }

    const newList = document.createElement('li')
    newList.classList.add('list-items','border',)

    const items = document.createElement('span')
    items.innerText = task

    newList.appendChild(items)

    const completed = document.createElement('i')
    completed.classList.add('bi', 'bi-check', 'fs-4', 'text-success')
    newList.appendChild(completed)

    completed.addEventListener('click', () => {
        items.classList.toggle('completed')
    })

    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('bi', 'bi-trash', 'fs-5', 'text-danger')
    newList.appendChild(deleteIcon)

    deleteIcon.addEventListener('click',()=>{
        newList.remove()
    })

     document.getElementById("taskList").appendChild(newList)

     taskInput.value = ''

})

