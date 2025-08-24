// data/taskService.js: Business logic for MongoDB CRUD operations using Mongoose.

const Task = require('../models/task');

// Get all tasks
exports.getAllTasks = async () => {
    return await Task.find();
};

// Get task by ID
exports.getTaskById = async (id) => {
    return await Task.findOne({ id });
};

// Create a new task
exports.createTask = async (taskData) => {
    const newTask = new Task(taskData);
    return await newTask.save();
};

// Update a task by ID
exports.updateTask = async (id, updates) => {
    return await Task.findOneAndUpdate({ id }, updates, { new: true, runValidators: true });
};

// Delete a task by ID
exports.deleteTask = async (id) => {
    const result = await Task.findOneAndDelete({ id });
    return !!result; // Return true if deleted, false if not found
};