const taskList = document.getElementById('task-list');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const addTaskButton = document.getElementById('add-task');

async function fetchTasks() {
  const response = await fetch('http://localhost:5000/tasks');
  const tasks = await response.json();
  renderTasks(tasks);
}

async function addTask() {
  const title = titleInput.value;
  const description = descriptionInput.value;
  if (!title) return alert('Title is required');

  const response = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  if (response.ok) {
    titleInput.value = '';
    descriptionInput.value = '';
    fetchTasks();
  }
}

async function updateTaskStatus(id, status) {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  });
  fetchTasks();
}

function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <h3 class="${task.status === 'Completed' ? 'completed' : ''}">${task.title}</h3>
        <p>${task.description || ''}</p>
        <p>Status: ${task.status}</p>
      </div>
      <div>
        <button onclick="updateTaskStatus('${task._id}', '${task.status === 'Pending' ? 'Completed' : 'Pending'}')">
          ${task.status === 'Pending' ? 'Complete' : 'Pending'}
        </button>
        <br><br><br>
        <button onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}

addTaskButton.addEventListener('click', addTask);
fetchTasks();
