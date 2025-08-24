// controllers/taskController.js: Handles requests and responses, calls service methods.

const taskService = require('../data/taskService');

// GET /tasks: Retrieve all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// GET /tasks/:id: Retrieve a specific task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid task ID' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// POST /tasks: Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, status } = req.body;
        if (!title || !description || !dueDate || !status) {
            return res.status(400).json({ error: 'Missing required fields: title, description, dueDate, status' });
        }
        const newTask = await taskService.createTask({ title, description, dueDate, status });
        res.status(201).json(newTask);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// PUT /tasks/:id: Update a specific task
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await taskService.updateTask(req.params.id, req.body);
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid task ID' });
        }
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// DELETE /tasks/:id: Delete a specific task
exports.deleteTask = async (req, res) => {
    try {
        const deleted = await taskService.deleteTask(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid task ID' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};