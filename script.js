const taskInput = document.getElementById('taskInput');
const taskDescription = document.getElementById('taskDescription');
const dueDateInput = document.getElementById('dueDateInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const statusFilter = document.getElementById('statusFilter');

let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
});

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const taskDescriptionText = taskDescription.value;
  const dueDate = dueDateInput.value;

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="description">${taskDescriptionText}</div>
    <div class="due-date">Due: ${dueDate}</div>
    <div class="actions">
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  const completeBtn = li.querySelector('.complete-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.add('completed'); 
    li.querySelector('.complete-btn').style.display = 'none'; 
  });

  const editBtn = li.querySelector('.edit-btn');
  editBtn.addEventListener('click', () => {
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null) {
      li.querySelector('.task-text').textContent = newTaskText;
    }
  });

  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  taskInput.value = '';
  taskDescription.value = '';
  dueDateInput.value = '';
});

statusFilter.addEventListener('change', () => {
  const selectedStatus = statusFilter.value;

  const allTasks = document.querySelectorAll('#taskList li');

  allTasks.forEach(task => {
    const isCompleted = task.classList.contains('completed');

    if (selectedStatus === 'all') {
      task.style.display = 'block';
    } else if (selectedStatus === 'completed' && isCompleted) {
      task.style.display = 'block';
    } else if (selectedStatus === 'pending' && !isCompleted) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});