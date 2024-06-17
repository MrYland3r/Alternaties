const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, completeTask, deleteTask } = require('../controllers/taskController');

// Task CRUD operations
router.post('/', createTask);     // Create a new task under a goal
router.get('/:goalId', getTasks); // Retrieve all tasks for a specific goal
router.put('/:taskId', updateTask); // Update a specific task
router.patch('/:taskId/complete', completeTask); // Mark a task as completed
router.delete('/:taskId', deleteTask); // Delete a specific task

module.exports = router;
