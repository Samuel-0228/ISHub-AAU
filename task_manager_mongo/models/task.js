// models/task.js: Defines Mongoose schema and model for tasks.

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const taskSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Task', taskSchema);