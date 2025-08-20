

const taskService = require('../data/taskService');

// GET /tasks: Retrieve all tasks
exports.getAllTasks = (req, res) => {
    const tasks = taskService.getAllTasks();
    res.status(200).json(tasks);
};

// GET /tasks/:id: Retrieve a specific task by ID
exports.getTaskById = (req, res) => {
    const task = taskService.getTaskById(req.params.id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
};

// POST /tasks: Create a new task
exports.createTask = (req, res) => {
    const { title, description, dueDate, status } = req.body;
    if (!title || !description || !dueDate || !status) {
        return res.status(400).json({ error: 'Missing required fields: title, description, dueDate, status' });
    }
    const newTask = taskService.createTask({ title, description, dueDate, status });
    res.status(201).json(newTask);
};

// PUT /tasks/:id: Update a specific task
exports.updateTask = (req, res) => {
    const updatedTask = taskService.updateTask(req.params.id, req.body);
    if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(updatedTask);
};

// DELETE /tasks/:id: Delete a specific task
exports.deleteTask = (req, res) => {
    const deleted = taskService.deleteTask(req.params.id);
    if (!deleted) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).send();
};