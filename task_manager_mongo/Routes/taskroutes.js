// routes/taskRoutes.js: Defines API endpoints and maps to controller methods.

const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// GET /tasks
router.get('/', taskController.getAllTasks);

// GET /tasks/:id
router.get('/:id', taskController.getTaskById);

// POST /tasks
router.post('/', taskController.createTask);

// PUT /tasks/:id
router.put('/:id', taskController.updateTask);

// DELETE /tasks/:id
router.delete('/:id', taskController.deleteTask);

module.exports = router;