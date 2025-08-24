// data/taskService.js: Business logic and in-memory data management.

const Task = require('../models/task');

let tasks = []; // In-memory storage

// Get all tasks
exports.getAllTasks = () => {
  return tasks;
};

// Get task by ID
exports.getTaskById = (id) => {
  return tasks.find(task => task.id === id);
};

// Create a new task
exports.createTask = (taskData) => {
  const newTask = new Task(taskData);
  tasks.push(newTask);
  return newTask;
};

// Update a task by ID
exports.updateTask = (id, updates) => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  // Only update provided fields
  tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
  return tasks[taskIndex];
};

// Delete a task by ID
exports.deleteTask = (id) => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return false;
  }
  tasks.splice(taskIndex, 1);
  return true;
};
