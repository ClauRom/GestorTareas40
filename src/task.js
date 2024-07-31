// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('task')) || [];

// funcion para agregar tareas
export const addtask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Funcion para traer la lista de tareas
export const getTask = () => tasks;
